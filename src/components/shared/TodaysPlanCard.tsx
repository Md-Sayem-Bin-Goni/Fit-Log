'use client'
import { LibraryContext } from "@/context/LibraryProvider";
import { ILibrary } from "@/types/library";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const SelectedLibraryCard = ({ library } :  {
  library: ILibrary
}) => {

    const { addToTodaysPlan, setAddToTodaysPlan } = useContext(LibraryContext);


    const handleRemove = () => {
        const bakiPlan = addToTodaysPlan.filter(baki => baki.id !== library.id)
        setAddToTodaysPlan(bakiPlan)
        toast.info("Deleted")
    }

    const [markasdone, setmarkasdone] = useState(false)
    const handleMarkAsDone = () => {
        setmarkasdone(true)
        toast.success('Done')
    }


    return (
        <div className="card bg-[#15181e] border border-[#2a2f38] rounded-2xl">
            <div className="p-5 flex items-center justify-between gap-6">

                {/* Left Side */}
                <div className="flex items-center gap-5">

                    {/* Image */}
                    <Image
                        src={library.image}
                        alt={library.name}
                        width={165}
                        height={95}
                        className="w-[165px] h-[95px] object-cover rounded-xl"
                    />

                    {/* Workout Info */}
                    <div>

                        <h2 className="text-xl font-bold text-white uppercase">
                            {library.name}
                        </h2>

                        <p className="text-gray-400 mt-1">
                            {library.equipment}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">

                            {/* Duration */}
                            <div className="flex items-center gap-2">
                                <span className="text-lime-400">◷</span>
                                <span>{library.duration} min</span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center gap-2">
                                <span className="text-lime-400">♨</span>
                                <span>{library.caloriesBurned} kcal</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <span className="text-lime-400">☆</span>
                                <span>{library.rating}</span>
                            </div>

                        </div>

                    </div>
                </div>


                {/* Right Side */}
                <div className="flex items-center gap-6">

                    {/* Details */}
                    <Link href={`/my-plan/${library.id}`}>
                        <button className="btn btn-outline rounded-full px-7 border-gray-600 text-gray-200">
                            View Details
                        </button>
                    </Link>



                    <button
                        onClick={handleMarkAsDone}
                        className={markasdone ? "btn btn-outline rounded-full px-7 border-green-600 text-green-200" :
                            "btn btn-outline rounded-full px-7 border-gray-600 text-gray-200"}
                    >

                        {markasdone ? 'Done' : "Mark as Done"}
                    </button>


                    {/* Remove */}
                    <button
                        onClick={handleRemove}
                        className="btn btn-ghost btn-circle text-gray-500 text-xl">
                        ✕
                    </button>

                </div>

            </div>
        </div>
    );
};

export default SelectedLibraryCard;