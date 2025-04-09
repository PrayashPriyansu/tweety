"use server";

import { db } from "@/db";
import { brandBriefs } from "@/db/schema";
import { validUser } from "@/lib/auth/validUser";
import { brandBriefSchema } from "@/lib/prompts/schema";
import { experimental_useObject as useObject } from "@ai-sdk/react";

interface BrandBrief {
  content: string;
}

export async function setBriefAction(brandBrief: BrandBrief) {
  const userId = await validUser();

  if (!userId) {
    throw new Error("User not found");
  }

  try {
    const data = await fetch("http://localhost:3000/api/v1/structure", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: brandBrief.content }),
    });

    const structured = await data.json();

    if (!structured.error) {
      console.log("Structured:", structured);
    }

    const inserted = await db
      .insert(brandBriefs)
      .values({
        content: brandBrief.content,
        userId,
        structured,
      })
      .returning();

    return inserted[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
