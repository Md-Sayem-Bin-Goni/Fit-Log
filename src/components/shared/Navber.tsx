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

  // বর্তমানে কোন URL/route-এ আছি
  const pathname = usePathname();

  return (
    <nav className="bg-[#0d0f10] border-b border-gray-800">

      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src={logo}
            alt="FITLOG Logo"
            width={28}
            height={28}
            className="object-contain"
          />

          <h2 className="text-white text-xl font-bold tracking-wider">
            FITLOG
          </h2>

        </Link>


        {/* Middle Menu */}
        <ul className="flex items-center gap-3 text-sm">

          {/* Workouts */}
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "px-5 py-2 rounded-full bg-lime-950 text-lime-400 font-medium"
                  : "px-5 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition"
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
                  ? "px-5 py-2 rounded-full bg-lime-950 text-lime-400 font-medium"
                  : "px-5 py-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition"
              }
            >
              My Plan
            </Link>
          </li>

        </ul>


        {/* Right Side */}
        <div className="flex items-center gap-7">

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <span>Plan</span>

            <span className="badge border-0 bg-lime-400 text-black font-bold w-6 h-6">
              {addToTodaysPlan.length}
            </span>
          </Link>


          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            <span>Saved</span>

            <span className="badge badge-outline text-gray-400 w-6 h-6">
              {saveForLater.length}
            </span>
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navber;