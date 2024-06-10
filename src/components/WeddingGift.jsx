"use client";
import { useState } from "react";
import { FaGift } from "react-icons/fa";

const WeddingGift = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="container px-4 my-8">
        <h1 className="text-center my-2 font-playfair">Wedding Gift</h1>
        <p className="text-center text-xs">
          Tanpa mengurangi rasa hormat kami bagi tamu yang ingin mengirimkan
          hadiah kepada kedua mempelai dapat mengirimkannya melalui:
        </p>
        <button
          onClick={handleOpen}
          className="p-2 mx-auto my-4 text-white text-xs bg-[#B7B1A4] rounded-xl flex justify-center items-center gap-3"
        >
          Klik Disini
        </button>

        {open && (
          <div className="flex flex-col gap-4 py-8">
            <div className="text-sm p-4 rounded-xl bg-[#B7B1A4] flex flex-col justify-center items-center">
              <FaGift className="text-3xl" />
              <p>rekening - 123456789</p>
              <p className="uppercase text-center">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="text-sm p-4 rounded-xl bg-[#B7B1A4] flex flex-col justify-center items-center">
              <FaGift className="text-3xl" />
              <p>rekening - 123456789</p>
              <p className="uppercase text-center">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingGift;
