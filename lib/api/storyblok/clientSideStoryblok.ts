"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Carousel from "@/components/Carousel";
import Feature from "@/components/Feature";

let initialized = false;

// Re-initalize the connection with Storyblok client side -
// but only with components that are used in the client side
// This allows us to:
// 1. Use the Storyblok client side API
// 2. See the Client Side Components in the visual editor
// 3. Use the Storyblok API server side when fetching content (ex: AllArticles) -
// reinitializing this component client side has unwanted side effects

export const getClientStoryblokApi = () => {
  if (!initialized) {
    storyblokInit({
      accessToken: process.env.NEXT_PUBLIC_STORYBLOCK_PREVIEW_ACCESS_TOKEN,
      components: { carousel: Carousel, feature: Feature },
      use: [apiPlugin],
      enableFallbackComponent: true,
    });
  }
};
