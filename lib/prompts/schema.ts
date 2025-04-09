import { z } from "zod";

export const topicSchema = z.object({
  topic: z.array(z.string()).describe("Topics fetched from the database"),
  ideas: z
    .array(z.string())
    .length(4)
    .describe("An array of 4 tweet ideas based on trending news"),
});

export const tweetSchema = z.object({ text: z.string().max(280) });

export const brandBriefSchema = z.object({
  nonVerbose: z
    .string()
    .describe("Full brief in a short non lossy, non verbose format "),
  tone: z
    .string()
    .describe(
      "The tone of the content like playful, professional, sarcastic, etc."
    ),
  audience: z.string().describe("Target audience"),
});

export const rulesSchema = z.object({
  nonVerbose: z
    .string()
    .describe("All the rules in a short non lossy,non verbose format "),
  dos: z
    .array(z.string())
    .describe("Things you want the content to include or follow"),
  donts: z.array(z.string()).describe("Things the content must avoid"),
});
