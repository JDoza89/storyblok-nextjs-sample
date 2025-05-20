import { StoryBlokComponentType } from "@/app/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
const MenuLink = ({ blok }: { blok: StoryBlokComponentType }) => (
  <Link
    className="text-base font-medium text-gray-500 hover:text-gray-900"
    href={`../${blok.link.cached_url}`}
    {...storyblokEditable(blok)}
  >
    {blok.name}
  </Link>
);
export default MenuLink;
