"use client";
import React, { forwardRef } from "react";
import { FaCompactDisc } from "react-icons/fa";

const Audio = forwardRef(function index({ isPlaying, handlePlay }, ref) {
  console.log(isPlaying);

  return (
    <div
      onClick={handlePlay}
      className="fixed bottom-4 left-4 z-[99] cursor-pointer"
    >
      <FaCompactDisc
        className={`text-xl text-[#776C53] ${isPlaying ? "animate-spin" : ""}`}
      />
      <audio ref={ref} src="/audio/yovieNuno.mp3"></audio>
    </div>
  );
});

export default Audio;
