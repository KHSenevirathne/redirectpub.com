"use client";
// components/common/ParallaxContainer.client.jsx
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/Parallax"),
  {
    ssr: false, // Disable server-side rendering
  }
);

export default ParallaxContainer;
