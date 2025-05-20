"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { StoryBlokComponentType } from "@/app/types/storyblok";

type CarouselProps = StoryBlokComponentType & {
  title: string;
  itemsPerSlide: any;
  features: { name: string; link: any; image: any }[];
};
const Carousel = ({ blok }: { blok: CarouselProps }) => {
  const { title, itemsPerSlide } = blok;
  const settings = {
    arrows: true,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: parseInt(itemsPerSlide),
    slidesToScroll: 1,
    ssr: true,
    className: "carousel",
  };

  return (
    <div className="px-5 pb-14">
      <h2 className="pb-5">{title}</h2>
      <Slider {...settings} {...storyblokEditable(blok)}>
        {blok?.features?.map((feature) => {
          return (
            <Link href={feature?.link?.cached_url} key={blok?.uuid}>
              <div className="relative w-[280px] h-[370px] m-auto">
                <Image
                  src={feature?.image?.filename}
                  title={feature?.name}
                  alt={feature?.image?.alt}
                  className="object-cover object-center rounded"
                  fill
                  sizes="(max-width: 370px)"
                  quality={75}
                />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
