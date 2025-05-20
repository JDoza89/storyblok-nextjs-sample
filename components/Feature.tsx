import { StoryBlokComponentType } from "@/app/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

const Feature = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <div className="column feature" {...storyblokEditable(blok)}>
      <div className="p-6">
        {blok?.link?.cached_url ? (
          <Link href={blok?.link?.cached_url} title={blok?.name}>
            {blok?.image?.filename ? (
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={blok?.image?.filename}
                alt="feature"
                width={200}
                height={400}
              />
            ) : null}
          </Link>
        ) : null}
        <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {blok.name}
        </h2>
      </div>
    </div>
  );
};
export default Feature;
