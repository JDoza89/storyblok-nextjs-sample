import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  if (secret !== process.env.PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode();
  draft.enable();

  redirect(slug);
}
