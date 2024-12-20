import React from "react";
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container lg:p-12 flex justify-between">
      <Image src="/images/Logo.png" alt="Logo" className="rounded-full " width={80} height={10} />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;