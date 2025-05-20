import { StoryBlokComponentType } from "@/app/types/storyblok";
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
const HeaderMenu = ({ blok }: { blok: StoryBlokComponentType }) => (
  <div
    className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10"
    {...storyblokEditable({ blok })}
  >
    {blok.links.map((nestedBlok: any) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
export default HeaderMenu;
