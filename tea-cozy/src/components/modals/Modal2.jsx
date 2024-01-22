import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function Modal2() {
  return (
    <figure>
      <a
        id="figmodal-2"
        className="cursor-pointer p-auto hover:text-orange-50"
        href="https://adakerci.sirv.com/Images/spiced-rum.webp"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="https://adakerci.sirv.com/Images/spiced-rum.webp"
          width="1600"
          height="1067"
          alt="rum"
          className="hover:opacity-75"
        />
        <figcaption>spiced rum tea</figcaption>
      </a>
    </figure>
  );
}
