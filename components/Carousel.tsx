import { StoryblokServerComponent } from "@storyblok/react/rsc";
import React from "react";
import { StoryBlokComponentType } from "@/app/types/storyblok";
import CarouselClient from "./CarouselClient";

type CarouselProps = StoryBlokComponentType & {
  title: string;
  itemsPerSlide: any;
  features: { name: string; link: any; image: any }[];
};
function FeatureCarousel({ blok }: { blok: any }) {
  return (
    <>
      {blok.features?.map((feature: any) => (
        <StoryblokServerComponent blok={feature} key={feature._uid} />
      ))}
    </>
  );
}

export default function Carousel({ blok }: { blok: CarouselProps }) {
  return (
    <CarouselClient blok={blok}>
      <FeatureCarousel blok={blok} />
    </CarouselClient>
  );
}
