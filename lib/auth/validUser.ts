import { auth } from "@clerk/nextjs/server";

export async function validUser() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    redirectToSignIn();
  }

  return userId;
}
