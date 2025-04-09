import { validUser } from "@/lib/auth/validUser";
import { brandBriefPrompt } from "@/lib/prompts/brandBriefPrompt";
import { brandBriefSchema, tweetSchema } from "@/lib/prompts/schema";
import { google } from "@ai-sdk/google";
import { auth } from "@clerk/nextjs/server";
import { generateObject } from "ai";
import { NextResponse } from "next/server";
import { object } from "zod";

export async function POST(req: Request) {
  const brandBrief = await req.json();

  try {
    const data = await generateObject({
      model: google("gemini-2.0-flash-001"),
      schema: brandBriefSchema,
      system: brandBriefPrompt,
      temperature: 0.3,
      prompt: brandBrief.content,
    });

    return data.toJsonResponse();
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message || "Unknown error", { status: 500 });
    }
  }
}
