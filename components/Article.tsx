import { StoryBlokComponentType } from "@/app/types/storyblok";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

const Article = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="container max-w-[1200px] h-[400px] relative mb-10 rounded overflow-hidden">
          {blok?.image?.filename ? (
            <Image
              alt={blok?.image?.alt}
              src={blok.image.filename}
              fill
              className="object-cover object-center"
            />
          ) : null}
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blok.title}
          </h1>
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-600">
            {blok.subtitle}
          </h2>
          <div className="mb-8 leading-relaxed text-justify">
            {render(blok.content)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
