import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function TeaCozyLogo() {
  return (
    <figure className="items-center p-2.5">
        <StaticImage
          className="justify-center bg-center bg-cover cursor-default"
          src="../images/tea-cozy-logo.webp"
          placeholder="blurred"
          width={264}
          height={84}
          alt="tea-cozy-logo"
        />
    </figure>
  );
}
