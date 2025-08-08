// This "wrapper" component was created to allow the nested Carousel items to be rendered server-side
// while still allowing the Carousel itself to be a client-side component.
// This is necessary because Storyblok's client-side components need to be registered for the visual editor
// We do this to avoid having to re-register the Carousel nested components client-side

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
