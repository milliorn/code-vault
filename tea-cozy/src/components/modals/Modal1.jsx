import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function Modal1() {
  return (
    <figure>
      <a
        id="figmodal-1"
        className="cursor-pointer p-auto hover:text-orange-50"
        href="https://adakerci.sirv.com/Images/berryblitz.webp"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="https://adakerci.sirv.com/Images/berryblitz.webp"
          width="1600"
          height="1067"
          alt="berryblitz"
          className="hover:opacity-75"
        />
        <figcaption>fall berry blitz tea</figcaption>
      </a>
    </figure>
  );
}
