import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { Suspense } from "react";
import Skeleton from "./Skeleton";
import { StoryBlokComponentType } from "@/app/types/storyblok";

const getArticles = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
  });
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  return data?.stories?.map((story) => {
    story.content.slug = story.slug;
    return story;
  });
};

const AllArticlesContent = async ({
  blok,
}: {
  blok: StoryBlokComponentType;
}) => {
  const articles = await getArticles();
  return (
    <div>
      <p className="text-3xl">{blok.headline}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {articles?.length
          ? articles?.map((article) => (
              <ArticleTeaser article={article.content} key={article.uuid} />
            ))
          : null}
      </div>
    </div>
  );
};

const AllArticlesSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <div key={index} className="p-4 space-y-4 w-full mb-8">
            <Skeleton className="h-32 w-full rounded-md" />
            <Skeleton className="h-4 w-3/4 mr-auto ml-auto" />
            <Skeleton className="h-4 w-1/2 mr-auto ml-auto" />
          </div>
        );
      })}
    </div>
  );
};

const AllArticles = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <Suspense fallback={AllArticlesSkeleton()}>
      <AllArticlesContent blok={blok} />
    </Suspense>
  );
};
export default AllArticles;
