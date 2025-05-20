import { fetchStory } from "@/lib/api/storyblok/queries";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { params } = props;
  const { lang } = await params;
  const { isEnabled } = await draftMode();
  const pageData = await fetchStory("home", lang, isEnabled);
  return (
    <div>
      <StoryblokStory story={pageData} />
    </div>
  );
}
