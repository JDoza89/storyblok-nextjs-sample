import { StoryBlokComponentType } from "@/app/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <h2 className="text-2xl pb-4" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
