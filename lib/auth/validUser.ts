import "server-only";

import { auth } from "@clerk/nextjs/server";

export async function validUser() {
  const { userId, redirectToSignIn } = await auth();

  console.log("User ID1111:", userId);

  return userId;
}
