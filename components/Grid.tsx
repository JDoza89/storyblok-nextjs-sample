import { StoryBlokComponentType } from "@/app/types/storyblok";
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

const Grid = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok?.columns?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
