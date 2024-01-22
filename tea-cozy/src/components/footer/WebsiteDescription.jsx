import React from "react";

export function WebsiteDescription() {
  return (
    <div className="cursor-default">
      <div className="flex items-center justify-center mb-4 font-semibold text-orange-50 md:justify-start">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="cubes"
          className="w-4 mr-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <h1>Tea Cozy</h1>
      </div>
      <p className="text-sm text-orange-50">
        come visit us at our three locations across the city of Portland.
      </p>
    </div>
  );
}
