import { getStoryblokApi } from "@/lib/api/storyblok/storyblok";
import { StoryblokClient } from "@storyblok/react/rsc";

export const fetchStory = async (
  slug: string,
  language?: string,
  draftMode?: boolean
) => {
  const client: StoryblokClient = getStoryblokApi();
  const response = await client.getStory(slug, {
    version: draftMode ? "draft" : "published",
    resolve_relations: ["popularArticles.articles"],
    language: language || "en-US",
  });
  return response.data.story;
};
