// This route is meant to be used to load draft content in the Storyblok visual editor
import { StoryblokPreviewSyncer } from "@/components/Storyblok/StoryblokPreviewSyncer";
import { fetchPreviewData } from "@/lib/api/storyblok/queries";
import { verifyPreviewToken } from "@/lib/utils/preview";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";
import type { FC } from "react";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
  searchParams: Promise<{
    "_storyblok_tk[token]": string;
    "_storyblok_tk[timestamp]": string;
  }>;
};

const PreviewPage: FC<Props> = async ({ params, searchParams }) => {
  const { slug } = await params;
  const {
    "_storyblok_tk[token]": previewToken,
    "_storyblok_tk[timestamp]": timestamp,
  } = await searchParams;

  if (!verifyPreviewToken(previewToken, timestamp)) {
    notFound();
  }
  console.log("Rendering PreviewPage with params:", { slug });

  const currentRoute = `${slug.join("/")}`;
  const cacheKey = `${previewToken}_${currentRoute}`;
  let data = global.storyblokCache?.get(cacheKey) as { content: any };

  if (!data) {
    const response = await fetchPreviewData(`home`);
    console.log("Fetched data for preview:", response);
    data = response;

    if (!response) {
      notFound();
    }
  }

  return (
    <>
      <StoryblokPreviewSyncer
        pathToRevalidate={currentRoute}
        previewToken={previewToken}
      />
      {data ? <StoryblokServerComponent blok={data.content} /> : null}
    </>
  );
};

export default PreviewPage;
