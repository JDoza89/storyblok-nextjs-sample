import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import Image from "next/image";
import { StoryBlokComponentType } from "@/app/types/storyblok";
const Config = ({ blok }: { blok: StoryBlokComponentType }) => {
  const { headerLogo, headerMenu } = blok;
  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {headerLogo?.filename ? (
              <Link href="/">
                <Image
                  className="h-20 w-auto sm:h-10"
                  src={headerLogo?.filename}
                  alt=""
                  width={40}
                  height={20}
                />
              </Link>
            ) : null}
          </div>
          {headerMenu.map((nestedBlok: any) => (
            <StoryblokServerComponent
              className=""
              blok={nestedBlok}
              key={nestedBlok._uid}
            />
          ))}
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};
export default Config;
