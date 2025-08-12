"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoryBlokComponentType } from "@/app/types/storyblok";

type CarouselProps = StoryBlokComponentType & {
  title: string;
  itemsPerSlide: any;
  features: { name: string; link: any; image: any }[];
};
const CarouselClient = ({
  blok,
  children,
}: {
  blok: CarouselProps;
  children: React.ReactNode;
}) => {
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
    <div className="px-5 pb-14" {...storyblokEditable(blok)}>
      <h2 className="text-2xl lg:text-3xl pb-5">{title}</h2>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CarouselClient;
