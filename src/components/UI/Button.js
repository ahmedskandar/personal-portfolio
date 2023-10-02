import React from "react";
import { COMMON_BUTTON_STYLE } from "../../util/constants";

function Button({
  children,
  href,
  onClick,
  variant,
  type,
}) {
 
  if (href) {
    return (
      <a
        className={` ${COMMON_BUTTON_STYLE} ${
          variant === "primary" &&
          "bg-gold hover:bg-yellow-500/50 hover:font-bold"
        } ${
          variant === "secondary" &&
          "border border-[#B8860B] border-opacity-70 hover:font-bold hover:border-yellow-500 hover:shadow-sm hover:shadow-white/60"
        } sm:w-[35rem] md:w-full`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (type === "submit") {
    return (
      <button
        className={`${COMMON_BUTTON_STYLE} bg-gold mt-10 w-full hover:bg-yellow-500/50 md:w-60 lg:w-[28rem]`}
      >
        {children}
      </button>
    );
  }
  return null
}
// py-5 text-xl rounded-lg hover:scale-110 transition-all duration-300 ease-in-out bg-gold hover:bg-yellow-500/50 hover:font-bold w-[35rem]
export default Button;
