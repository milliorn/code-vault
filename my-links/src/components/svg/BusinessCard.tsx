import { h } from "preact";

// BusinessCard SVG
export default function BusinessCard(): h.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none" />
      <line
        x1="152"
        y1="112"
        x2="192"
        y2="112"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12" />
      <line
        x1="152"
        y1="144"
        x2="192"
        y2="144"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12" />
      <circle
        cx="92.1"
        cy="120"
        r="24"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12" />
      <path
        d="M61.1,168a32,32,0,0,1,62,0"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12" />
    </svg>
  );
}
