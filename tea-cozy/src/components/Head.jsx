import React from "react";
import { Helmet } from "react-helmet";

export function Head() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tea Cozy</title>
      <html lang="en" />
      <meta name="description" content="Gatsby Tailwind UI Tea Cozy" />
    </Helmet>
  );
}
