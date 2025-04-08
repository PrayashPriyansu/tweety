import { tweetSchema } from "@/lib/prompts/schema";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

const maxIterations = 5;

const brandBrief = `
  ### **📌 Brand Brief**  
**Who We Are:**  
We create fun, engaging, and educational content for social media, focusing on Twitter. Our goal is to make learning enjoyable by delivering witty, relatable, and insightful tweets that spark conversations.  

**Our Tone & Personality:**  
- Conversational, like a friend texting you.  
- Witty and humorous, but never forced.  
- Informative but **not boring or robotic**.  
- Relatable and engaging, avoiding corporate-speak.  

**Target Audience:**  
- Tech enthusiasts, developers, and curious minds.  
- People who enjoy learning through humor and bite-sized insights.  
- Twitter users who appreciate clever and engaging content.  
`;

const rules = `
### **📌 Tweeting Rules**  
- **Keep it under 280 characters.** Short, sharp, and impactful.  
- **No excessive hashtags.** Use them **only if necessary.**  
- **Make it engaging and natural.** No robotic or generic marketing language.  
- **Use humor where appropriate.** Witty analogies, memes, and sarcasm are welcome.  
- **Avoid sounding like a corporate account.** Be a person, not a press release.  
- **Educational content should feel effortless.** No jargon overload—make it digestible.  
- Emphasize on human like and natural language.

🚀 **Golden Rule:**  
If it sounds like a **funny, smart friend** tweeted it—it's good. If it sounds like a **brand trying too hard**—rework it. 😎
`;

const systemPrompt = `You are a creative social media expert specializing in Twitter.
Your job is to generate a **single**, engaging tweet based on the given context.

### Context:
${brandBrief}
### Rules:
${rules}

### Example Input:
"TypeScript"

### Example Output:
"TypeScript is just JavaScript with a strict parent who checks your homework. Annoying at times, but saves you from failing later. 🤓"`;

export const maxDuration = 30;

export async function POST(req: Request) {
  const context = await req.json();

  try {
    let iterations = 0;

    const firstTweet = await generateObject({
      model: google("gemini-2.0-flash-001"),
      schema: tweetSchema,
      system: systemPrompt,
      temperature: 0.8,
      topK: 40,
      topP: 0.9,
      prompt: `Generate a tweet based on: ${context}`,
    });

    let bestTweet = firstTweet;

    console.log("First tweet:", firstTweet.object.text);

    while (iterations < maxIterations) {
      const { object: evaluation } = await generateObject({
        model: google("gemini-2.0-flash-001"),
        schema: z.object({
          qualityScore: z
            .number()
            .min(1)
            .max(10)
            .describe(
              "A score from 1 to 10 indicating the overall quality of the tweet, where 1 is the lowest and 10 is the highest."
            ),
          uniqueness: z
            .boolean()
            .describe("Indicates whether the tweet is not too generic."),
          creativityIndex: z
            .number()
            .min(0)
            .max(10)
            .describe(
              "A score from 0 to 10 indicating the level of creativity in the tweet, with 0 indicating a lack of creativity and 10 indicating a high level of creativity. Creativity is measured based on the presence of unique ideas, original content, and diverse perspectives."
            ),
          preservesTone: z
            .boolean()
            .describe(
              "Indicates whether the tweet maintains the intended tone (e.g., formal, humorous, professional, etc.)"
            ),
          human: z
            .boolean()
            .describe(
              "Indicates whether the tweet is written by a human, rather than an AI or a machine."
            ),
          humanLikenessScore: z
            .number()
            .min(1)
            .max(10)
            .describe("How natural and human-like the tweet feels."),
          preservesNuance: z
            .boolean()
            .describe(
              "Indicates whether the tweet retains the subtle meanings and context intended by the author."
            ),
          culturallyAccurate: z
            .boolean()
            .describe(
              "Indicates whether the tweet respects cultural sensitivities and avoids misrepresentation."
            ),
          specificIssues: z
            .array(z.string())
            .describe(
              "A list of specific problems identified in the tweet, such as grammatical errors, lack of clarity, insensitivity or creativity. Do use :(or semi-colon) unless very urgently needed."
            ),
          improvementSuggestions: z
            .array(z.string())
            .describe(
              "A list of suggested improvements to enhance the tweet's quality, readability, humanlikeness or cultural sensitivity."
            ),
        }),
        system: `You are an expert in evaluating Twitter posts based on ${brandBrief} ${rules}`,
        prompt: `Evaluate this tweet: "${bestTweet.object.text}"`,
      });

      console.log("Evaluation:", evaluation);

      if (
        evaluation.qualityScore >= 8 &&
        evaluation.creativityIndex >= 7 &&
        evaluation.humanLikenessScore >= 8 &&
        evaluation.preservesTone &&
        evaluation.uniqueness &&
        evaluation.preservesNuance &&
        evaluation.culturallyAccurate
      ) {
        break;
      }

      const improvedTweet = await generateObject({
        model: google("gemini-2.0-flash-001"),
        schema: tweetSchema,
        system: `You are a social media expert improving tweets.`,
        prompt: `Improve this tweet based on the following feedback:
        - ${evaluation.specificIssues.join("\n")}
        - ${evaluation.improvementSuggestions.join("\n")}
        
        Original Tweet: "${firstTweet.object.text}"`,
      });

      console.log("Improved tweet:", improvedTweet.object.text);

      bestTweet = improvedTweet;
      iterations++;
    }

    return bestTweet.toJsonResponse();
  } catch (error: unknown) {
    console.error("Error:", error);
    if (error instanceof Error) {
      return new Response(error.message || "Unknown error", { status: 500 });
    }
  }
}
