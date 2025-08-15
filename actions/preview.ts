"use server";

import { draftMode } from "next/headers";

export async function disablePreviewAction() {
  const draft = await draftMode();
  draft.disable();
}
