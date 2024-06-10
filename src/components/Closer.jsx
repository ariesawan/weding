"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

import { Autoplay, Parallax } from "swiper/modules";

const Closer = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState("");
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.8 : 0;

  return (
    <div className="w-full h-screen bg-transparent flex flex-col text-white justify-end items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-[#B7B1A4] ">
      <div className="w-full h-full absolute top-0 -z-10">
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
              src="/img/5.jpg"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              alt=""
              data-swiper-parallax={parallaxAmount}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden">
            <Image
              src="/img/6.jpg"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              alt=""
              data-swiper-parallax={parallaxAmount}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden">
            <Image
              src="/img/7.jpg"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              alt=""
              data-swiper-parallax={parallaxAmount}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="p-4 space-y-2 bg-transparent z-10">
        <p className="text-center text-xs uppercase tracking-widest">
          Kami yang berbahagia
        </p>
        <h1 className="text-5xl text-center font-playfair">Fitria & Dini</h1>
        <p className="text-xs text-center">
          Merupakan sebuah kehormatan dan kebahagiaan bagi kami jika
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami.
          Terima kasih
        </p>
      </div>
    </div>
  );
};

export default Closer;
