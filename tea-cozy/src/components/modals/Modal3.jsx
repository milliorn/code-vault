import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function Modal3() {
  return (
    <figure>
      <a
        id="figmodal-3"
        className="cursor-pointer p-auto hover:text-orange-50"
        href="https://adakerci.sirv.com/Images/donut.webp"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="https://adakerci.sirv.com/Images/donut.webp"
          width="1600"
          height="1067"
          alt="donut"
          className="hover:opacity-10"
        />
        <figcaption>seasonal donuts</figcaption>
      </a>
    </figure>
  );
}
