"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

import { Autoplay, Parallax } from "swiper/modules";

const BackgroundParralax = ({ className }) => {
  const [parallaxSwiper, setParallaxSwiper] = useState("");
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.8 : 0;
  return (
    <div className={`w-full h-full absolute top-0 -z-10 ${className}`}>
      <Swiper
        modules={[Autoplay, Parallax]}
        parallax={true}
        onSwiper={setParallaxSwiper}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        className="w-full h-full"
      >
        <SwiperSlide className="overflow-hidden">
          <Image
            src="/img/1.jpg"
            fill
            className="object-cover w-full h-full"
            alt=""
            data-swiper-parallax={parallaxAmount}
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <Image
            src="/img/2.jpg"
            fill
            className="object-cover w-full h-full"
            alt=""
            data-swiper-parallax={parallaxAmount}
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <Image
            src="/img/3.jpg"
            fill
            className="object-cover w-full h-full"
            alt=""
            data-swiper-parallax={parallaxAmount}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BackgroundParralax;
