import React from "react";
import "../styles/global.css";
import { Featured } from "./Featured";
import { Hero } from "./Hero";

export function Layout() {
  return (
    <article>
      <Hero />
      <Featured />
    </article>
  );
}
