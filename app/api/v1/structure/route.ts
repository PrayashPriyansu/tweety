import { validUser } from "@/lib/auth/validUser";
import { z } from "zod";

const structureSchema = z.object({
  structure: z.string().describe("Structure of the brand"),
});