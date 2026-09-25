import { ILibrary } from "@/types/library";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LibraryCard = ({ library } :  {library: ILibrary}) => {
  return (

    <Link
      href={`/my-plan/${library.id}`}
      className=""
      
    >
      <div className="card bg-[#15171c] border border-[#2a2d33] overflow-hidden">

        {/* Workout Image */}
        <figure className="h-[180px]">
          <Image
            src={library.image}
            alt={library.name}
            width={500}
            height={600}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Card Content */}
        <div className="card-body p-5">

          {/* Muscle Groups */}
          <div className="flex gap-2">
            {library.muscleGroups.map((muscle) => (
              <div
                key={muscle}
                className="badge bg-lime-400 border-none text-black text-[11px] font-bold uppercase"
              >
                {muscle}
              </div>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="card-title text-white text-lg uppercase mt-2">
            {library.name}
          </h2>

          {/* Equipment */}
          <p className="text-gray-500 text-sm">
            {library.equipment}
          </p>

          <div className="divider my-0"></div>

          {/* Workout Stats */}
          <div className="flex items-center gap-5 text-gray-400 text-sm">

            <div className="flex items-center gap-2">
              <span>◷</span>
              <span>{library.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <span>♨</span>
              <span>{library.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <span>☆</span>
              <span>{library.rating}</span>
            </div>

          </div>

        </div>
      </div>

    </Link>



  );
};

export default LibraryCard;