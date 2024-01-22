import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function Modal5() {
  return (
    <figure>
      <a
        id="figmodal-5"
        className="cursor-pointer p-auto hover:text-orange-50"
        href="https://adakerci.sirv.com/Images/bedford-bizarre.webp"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="https://adakerci.sirv.com/Images/bedford-bizarre.webp"
          width="5472"
          height="3648"
          alt="bedford"
          className="hover:opacity-10"
        />
        <figcaption>bedford bizarre tea</figcaption>
      </a>
    </figure>
  );
}
