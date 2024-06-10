"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import BackgroundParralax from "./BackgroundParralax";

const Story = () => {
  return (
    <div className="relative">
      <BackgroundParralax className={"opacity-20"} />
      <div className="container px-6 py-8">
        <h1 className="text-2xl text-center py-4 font-playfair">Our Story</h1>
        <div className="bg-[#B7B1A4] rounded-tr-[90px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <Swiper
            speed={2000}
            direction="vertical"
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="h-[160px]"
          >
            <SwiperSlide>
              <Image
                width={300}
                height={300}
                src="/img/16.jpg"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={300}
                height={300}
                src="/img/17.jpg"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={300}
                height={300}
                src="/img/18.jpg"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex rounded-b-xl overflow-hidden">
          <div>
            <div className="p-8 bg-slate-200/50 text-sm">
              <h1 className="uppercase font-bold font-playfair text-[#B7B1A4] mb-2">
                Awal Bertemu
              </h1>
              <p>
                Awal mula kami bertemu merupakan teman sejak kecil di bangku
                sekolah
              </p>
            </div>
            <div className="p-8 bg-slate-200/50 text-sm">
              <h1 className="uppercase font-bold font-playfair text-[#B7B1A4] mb-2">
                Menjalin Hubungan
              </h1>
              <p className="font-bold mb-2">12 Agustus 2017</p>
              <p>
                Setelah menjalin kedekatan dan berkomunikasi beberapa bulan dan
                menemukan kecocokan akhirnya kami memutuskan untuk menjalin
                sebuah komitmen
              </p>
            </div>
            <div className="p-8 bg-slate-200/50 text-sm">
              <h1 className="uppercase font-bold font-playfair text-[#B7B1A4] mb-2">
                Bertunangan
              </h1>
              <p className="font-bold mb-2">04 Desember 2022</p>
              <p>
                Setelah menjalin hubungan beberapa tahun, akhirnya kami
                memantapkan hati untuk membawa hubungan ini kejenjang yang lebih
                serius untuk hidup dan menua bersama
              </p>
            </div>
          </div>
          <div className="bg-[#B7B1A4] text-center text-white flex justify-center items-center px-3">
            <h1 className="font-playfair text-2xl w-10">
              <span className="block rotate-90 origin-center translate-y-[-40px] text-nowrap">
                Love Story
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
