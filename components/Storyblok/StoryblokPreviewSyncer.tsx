"use client";

import { previewUpdateAction } from "@/actions/previewUpdateAction";
import { registerStoryblokBridge } from "@/lib/utils/preview";
import type { ISbStoryData } from "@storyblok/js";
import { loadStoryblokBridge } from "@storyblok/js";
import type { FC } from "react";
import { startTransition, useEffect } from "react";

type Props = {
  pathToRevalidate: string;
  previewToken: string;
};

export const StoryblokPreviewSyncer: FC<Props> = ({
  pathToRevalidate,
  previewToken,
}) => {
  console.log("StoryblokPreviewSyncer initialized with:", {
    pathToRevalidate,
    previewToken,
  });
  function handleInput(story: ISbStoryData) {
    console.log("Received story input:", story);
    startTransition(() => {
      void previewUpdateAction({
        story,
        pathToRevalidate,
        previewToken,
      });
    });
  }

  useEffect(() => {
    (async () => {
      await loadStoryblokBridge();
      registerStoryblokBridge({
        onInput: handleInput,
      });
    })();
  }, [handleInput]);

  return null;
};
