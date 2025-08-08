"use server";

import type { ISbStoryData } from "@storyblok/js";
import { revalidatePath } from "next/cache";

type Args = {
  story: ISbStoryData;
  pathToRevalidate: string;
  previewToken: string;
};

export async function previewUpdateAction({
  story,
  pathToRevalidate,
  previewToken,
}: Args) {
  if (!story) {
    console.error("No story provided");
    return;
  }

  try {
    if (!pathToRevalidate || !previewToken) {
      return;
    }

    global.storyblokCache?.set(`${previewToken}_${pathToRevalidate}`, {
      story,
    });

    revalidatePath(pathToRevalidate);
  } catch (error) {
    console.log(error);
  }
}
