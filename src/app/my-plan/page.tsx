"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";

import { LibraryContext } from "@/context/LibraryProvider";
import TodaysPlanCard from "@/components/shared/TodaysPlanCard";
import SavedCard from "@/components/shared/SavedCard";
import { ILibrary } from "@/types/library";

const MyPlanPage = () => {
    const {
        addToTodaysPlan,
        saveForLater
    } = useContext(LibraryContext);

    const [activeTab, setActiveTab] = useState("today");

    const currentLibraries =
        activeTab === "today" ? addToTodaysPlan : saveForLater;

    const totalMinutes = currentLibraries.reduce(
        (total, library) => total + library.duration,
        0
    );

    const totalCalories = currentLibraries.reduce(
        (total, library) => total + library.caloriesBurned,
        0
    );

    const [sortBy, setSortBy] =
        useState<"Duration" | "Calories" | "Rating">("Duration");

    const sortLibrary = (library: ILibrary[]) => {
        const sortedLibrary = [...library];

        if (sortBy === "Duration") {
            sortedLibrary.sort(
                (a, b) => a.duration - b.duration
            );
        } else if (sortBy === "Calories") {
            sortedLibrary.sort(
                (a, b) => a.caloriesBurned - b.caloriesBurned
            );
        } else if (sortBy === "Rating") {
            sortedLibrary.sort(
                (a, b) => b.rating - a.rating
            );
        }

        return sortedLibrary;
    };

    const sortedLibraries = sortLibrary(currentLibraries);

    return (
        <main className="min-h-screen bg-[#0d0f12] text-white">
            <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">

                <div className="mb-5 sm:mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold uppercase">
                        My Plan
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="bg-[#15181e] border border-[#252a31] rounded-lg p-4 sm:p-6 md:p-7 mb-5">

                    <div className="grid grid-cols-3">

                        <div className="border-r border-[#292d33] text-center sm:text-left">
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                                Exercises
                            </p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-400">
                                {currentLibraries.length}
                            </h2>
                        </div>

                        <div className="border-r border-[#292d33] text-center sm:text-left sm:pl-6 md:pl-8">
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                                Minutes
                            </p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                {totalMinutes}
                            </h2>
                        </div>

                        <div className="text-center sm:text-left sm:pl-6 md:pl-8">
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                                Calories
                            </p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                {totalCalories}
                            </h2>
                        </div>

                    </div>
                </div>

                <div className="bg-[#111419] border border-[#252a31] rounded-lg overflow-hidden">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 sm:px-4 pt-3 sm:pt-2">

                        <div
                            role="tablist"
                            className="tabs tabs-box bg-transparent w-full sm:w-auto"
                        >
                            <button
                                role="tab"
                                onClick={() => setActiveTab("today")}
                                className={`tab flex-1 sm:flex-none ${
                                    activeTab === "today"
                                        ? "tab-active bg-[#20252d] text-white"
                                        : "text-gray-500"
                                }`}
                            >
                                Today's Plan
                            </button>

                            <button
                                role="tab"
                                onClick={() => setActiveTab("saved")}
                                className={`tab flex-1 sm:flex-none ${
                                    activeTab === "saved"
                                        ? "tab-active bg-[#20252d] text-white"
                                        : "text-gray-500"
                                }`}
                            >
                                Saved
                            </button>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">

                            <span className="text-xs text-gray-500 whitespace-nowrap">
                                Sort By
                            </span>

                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    setSortBy(
                                        e.target.value as
                                            | "Duration"
                                            | "Calories"
                                            | "Rating"
                                    )
                                }
                                className="select select-sm bg-[#171b22] border-[#303640] w-full sm:w-auto"
                            >
                                <option value="Duration">
                                    Duration
                                </option>

                                <option value="Calories">
                                    Calories
                                </option>

                                <option value="Rating">
                                    Rating
                                </option>
                            </select>

                        </div>

                    </div>

                    <div className="p-3 sm:p-5">

                        {currentLibraries.length > 0 ? (

                            <div className="flex flex-col gap-3 sm:gap-4">

                                {activeTab === "today"
                                    ? sortedLibraries.map((library) => (
                                        <TodaysPlanCard
                                            key={library.id}
                                            library={library}
                                        />
                                    ))
                                    : sortedLibraries.map((library) => (
                                        <SavedCard
                                            key={library.id}
                                            library={library}
                                        />
                                    ))
                                }

                            </div>

                        ) : (

                            <div className="min-h-[250px] sm:min-h-[300px] flex items-center justify-center px-4">

                                <div className="text-center">

                                    <h2 className="text-lg sm:text-xl font-bold uppercase">
                                        {activeTab === "today"
                                            ? "Nothing Here Yet"
                                            : "Nothing Saved Yet"
                                        }
                                    </h2>

                                    <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-md">
                                        {activeTab === "today"
                                            ? "Browse the library and add a lift to get today moving."
                                            : "Save workouts from the library to find them here."
                                        }
                                    </p>

                                    <Link href="/">
                                        <button className="btn btn-sm sm:btn-md bg-lime-400 hover:bg-lime-300 border-none text-black mt-5">
                                            Go to workouts
                                        </button>
                                    </Link>

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            </div>
        </main>
    );
};

export default MyPlanPage;

