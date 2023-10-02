import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HeroContent() {
      const [text] = useTypewriter({
        words: ["<FRONT END DEVELOPER />"],
        typeSpeed: 200,
      });

  return (
    <div className="text-center w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[100%]">
      <h1 className="font-serif text-primary mb-2 text-6xl md:text-7xl lg:text-9xl">
        Ahmed Lukman
      </h1>
      <p className="font-mono font-bold tracking-wider text-gold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {text}
        {text !== "<FRONT END DEVELOPER />" && (
          <span className="text-yellow-600">
            <Cursor cursorStyle="_" />
          </span>
        )}
      </p>
    </div>
  );
}

export default HeroContent