import { fetchStory } from "@/lib/api/storyblok/queries";
import { getStoryblokApi } from "@/lib/api/storyblok/storyblok";
import { supportedLanguages } from "@/lib/constants";
import { StoryblokClient, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import React from "react";

//statically generate routes at build time instead of on-demand at request time
//Content is memoized - any fetch requests with the same arguments will not be made again
export const generateStaticParams = async () => {
  const client: StoryblokClient = getStoryblokApi();
  const { data } = await client.get("cdn/links/", {
    version: "published",
  });
  const keys = [] as { params: { lang: string; slug: string } }[];
  supportedLanguages.forEach((lang) => {
    Object.keys(data.links).forEach((linkKey) => {
      const link = data.links[linkKey];
      if (link.is_folder || link.slug === "home") return;
      const slug = link.slug.split("/");
      keys.push({ params: { lang, slug } });
    });
  });
  return keys;
};

export default async function Page(props: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { isEnabled } = await draftMode();
  const { params } = props;
  const { slug, lang } = await params;
  const pageData = await fetchStory(slug.join("/"), lang, isEnabled);

  return <StoryblokStory story={pageData} />;
}
