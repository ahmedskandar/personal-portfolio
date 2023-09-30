import React from "react";

function Button({
  children,
  href,
  onClick,
  variant,
  type,
}) {
  const style =
    "py-5 text-xl rounded-lg w-full hover:scale-110 transition-all duration-300 ease-in-out";
  if (href) {
    return (
      <a
        className={` ${style} ${
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
        className={`${style} bg-gold mt-10 w-full hover:bg-yellow-500/50 md:w-60 lg:w-[28rem]`}
      >
        {children}
      </button>
    );
  }
  return null
}
// py-5 text-xl rounded-lg hover:scale-110 transition-all duration-300 ease-in-out bg-gold hover:bg-yellow-500/50 hover:font-bold w-[35rem]
export default Button;
