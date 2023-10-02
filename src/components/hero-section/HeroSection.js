import React, { useEffect, useState } from "react";
import HeroHeader from "./HeroHeader";
import HeroFooter from "./HeroFooter";
import HeroContent from "./HeroContent";

function HeroSection() {
  // const [sectionHeight, setSectionHeight] = useState("100vh");

  // useEffect(() => {
  //   // Function to calculate and set the section's height
  //   const setHeight = () => {
  //     const windowHeight =
  //       window.innerHeight ||
  //       document.documentElement.clientHeight ||
  //       document.body.clientHeight;
  //     const screenAvailableHeight =
  //       window.screen.availHeight || window.screen.height;
  //     const approxTopBarHeight = screenAvailableHeight - windowHeight;

  //     // Set the section height, subtracting an approximation of the top bar height
  //     setSectionHeight(`calc(100vh - ${approxTopBarHeight}px)`);
  //   };

  //   // Initial call to set the height
  //   setHeight();

  //   // Attach a resize event listener to handle changes in height
  //   window.addEventListener("resize", setHeight);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", setHeight);
  //   };
  // }, []);
  // console.log(sectionHeight ? sectionHeight : "not rendered");
  // const sectionStyle = {
  //   height: sectionHeight,
  // };

  return (
    <section
      alt="Dark background image displaying a mouse"
      // style={sectionStyle}
      className="w-full h-[90vh] flex flex-col justify-between bg-cover bg-no-repeat bg-[95%] bg-[url('../public/assets/images/landing-page-mobile.webp')] md:bg-[url('../public/assets/images/landing-page-bg.webp')] md:bg-fixed md:h-screen"
    >
      <HeroHeader />
      <HeroContent />
      <HeroFooter />
    </section>
  );
}

export default HeroSection;
