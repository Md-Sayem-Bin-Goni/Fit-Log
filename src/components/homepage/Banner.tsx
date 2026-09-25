import Image from "next/image";
import Link from "next/link";
import React from "react";

import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 mt-4 sm:mt-6">
      <div
        className=" bg-[#15171c] border border-[#26292f] rounded-xl px-5 sm:px-8 md:px-12  py-8 sm:py-10
    "
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <p className="text-lime-400 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-5">
              Workout Library
            </p>

            <h1
              className="
            text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            uppercase
            leading-[1]
            md:leading-[0.95]
          "
            >
              Train With Intent.
              <br className="hidden sm:block" />
              {" "}Log Every Set.
            </h1>

            <p
              className="
            text-gray-400
            text-sm
            mt-4 sm:mt-5
            max-w-lg
            mx-auto md:mx-0
            leading-6
          "
            >
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today's plan, and watch the week's work add up.
            </p>

    <a href="#library">
    <button className="btn bg-lime-400 text-black">
        BROWSE WORKOUTS
    </button>
</a>

          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">

            <Image
              src={bannerImg}
              alt="Workout Exercise"
              width={320}
              height={320}
              priority
              className="
            object-contain
            w-[200px]
            sm:w-[250px]
            md:w-[280px]
            lg:w-[320px]
            h-auto
          "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;