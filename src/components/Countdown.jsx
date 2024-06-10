"use client";
import React, { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = "2024-06-23T08:00:00";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = new Date(targetDate).getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Memanggil fungsi perhitungan setiap detik
    const timer = setInterval(calculateTimeLeft, 1000);

    // Membersihkan interval saat komponen di-unmount atau nilai targetDate berubah
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex w-full items-center justify-center gap-1 px-12">
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{timeLeft.days}</h1>
        <p className="text-xs">Days</p>
      </div>
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{timeLeft.hours}</h1>
        <p className="text-xs">Hours</p>
      </div>
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{timeLeft.minutes}</h1>
        <p className="text-xs">Minutes</p>
      </div>
      <div className="px-1 py-4 w-[200px] leading-none bg-white/70 text-gray-800 rounded-lg flex flex-col justify-center items-center">
        <h1>{timeLeft.seconds}</h1>
        <p className="text-xs">Seconds</p>
      </div>
    </div>
  );
}
