"use client";
import { getStoryblokApi } from "@/lib/api/storyblok/storyblok";

export const StoryblokProvider = ({ children }: React.PropsWithChildren) => {
  getStoryblokApi();
  return children;
};
