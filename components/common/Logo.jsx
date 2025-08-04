// components/LogoDisplay.tsx
import React from "react";



const Logo = ({ isSticky }) => {
  return (
    <div className="flex items-center">
      <div
        className={`text-[40px] px-0.5 font-medium tracking-normal  ${
          isSticky ? "text-black" : "text-white"
        }`}
      >
        pitch
      </div>
      <div
        className={`px-0.5 text-[40px] font-medium tracking-normal ${
          isSticky ? "bg-red-500 text-white" : "bg-white text-black"
        }`}
      >
        box
      </div>
    </div>
  );
};

export default Logo;
