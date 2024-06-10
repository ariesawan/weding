"use client";
import React, { useEffect, useState } from "react";
import { IoMail } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const Welcome = ({ handlePlay }) => {
  const [openInvitation, setOpenInvitation] = useState(false);
  const searchParams = useSearchParams();
  const nama = searchParams.get("nama");

  useEffect(() => {
    document.body.style.overflow = openInvitation ? "auto" : "hidden";
  }, [openInvitation]);

  const handleOpenInvitation = () => {
    setOpenInvitation(true);
    handlePlay(); // Memutar audio ketika undangan dibuka
  };

  return (
    <div
      className={`w-full h-screen flex flex-col justify-end items-center fixed z-30 transition-all duration-2000 ease-in-out ${
        openInvitation
          ? "top-[-120%] transition-all duration-[2s] ease-in-out"
          : "top-0"
      }`}
    >
      <div className="absolute w-full h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-900/80">
        <Image src="/img/21.jpg" fill alt="" className="object-cover" />
      </div>
      <div className="absolute p-12 text-white text-sm">
        <h1 className="text-5xl font-playfair">Fitria & Dini</h1>
        <p className="text-center">23 June 2024</p>
        <p className="text-center">Kepada Bapak/Ibu/Saudara/i</p>
        <p className="text-center text-2xl font-bold my-4 capitalize">
          {nama ? `${nama}` : ""}
        </p>
        <button
          onClick={handleOpenInvitation}
          className="p-2 mx-auto my-4 text-white bg-[#B7B1A4] rounded-xl flex justify-center items-center gap-3"
        >
          <IoMail />
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default Welcome;
