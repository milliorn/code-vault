import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";

function NavMission() {
  return (
    <AnchorLink
      to="#mission"
      title="mission"
      className="mt-4 mr-4 underline md:inline-block md:mt-0 hover:text-orange-50"
    >
      <span>mission</span>
    </AnchorLink>
  );
}

function NavFeatured() {
  return (
    <AnchorLink
      to="#featured"
      title="featured"
      className="mt-4 mr-4 underline md:inline-block md:mt-0 hover:text-orange-50"
    >
      <span>featured</span>
    </AnchorLink>
  );
}

function NavSocial() {
  return (
    <AnchorLink
      to="#social"
      title="social"
      className="mt-4 mr-4 underline md:inline-block md:mt-0 hover:text-orange-50"
    >
      <span>social</span>
    </AnchorLink>
  );
}

function NavLocation() {
  return (
    <AnchorLink
      to="#location"
      title="location"
      className="mt-4 mr-4 underline md:inline-block md:mt-0 hover:text-orange-50"
    >
      <span>location</span>
    </AnchorLink>
  );
}

export function NavButtons() {
  return (
    <div className="w-full grid-rows-1 md:flex md:items-center md:w-auto">
      <div className="invisible md:flex-grow sm:visible">
        <NavMission />
        <NavFeatured />
        <NavSocial />
        <NavLocation/>
      </div>
    </div>
  );
}
