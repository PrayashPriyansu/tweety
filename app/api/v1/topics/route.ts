import { google } from "@ai-sdk/google";
import { streamObject } from "ai";
import { z } from "zod";

export const topicSchema = z.object({
  topic: z.array(z.string()).describe("Topics fetched from the database"),
  ideas: z
    .array(z.string())
    .length(4)
    .describe("An array of 4 tweet ideas based on trending news"),
});

const dummyTopicsFromDB = [
  "AI",
  "SpaceX",
  "Tech Layoffs",
  "Next js",
  "Javascript",
  "React",
];

const systemPrompt = `You are a news and trends expert.
Your job is to analyze the given topics and determine which ones are **currently** trending worldwide.
Only return the news of the topics that are relevant **right now** based on recent news and events.

### Instructions:
- Analyze the given topics.
- Check which topics are **actively trending** today.
- Return **ONLY the current news related to these topics**.
- Do NOT add any extra information, just return a clean list.
- Only one line per topic(max 10 letters).
- Only 5 news per request.
- Avoid verbose responses.
`;
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    console.log("Fetched topics from DB:", dummyTopicsFromDB);
    const result = streamObject({
      model: google("gemini-2.0-flash-001", {
        useSearchGrounding: true, // Enables AI to use real-world search grounding
      }),
      system: systemPrompt,
      prompt: JSON.stringify(dummyTopicsFromDB),
      schema: topicSchema,
    });

    console.log("Result:", result);

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(error.message || "Unknown error", { status: 500 });
  }
}
