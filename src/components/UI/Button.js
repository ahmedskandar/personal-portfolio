import React from "react";

function Button({ children, href, onClick, variant }) {
  if (href) {
    return (
      <a
        className={`w-full ${variant === "primary" && "bg-gold hover:bg-yellow-500/50 hover:font-bold"} ${
          variant === "secondary" && "border border-[#B8860B] border-opacity-70 hover:font-bold hover:border-yellow-500 hover:shadow-sm hover:shadow-white/60"
        } py-5 text-xl rounded-lg hover:scale-110 transition-all duration-300 ease-in-out md:py-4 sm:w-[35rem] md:w-full`}
        href={href}
      >
        {children}
      </a>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default Button;

