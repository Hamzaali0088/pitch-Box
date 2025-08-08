"use client";
import { useRouter } from 'next/router';
import React from "react";

 

const Logo = ({ isSticky }) => {

const router = useRouter();
const pathname = router.pathname;

const isTransparentPage = ["/case-studies","/integrations", "/pricing","/cookie-policy","/contact-us","/privacy-policy","/terms","/demo", "/product/seo-email-client"].includes(pathname);

  return (
    <div className="flex items-center">
      <div
        className={`text-[40px] px-0.5 font-medium tracking-normal  ${
          isSticky || isTransparentPage ? "text-black" : "text-white"
        }`}
      >
        pitch
      </div>
      <div
        className={`px-0.5 text-[40px] font-medium tracking-normal ${
          isSticky || isTransparentPage ? "bg-red-500 text-white" : "bg-white text-black"
        }`}
      >
        box
      </div>
    </div>
  );
};

export default Logo;
