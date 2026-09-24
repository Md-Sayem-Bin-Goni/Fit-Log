import Image from "next/image";
import React from "react";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#090a0c] border-t border-[#202226] mt-16">
      <div className="container mx-auto px-6 py-10 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={22}
            height={22}
            className="object-contain"
          />

          <h2 className="text-white font-bold text-sm tracking-wider">
            FITLOG
          </h2>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;