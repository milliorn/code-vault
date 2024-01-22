import React from "react";
import { FooterCountryside, FooterDocks, FooterDowntown } from "./FooterGrid";
import { WebsiteDescription } from "./WebsiteDescription";

export function Locations() {
  return (
    <div
      id="location"
      className="py-10 mx-6 leading-10 text-center text-gray-600 md:text-left"
    >
      <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
        <WebsiteDescription />
        <FooterCountryside />
        <FooterDocks />
        <FooterDowntown />
      </div>
    </div>
  );
}
