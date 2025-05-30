import { StoryBlokComponentType } from "@/app/types/storyblok";
import Link from "next/link";
import Image from "next/image";

const ArticleTeaser = ({ article }: { article: StoryBlokComponentType }) => {
  return (
    <div className="column feature">
      <div className="p-6">
        {article?.image?.filename ? (
          <Image
            className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
            src={article?.image?.filename}
            alt={article.image.alt}
            width={300}
            height={200}
          />
        ) : null}
        <h2 className="mx-auto mb-8 font-semibold leading-none tracking-tighter text-neutral-600">
          {article.title}
        </h2>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {article.teaser}
        </div>
        <div className="mt-4">
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center mt-4 font-semibold lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            Read More »
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ArticleTeaser;
