import { db } from "@/db";
import { brandBriefs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { validUser } from "../auth/validUser";

interface BrandBrief {
  content: string;
}

export async function setBrandBrief(data: BrandBrief) {
  const userId = await validUser();

  if (!userId) {
    throw new Error("User not found");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/v1/structure`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to structure brand brief");
  }

  const structured = await res.json();

  console.log("Structured:", structured);

  // const inserted = await db
  //   .insert(brandBriefs)
  //   .values({
  //     content: data.content,
  //     userId,
  //     structured,
  //   })
  //   .returning();

  // return inserted[0];
}
