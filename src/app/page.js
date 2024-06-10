"use client";
import React, { Suspense, useRef, useState } from "react";
import Sambutan from "@/components/Sambutan";
import Mempelai from "@/components/Mempelai";
import Ayat from "@/components/Ayat";
import DetailAcara from "@/components/DetailAcara";
import RSVP from "@/components/RSVP";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import WeddingGift from "@/components/WeddingGift";
import UcapanDoaRestu from "@/components/UcapanDoaRestu";
import DoakanKami from "@/components/DoakanKami";
import Closer from "@/components/Closer";
import Welcome from "@/components/Welcome";
import Audio from "@/components/Audio";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  console.log(isPlaying);

  const handlePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch((error) => {
          console.log("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Suspense>
        <Welcome handlePlay={handlePlay} />
      </Suspense>
      <Sambutan />
      <Mempelai />
      <Ayat />
      <DetailAcara />
      <RSVP />
      <Story />
      <Gallery />
      <WeddingGift />
      <UcapanDoaRestu />
      <DoakanKami />
      <Closer />
      <Audio ref={audioRef} handlePlay={handlePlay} isPlaying={isPlaying} />
    </>
  );
}
