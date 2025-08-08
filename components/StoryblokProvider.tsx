"use client";

import { getClientStoryblokApi } from "@/lib/api/storyblok/clientSideStoryblok";
//import { getStoryblokApi } from "@/lib/api/storyblok/storyblok";

export const StoryblokProvider = ({ children }: React.PropsWithChildren) => {
  getClientStoryblokApi();
  // getStoryblokApi();
  return children;
};
