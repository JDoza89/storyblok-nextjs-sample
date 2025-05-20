import { StoryBlokComponentType } from "@/app/types/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const Hero = ({ blok }: { blok: StoryBlokComponentType }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`min-h-[500px]
   relative
   flex
   items-center
   justify-center
   p-9
   my-6
   rounded-[5px]
   overflow-hidden ${blok.layout === "constrained" ? "container mx-auto" : ""}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/40 z-1" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-white font-bold mb-3">{blok.headline}</h1>
        <h2 className="text-4xl text-white font-light">{blok.subheadline}</h2>
      </div>
      <Image
        src={blok?.backgroundImage?.filename}
        alt={blok?.backgroundImage?.alt}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        fill={true}
      />
    </div>
  );
};

export default Hero;
