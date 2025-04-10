import { NextResponse } from "next/server";

// ✅ Ensure the Gemini API key is set in the environment variables
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("🚨 GEMINI_API_KEY is missing in .env file");
}

// ✅ Handle POST requests
export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // ✅ Send request to Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", text: message }],
        }),
      }
    );

    const data = await response.json();

    // ✅ Handle errors from Gemini API
    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    // ✅ Extract bot's response
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure how to respond.";

    return NextResponse.json({ reply }, { status: 200 });

  } catch (error) {
    console.error("❌ Chatbot error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
