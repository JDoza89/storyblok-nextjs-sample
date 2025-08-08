import type { ISbStoryData } from "storyblok-js-client";

type RegisterBridgeParams = {
  onInput: (params: ISbStoryData) => void;
};

export const registerStoryblokBridge = ({ onInput }: RegisterBridgeParams) => {
  const isServer = typeof window === "undefined";
  const isBridgeLoaded =
    !isServer && typeof window.storyblokRegisterEvent !== "undefined";

  if (!isBridgeLoaded) {
    return;
  }

  window.storyblokRegisterEvent(() => {
    const sbBridge = new window.StoryblokBridge();
    sbBridge.on(["input"], (event) => {
      if (!event?.story) {
        return;
      }

      onInput(event.story);
    });
  });
};

import crypto from "crypto";

export const verifyPreviewToken = (token: string, timestamp: string) => {
  const validationString = `${process.env.STORYBLOK_SPACE_ID}:${process.env.STORYBLOK_DRAFT_MODE_TOKEN}:${timestamp}`;
  const validationToken = crypto
    .createHash("sha1")
    .update(validationString)
    .digest("hex");

  return (
    token === validationToken &&
    parseInt(timestamp, 10) > Math.floor(Date.now() / 1000) - 3600
  );
};
