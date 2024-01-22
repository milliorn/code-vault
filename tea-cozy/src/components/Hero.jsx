import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function HeroImage() {
  return (
    <StaticImage
      src="https://adakerci.sirv.com/Images/locations-background.webp"
      placeholder="blurred"
      width={1200}
      height={795}
      alt="hero"
    />
  );
}

function HeroMessage() {
  return (
    <div className="absolute w-screen -translate-x-1/2 -translate-y-1/2 cursor-default lg:container opacity-95 backdrop-blur-sm top-1/2 left-1/2 text-orange-50 drop-shadow-2xl">
      <h1 className="m-2 text-4xl" id="mission">
        our mission
      </h1>
      <p className="px-4 text-2xl text-center">
        handpicked, artisanally curated, free range, sustainable, small batch,
        fair trade, organic tea
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <header className="relative flex items-center justify-center font-bold">
      <HeroImage />
      <HeroMessage />
    </header>
  );
}
