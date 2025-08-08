// components/FeatureCarousel.server.tsx

import { StoryblokServerComponent } from "@storyblok/react/rsc";
import CarouselClient from "./CarouselClient";

function FeatureCarousel({ blok }: { blok: any }) {
  return (
    <>
      {blok.features?.map((feature: any) => (
        <StoryblokServerComponent blok={feature} key={feature._uid} />
      ))}
    </>
  );
}

export default function Carousel({ blok }: { blok: any }) {
  return (
    <CarouselClient blok={blok}>
      <FeatureCarousel blok={blok} />
    </CarouselClient>
  );
}
