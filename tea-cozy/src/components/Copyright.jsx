import React from "react";

export function Copyright() {
  return (
    <div className="p-6 text-center">
      <span className="cursor-default">© {new Date().getFullYear()} </span>
      <a
        target="_blank"
        className="font-semibold hover:text-gray-400"
        rel="noreferrer"
        href="https://github.com/milliorn"
      >
        the tea cozy
      </a>
    </div>
  );
}
