import { z } from "zod";

export const topicSchema = z.object({
  topic: z.array(z.string()).describe("Topics fetched from the database"),
  ideas: z
    .array(z.string())
    .length(4)
    .describe("An array of 4 tweet ideas based on trending news"),
});

export const tweetSchema = z.object({ text: z.string().max(280) });
