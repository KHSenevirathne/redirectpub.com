import React from "react";
// import TypewriterComponent from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";
export default function TypeWriter({
  strings = [],
  colorClass = "color-primary-1",
}) {
  return (
    <div className={`typewrite ${colorClass}`}>
      <TypeAnimation
        sequence={[...strings.flatMap((element) => [element, 2000])]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
}
