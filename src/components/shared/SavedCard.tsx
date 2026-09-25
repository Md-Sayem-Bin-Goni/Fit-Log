'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import SaveForLater from "../button/SaveForLater";
import { LibraryContext } from "@/context/LibraryProvider";
import { toast } from "react-toastify";
import { ILibrary } from "@/types/library";

const SelectedLibraryCard = ({ library }: { library: ILibrary }) => {

    const { saveForLater, setSaveForLater } = useContext(LibraryContext);

    const handleRemove = () => {
        const bakiPlan = saveForLater.filter(baki => baki.id !== library.id)
        setSaveForLater(bakiPlan)
        toast.error("Item Deleted")

    }


    return (
        <div className="card bg-[#15181e] border border-[#2a2f38] rounded-2xl">
            <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-6">

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 min-w-0">

                    <Image
                        src={library.image}
                        alt={library.name}
                        width={165}
                        height={95}
                        className="
                    w-full
                    sm:w-[165px]
                    h-[180px]
                    sm:h-[95px]
                    object-cover
                    rounded-xl
                    shrink-0
                "
                    />

                    <div className="min-w-0">

                        <h2 className="text-lg sm:text-xl font-bold text-white uppercase">
                            {library.name}
                        </h2>

                        <p className="text-sm sm:text-base text-gray-400 mt-1">
                            {library.equipment}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs sm:text-sm text-gray-300">

                            <div className="flex items-center gap-2">
                                <span className="text-lime-400">◷</span>
                                <span>{library.duration} min</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-lime-400">♨</span>
                                <span>{library.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-lime-400">☆</span>
                                <span>{library.rating}</span>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">

                    <Link
                        href={`/my-plan/${library.id}`}
                        className="flex-1 sm:flex-none"
                    >
                        <button className="btn btn-outline rounded-full px-5 lg:px-7 border-gray-600 text-gray-200 w-full">
                            View Details
                        </button>
                    </Link>

                    <button
                        onClick={handleRemove}
                        className="btn btn-ghost btn-circle shrink-0 text-gray-500 hover:text-red-400 text-xl"
                    >
                        ✕
                    </button>

                </div>

            </div>
        </div>
    );
};

export default SelectedLibraryCard;