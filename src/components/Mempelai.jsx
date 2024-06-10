"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Mempelai() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-center font-playfair">Bride & Groom</h1>
        <div className="p-4">
          <div className="flex justify-between my-4">
            <Image
              src={"/img/bride.jpg"}
              alt="mempelai wanita"
              width={250}
              height={250}
              className="rounded-xl object-cover shadow-md"
            />
            <div className="w-10 flex justify-center items-center">
              <h1 className="text-2xl font-playfair font-bold text-nowrap rotate-90 text-[#8C806E]">
                The Bride
              </h1>
            </div>
          </div>
          <div className="my-4 mr-16 text-center">
            <h1 className="text-lg font-playfair font-bold py-2">
              Fitria Nur Parida
            </h1>
            <p className="text-xs">
              Putri Ke 2 Bapak Yayan Sutisna & Ibu Yandriyani (Almh)
            </p>
            <a
              href="https://instagram.com/Fitrianp18"
              className="p-2 mx-auto w-fit text-xs my-4 text-white bg-[#B7B1A4] rounded-xl flex justify-center items-center gap-3"
            >
              <FaInstagram />
              <p>Fitrianp18</p>
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-row-reverse justify-between my-4">
            <Image
              src={"/img/groom.jpg"}
              alt="mempelai pria"
              width={250}
              height={250}
              className="rounded-xl object-cover shadow-md"
            />
            <div className="w-10 flex justify-center items-center">
              <h1 className="text-2xl font-playfair font-bold text-nowrap -rotate-90 text-[#8C806E]">
                The Groom
              </h1>
            </div>
          </div>
          <div className="my-4 ml-16 text-center">
            <h1 className="text-lg font-playfair font-bold py-2">
              Dini Permana
            </h1>
            <p className="text-xs">
              Putri Ke 4 Bapak Nana Suryana & Ibu Nunung Maryati
            </p>
            <a
              href="https://instagram.com/Dinipermana18"
              className="p-2 w-fit text-xs mx-auto my-4 text-white bg-[#B7B1A4] rounded-xl flex justify-center items-center gap-3"
            >
              <FaInstagram />
              <p>Dinipermana18</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
