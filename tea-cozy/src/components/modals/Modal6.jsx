import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function Modal6() {
  return (
    <figure>
      <a
        id="figmodal-6"
        className="cursor-pointer p-auto hover:text-orange-50"
        href="https://adakerci.sirv.com/Images/mission-background.webp"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="https://adakerci.sirv.com/Images/mission-background.webp"
          width="1200"
          height="800"
          alt="mission"
          className="hover:opacity-10"
        />
        <figcaption>berries &amp; granola</figcaption>
      </a>
    </figure>
  );
}
