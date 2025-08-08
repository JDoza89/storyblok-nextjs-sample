import { getStoryblokApi } from "@/lib/api/storyblok/storyblok";
import { StoryblokClient } from "@storyblok/react/rsc";
export const fetchStory = async (
  slug: string,
  language?: string,
  draftMode = false
) => {
  const client: StoryblokClient = getStoryblokApi();
  const response = await client.getStory(slug, {
    version: draftMode ? "draft" : "published",
    resolve_relations: ["popularArticles.articles"],
    language: language || "en-US",
  });
  return response.data.story;
};

export const fetchPreviewData = async (slug: string, language?: string) => {
  try {
    const story = global.storyblokCache?.get(slug) as { content: any };

    if (!story) {
      const result = await fetchStory(slug, language, true);

      return result as { content: any };
    }

    return story || { content: null };
  } catch (e) {
    console.log(e);
    return { content: null };
  }
};
