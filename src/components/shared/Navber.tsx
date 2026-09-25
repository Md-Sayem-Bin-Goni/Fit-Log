'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";
import { LibraryContext } from "@/context/LibraryProvider";

const Navber = () => {

  const {
    addToTodaysPlan,
    saveForLater
  } = useContext(LibraryContext);

  const pathname = usePathname();

  return (
    <nav className="bg-[#0d0f10] border-b border-gray-800 sticky top-0 z-50">

      <div className="container mx-auto px-4 sm:px-6">

        <div className="
      min-h-20
      flex flex-wrap
      items-center
      justify-between
      gap-y-3
      py-3
      md:flex-nowrap
      md:py-0
    ">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">

            <Image
              src={logo}
              alt="FITLOG Logo"
              width={28}
              height={28}
              className="object-contain"
            />

            <h2 className="text-white text-lg sm:text-xl font-bold tracking-wider">
              FITLOG
            </h2>

          </Link>


          {/* Middle Menu */}
          <ul className="
        order-3
        w-full
        flex
        items-center
        justify-center
        gap-2
        text-sm
        md:order-2
        md:w-auto
        md:gap-3
      ">

            {/* Workouts */}
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "px-4 sm:px-5 py-2 rounded-full bg-lime-950 text-lime-400 font-medium"
                    : "px-4 sm:px-5 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition"
                }
              >
                Workouts
              </Link>
            </li>


            {/* My Plan */}
            <li>
              <Link
                href="/my-plan"
                className={
                  pathname === "/my-plan"
                    ? "px-4 sm:px-5 py-2 rounded-full bg-lime-950 text-lime-400 font-medium"
                    : "px-4 sm:px-5 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition"
                }
              >
                My Plan
              </Link>
            </li>

          </ul>


          {/* Right Side */}
          <div className="
        order-2
        flex
        items-center
        gap-3
        sm:gap-5
        md:order-3
        md:gap-7
      ">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 sm:gap-2 text-sm text-gray-300 hover:text-white transition"
            >
              <span className="hidden sm:inline">
                Plan
              </span>

              <span className="badge border-0 bg-lime-400 text-black font-bold w-6 h-6">
                {addToTodaysPlan.length}
              </span>
            </Link>


            {/* Saved */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 sm:gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <span className="hidden sm:inline">
                Saved
              </span>

              <span className="badge badge-outline text-gray-400 w-6 h-6">
                {saveForLater.length}
              </span>
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navber;