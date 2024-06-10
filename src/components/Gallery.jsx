"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css/thumbs";
import BackgroundParralax from "./BackgroundParralax";
import Image from "next/image";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Generate image URLs
  const images = Array.from({ length: 23 }, (_, i) => `/img/${i + 1}.jpg`);

  return (
    <div className="relative">
      <BackgroundParralax className={"opacity-20"} />
      <div className="container px-4 py-8">
        <h1 className="py-4 text-2xl text-center font-playfair">Gallery</h1>
        <div className="my-8">
          <Swiper
            loop={true}
            spaceBetween={10}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            thumbs={{ swiper: thumbsSwiper }}
            speed={2000}
            onSlideChange={handleSlideChange}
            modules={[Thumbs, Autoplay]}
            className="h-[300px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={300}
                  height={300}
                  src={src}
                  className="object-cover w-full h-full"
                  alt={`Slide ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Autoplay]}
            className="mt-4 h-[50px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={300}
                  height={300}
                  src={src}
                  className={`object-cover w-full h-full ${
                    activeIndex === index ? "opacity-100" : "opacity-40"
                  }`}
                  alt={`Thumbnail ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
