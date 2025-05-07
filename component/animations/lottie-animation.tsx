"use client"; // Optional for app directory, safe to add

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/component/animations/lottie.json";

const LottiePlayer: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-full h-full"
      />
    </div>
  );
};

export default LottiePlayer;
