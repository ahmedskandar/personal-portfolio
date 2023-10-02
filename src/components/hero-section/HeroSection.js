import React from "react";
import HeroHeader from "./HeroHeader";
import HeroFooter from "./HeroFooter";
import HeroContent from "./HeroContent";

function HeroSection() {

  return (
    <>
      <section
        alt="Dark background image displaying a mouse"
        className="w-full h-screen bg-cover bg-[95%] bg-no-repeat bg-[url('../public/assets/images/landing-page-mobile.webp')] md:bg-[url('../public/assets/images/landing-page-bg.webp')] md:bg-fixed"
      >
        <HeroHeader />
        <HeroContent />
        <HeroFooter />
      </section>
    </>
  );
}

export default HeroSection;
