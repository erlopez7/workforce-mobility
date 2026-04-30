export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/chat") {
      return json({ error: "Not found" }, 404);
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    try {
      const body = await request.json();
      const conversationHistory = Array.isArray(body.conversationHistory) ? body.conversationHistory : [];
      const systemPrompt = String(body.systemPrompt || "");

      const reply = await askWithFallbacks(conversationHistory, systemPrompt, env);
      return json({ reply }, 200);
    } catch (err) {
      return json({ error: err?.message || "Proxy error" }, 500);
    }
  }
};

async function askWithFallbacks(history, systemPrompt, env) {
  const errors = [];
  try {
    const out = await askGemini(history, systemPrompt, env.GEMINI_API_KEY, "gemini-2.5-flash");
    if (out) return out;
  } catch (e) {
    errors.push(`Gemini 2.5: ${e.message}`);
  }
  try {
    const out = await askGemini(history, systemPrompt, env.GEMINI_API_KEY, "gemini-2.0-flash-lite");
    if (out) return out;
  } catch (e) {
    errors.push(`Gemini Lite: ${e.message}`);
  }
  try {
    const out = await askGroq(history, systemPrompt, env.GROQ_API_KEY, "llama-3.1-8b-instant");
    if (out) return out;
  } catch (e) {
    errors.push(`Groq 8b: ${e.message}`);
  }
  try {
    const out = await askGroq(history, systemPrompt, env.GROQ_API_KEY, "llama3-70b-8192");
    if (out) return out;
  } catch (e) {
    errors.push(`Groq 70b: ${e.message}`);
  }
  throw new Error(errors.join(" | "));
}

async function askGemini(history, systemPrompt, apiKey, modelName) {
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: history.map((msg) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }]
        })),
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { maxOutputTokens: 1000, temperature: 0.7, thinkingConfig: { thinkingBudget: 0 } }
      })
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message || `${modelName} failed`);
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

async function askGroq(history, systemPrompt, apiKey, model) {
  if (!apiKey) throw new Error("Missing GROQ_API_KEY");
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      max_tokens: 1000,
      messages: [
        { role: "system", content: systemPrompt },
        ...history.map((m) => ({ role: m.role, content: m.content }))
      ]
    })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message || `${model} failed`);
  return data?.choices?.[0]?.message?.content || "";
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function json(payload, status) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders()
    }
  });
}
