import React from "react";
import { Copyright } from "../Copyright";
import { Locations } from "./Locations";
import { SocialMedia } from "../social/SocialMedia";

export function Footer() {
  return (
    <footer className="p-8 text-center lg:text-left text-orange-50">
      <SocialMedia />
      <Locations />
      <Copyright />
    </footer>
  );
}
