import { StoryBlokComponentType } from "@/app/types/storyblok";
import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";

const PopularArticles = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <div className="pb-14">
      <h2 className="text-3xl">{blok.headline}</h2>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3"
        {...storyblokEditable(blok)}
      >
        {blok?.articles?.length
          ? blok.articles.map((article: any, index: number) => {
              const articleContentWithSlug = {
                ...article.content,
                slug: article.slug,
              };
              return (
                <ArticleTeaser
                  article={articleContentWithSlug}
                  key={article.uuid || `articleTeaser-${index}`}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default PopularArticles;
