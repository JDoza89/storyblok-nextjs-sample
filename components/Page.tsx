import { StoryBlokComponentType } from "@/app/types/storyblok";
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

const Page = ({ blok }: { blok: StoryBlokComponentType }) => (
  <main
    className="text-center mt-4 max-w-[1200px] py-12 m-auto min:md-h-screen"
    {...storyblokEditable(blok)}
  >
    {blok?.body?.map((nestedBlok: StoryBlokComponentType) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
