"use client";
import { Playfair_Display } from "next/font/google";
import Countdown from "./Countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";

import "swiper/css";
import { useState } from "react";
import BackgroundParralax from "./BackgroundParralax";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Sambutan() {
  return (
    <>
      <div
        className={`w-full h-screen relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-[#B7B1A4] text-white flex flex-col justify-end  font-playfair`}
      >
        <BackgroundParralax />
        <div className="w-full py-8 z-10">
          <h1
            className={`text-lg uppercase font-light text-center font-openSans`}
          >
            the wedding of
          </h1>
          <h1 className="text-5xl text-center mb-4">Fitria & Dini</h1>
          <Countdown />
        </div>
      </div>
      <div className="bg-[#B7B1A4] text-white">
        <div className="container mx-auto">
          <h1 className="text-sm text-center py-8 -mt-1">
            Assalamualaikum Wr. Wb.
          </h1>
          <p className="text-xs text-center px-7">
            Segala Puji Bagi Allah SWT yang telah menjadikan hambanya hidup
            berpasang-pasangan. Dengan memohon Ridho, Rahmat, dan Berkah Allah
            SWT, kami bermaksud untuk mengundang Saudara/i dalam acara
            pernikahan yang kami selenggarakan.
          </p>
        </div>
        <div className="container mx-auto p-8 mb-[-60px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="h-[65px]"
          >
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/img/5.jpg"
                fill
                sizes="200"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/img/6.jpg"
                fill
                sizes="200"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/img/7.jpg"
                sizes="200"
                fill
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/img/8.jpg"
                fill
                sizes="200"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/img/14.jpg"
                fill
                sizes="200"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="h-[50px] bg-[#F0F5FA]"></div>
      </div>
    </>
  );
}
