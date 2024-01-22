import React from "react";
import "../../styles/global.css";
import { TeaCozyLogo } from "../TeaCozyLogo";
import { NavButtons } from "./NavButtons";

export function Navbar() {
  return (
    <nav className="sticky flex flex-wrap items-center justify-between border-b  bg-neutral-900 h-28 border-orange-50">
      <TeaCozyLogo />
      <NavButtons />
    </nav>
  );
}
