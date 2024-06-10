import React from "react";
import Image from "next/image";
import BackgroundParralax from "./BackgroundParralax";

const DetailAcara = () => {
  return (
    <div className="relative">
      <BackgroundParralax className="opacity-20" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-center py-5 font-playfair">
          Save the Date
        </h1>
        <div className="grid w-full grid-cols-2 gap-[1px]">
          <Image
            src="/img/19.jpg"
            className="w-full h-full rounded-tl-[60%] object-cover shadow-xl"
            width={250}
            height={250}
            alt=""
          />
          <Image
            src="/img/20.jpg"
            alt=""
            width={250}
            height={250}
            className="w-full h-full object-cover rounded-br-[60%] shadow-xl"
          />
        </div>
        <div className="flex rounded-b-lg overflow-hidden">
          <div className="bg-[#B7B1A4] text-center text-white flex justify-center items-center px-3">
            <h1 className="font-playfair text-2xl w-10">
              <span className="block rotate-90 origin-center translate-y-[-40px] text-nowrap">
                Wedding Event
              </span>
            </h1>
          </div>
          <div className="px-8 py-8 bg-slate-200/50 text-sm">
            <div>
              <h1 className="uppercase font-boldfont-playfair text-[#B7B1A4]">
                Akad Nikah
              </h1>
              <p className="font-bold">23 Juni 2024</p>
              <p className="font-bold">08.00 - Selesai</p>
              <p className="text-xs">
                Kp. Kubang Eceng Desa Mekarjaya, Kec Padakembang, Kabupaten
                Tasikmalaya RT 02/ RW 04
              </p>
              <button className="px-4 py-2 mx-auto my-4 text-white bg-[#B7B1A4] rounded">
                Buka Map
              </button>
            </div>
            <div>
              <h1 className="uppercase font-boldfont-playfair text-[#B7B1A4]">
                Resepsi
              </h1>
              <p className="font-bold">23 Juni 2024</p>
              <p className="font-bold">11.00 - Selesai</p>
              <p className="text-xs">
                Kp. Kubang Eceng Desa Mekarjaya, Kec Padakembang, Kabupaten
                Tasikmalaya RT 02/ RW 04
              </p>
              <button className="px-4 py-2 mx-auto my-4 text-white bg-[#B7B1A4] rounded">
                Buka Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAcara;
