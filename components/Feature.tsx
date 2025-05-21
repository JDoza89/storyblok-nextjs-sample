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
              <div className="relative w-[280px] h-[370px] m-auto">
                <Image
                  src={blok?.image?.filename}
                  title={blok?.name}
                  alt={blok?.image?.alt}
                  className="object-cover object-center rounded"
                  fill
                  sizes="(max-width: 370px)"
                  quality={75}
                />
              </div>
            ) : null}
          </Link>
        ) : null}
        <h2 className="mx-auto mb-8 font-semibold leading-none tracking-tighter text-neutral-600">
          {blok.name}
        </h2>
      </div>
    </div>
  );
};
export default Feature;
