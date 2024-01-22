import React from "react";
import { Modal1 } from "./modals/Modal1";
import { Modal2 } from "./modals/Modal2";
import { Modal3 } from "./modals/Modal3";
import { Modal4 } from "./modals/Modal4";
import { Modal5 } from "./modals/Modal5";
import { Modal6 } from "./modals/Modal6";

export function Featured() {
  return (
    <div
      className="items-center justify-center px-0 font-bold cursor-default sm:px-40"
      id="featured"
    >
      <h1 className="relative block p-4 mt-16 text-4xl">
        enjoy some local favorites
      </h1>
      <h2 className="px-1 text-lg leading-10">
        what's steeping at the tea cozy?
      </h2>

      <div className="grid justify-center grid-cols-2 gap-4 pt-4 text-sm md:grid-cols-3 md:text-2xl">
        <Modal1 />
        <Modal2 />
        <Modal3 />
        <Modal4 />
        <Modal5 />
        <Modal6 />
      </div>
    </div>
  );
}
