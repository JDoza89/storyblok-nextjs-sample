import { revalidatePath } from "next/cache";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currentPath = searchParams.get("pathname") || "/";
  const cleanPath = currentPath.startsWith("/")
    ? currentPath
    : `/${currentPath}`;

  const draft = await draftMode();
  draft.disable();

  revalidatePath(cleanPath);
  redirect(cleanPath);
}
