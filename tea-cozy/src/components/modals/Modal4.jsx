import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function Modal4() {
  return (
    <figure>
      <a
        id="figmodal-4"
        className="cursor-pointer p-auto hover:text-orange-50"
        href="https://adakerci.sirv.com/Images/myrtle-ave.webp"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="https://adakerci.sirv.com/Images/myrtle-ave.webp"
          width="1600"
          height="1067"
          alt="myrtle"
          className="hover:opacity-10"
        />
        <figcaption>myrtle avenue tea</figcaption>
      </a>
    </figure>
  );
}
