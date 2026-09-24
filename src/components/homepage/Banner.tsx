import Image from "next/image";
import Link from "next/link";
import React from "react";

import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-6 mt-6">
      <div className="bg-[#15171c] border border-[#26292f] rounded-xl px-8 md:px-12 py-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="md:w-1/2">

            <p className="text-lime-400 text-xs font-bold uppercase tracking-wider mb-5">
              Workout Library
            </p>

            <h1 className="text-white text-4xl md:text-5xl font-black uppercase leading-[0.95]">
              Train With Intent. Log
              <br />
              Every Set.
            </h1>

            <p className="text-gray-400 text-sm mt-5 max-w-lg leading-6">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today's plan, and watch the week's work add up.
            </p>

            <Link href="/workouts">
              <button className="btn bg-lime-400 hover:bg-lime-300 border-none text-black font-bold text-xs uppercase mt-6 px-6">
                Browse Workouts
              </button>
            </Link>

          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <Image
              src={bannerImg}
              alt="Workout Exercise"
              width={320}
              height={320}
              priority
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;