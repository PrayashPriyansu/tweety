import "server-only";

import { db } from "@/db";
import { brandBriefs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { validUser } from "../auth/validUser";

interface BrandBrief {
  content: string;
}

async function setBrandBrief(data: BrandBrief) {
  const userId = await validUser();

  if (!userId) {
    throw new Error("User not found");
  }

  const brandBrief = await db.insert(brandBriefs).values({
    content: data.content,
    userId,
    structured: {},
  });
}
