"use client";

import { getClientStoryblokApi } from "@/lib/api/storyblok/clientSideStoryblok";

export const StoryblokProvider = ({ children }: React.PropsWithChildren) => {
  getClientStoryblokApi();
  return children;
};
