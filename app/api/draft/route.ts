import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

function stripPrefix(prefix: string, text: string) {
  return text.startsWith(prefix)
    ? text.slice(prefix.length).replace(/^\/+/, "")
    : text;
}

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";
  const lang = searchParams.get("_storyblok_lang") || "en";
  if (secret !== process.env.PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode();
  draft.enable();
  const availableCookies = await cookies();
  // Need to set sameSite and secure to true for the cookie to be set within the visual editor iFrame
  // TODO: only enable this when in the visual editor
  const cookie = availableCookies.get("__prerender_bypass");
  availableCookies.set("__prerender_bypass", cookie?.value || "", {
    sameSite: "none",
    secure: true,
  });
  const strippedSlug = stripPrefix(lang, slug);
  redirect(`/${lang}/preview/${strippedSlug}?${searchParams.toString()}`);
}
