"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setCookieAction(
  cookieKey: string,
  cookieValue: string,
  redirectPath?: string
) {
  const cookieStore = await cookies();
  cookieStore.set(cookieKey, cookieValue, { maxAge: 30 * 24 * 60 * 60 });

  if (redirectPath) {
    redirect(redirectPath);
  }
}
