import { pgTable, uuid, text, timestamp, json } from "drizzle-orm/pg-core";

export const brandBriefs = pgTable("brand_briefs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  content: text("content").notNull(),
  structured: json("structured").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const tweets = pgTable("tweets", {
  id: uuid("tweet_id").defaultRandom().primaryKey(),
  user_id: text("user_id").notNull(),
  rules: text("rules").array().notNull(),
  structured: json("structured").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
