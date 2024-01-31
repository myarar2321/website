"use client";

import Script from "next/script";
import React from "react";

const Sellix = () => {
  return (
    <div>
      <script src="https://cdn.sellix.io/static/js/embed.js" defer></script>
      <link
        href="https://cdn.sellix.io/static/css/embed.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default Sellix;
