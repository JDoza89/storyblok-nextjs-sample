import { fetchStory } from "@/lib/api/storyblok/queries";
import { StoryblokStory } from "@storyblok/react/rsc";
export default async function PreviewPage(props: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { params } = props;
  const { slug, lang } = await params;
  console.log(params);
  const pageData = await fetchStory(slug?.join("/") || "home", lang, true);
  return <StoryblokStory story={pageData} />;
}
