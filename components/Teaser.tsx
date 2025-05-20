import { StoryBlokComponentType } from "@/app/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
