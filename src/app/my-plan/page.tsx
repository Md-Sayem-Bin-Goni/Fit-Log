"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";

import { LibraryContext } from "@/context/LibraryProvider";
import TodaysPlanCard from "@/components/shared/TodaysPlanCard";
import SavedCard from "@/components/shared/SavedCard";

const MyPlanPage = () => {

    // =====================================================
    // 1. CONTEXT থেকে data নিচ্ছি
    // =====================================================
    const {
        addToTodaysPlan,
        saveForLater
    } = useContext(LibraryContext);


    // =====================================================
    // 2. Active Tab
    // =====================================================
    const [activeTab, setActiveTab] = useState("today");


    // =====================================================
    // 3. Active tab অনুযায়ী libraries
    // =====================================================
    const currentLibraries =
        activeTab === "today"
            ? addToTodaysPlan
            : saveForLater;


    // =====================================================
    // 4. Total Minutes
    // =====================================================
    const totalMinutes = currentLibraries.reduce(
        (total, library) => total + library.duration,
        0
    );


    // =====================================================
    // 5. Total Calories
    // =====================================================
    const totalCalories = currentLibraries.reduce(
        (total, library) => total + library.caloriesBurned,
        0
    );


    // =====================================================
    // 6. Sort State
    // =====================================================
    const [sortBy, setSortBy] = useState<
        "Duration" | "Calories" | "Rating"
    >("Duration");


    // =====================================================
    // 7. Sort Function
    // =====================================================
    const sortLibrary = (library) => {

        // original array change না করার জন্য copy
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


    // Active tab-এর data sort করছি
    const sortedLibraries = sortLibrary(currentLibraries);


    return (

        <main className="min-h-screen bg-[#0d0f12] text-white">

            <div className="container mx-auto px-6 py-8">


                {/* ================= PAGE HEADING ================= */}

                <div className="mb-6">

                    <h1 className="text-3xl font-bold uppercase">
                        My Plan
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>


                {/* ================= STATISTICS ================= */}

                <div className="bg-[#15181e] border border-[#252a31] rounded-lg p-7 mb-5">

                    <div className="grid grid-cols-3">


                        {/* Exercises */}

                        <div className="border-r border-[#292d33]">

                            <p className="text-xs text-gray-500 mb-1">
                                Exercises
                            </p>

                            <h2 className="text-3xl font-bold text-lime-400">
                                {currentLibraries.length}
                            </h2>

                        </div>


                        {/* Minutes */}

                        <div className="border-r border-[#292d33] pl-8">

                            <p className="text-xs text-gray-500 mb-1">
                                Minutes
                            </p>

                            <h2 className="text-3xl font-bold">
                                {totalMinutes}
                            </h2>

                        </div>


                        {/* Calories */}

                        <div className="pl-8">

                            <p className="text-xs text-gray-500 mb-1">
                                Calories
                            </p>

                            <h2 className="text-3xl font-bold">
                                {totalCalories}
                            </h2>

                        </div>

                    </div>

                </div>


                {/* ================= TAB + SORT SECTION ================= */}

                <div className="bg-[#111419] border border-[#252a31] rounded-lg">


                    {/* ================= TOP BAR ================= */}

                    <div className="flex items-center justify-between px-4 pt-2">


                        {/* Tab Buttons */}

                        <div
                            role="tablist"
                            className="tabs tabs-box bg-transparent"
                        >

                            {/* Today's Plan */}

                            <button
                                role="tab"
                                onClick={() => setActiveTab("today")}
                                className={`tab ${
                                    activeTab === "today"
                                        ? "tab-active bg-[#20252d] text-white"
                                        : "text-gray-500"
                                }`}
                            >
                                Today's Plan
                            </button>


                            {/* Saved */}

                            <button
                                role="tab"
                                onClick={() => setActiveTab("saved")}
                                className={`tab ${
                                    activeTab === "saved"
                                        ? "tab-active bg-[#20252d] text-white"
                                        : "text-gray-500"
                                }`}
                            >
                                Saved
                            </button>

                        </div>


                        {/* ================= SORT ================= */}

                        <div className="flex items-center gap-3">

                            <span className="text-xs text-gray-500">
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
                                className="select select-sm bg-[#171b22] border-[#303640]"
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


                    {/* ================= TAB CONTENT ================= */}

                    <div className="p-5">

                        {currentLibraries.length > 0 ? (

                            // =========================================
                            // Workout থাকলে
                            // =========================================

                            <div className="flex flex-col gap-4">

                                {activeTab === "today"

                                    // Today's Plan হলে
                                    ? sortedLibraries.map((library) => (

                                        <TodaysPlanCard
                                            key={library.id}
                                            library={library}
                                        />

                                    ))

                                    // Saved হলে
                                    : sortedLibraries.map((library) => (

                                        <SavedCard
                                            key={library.id}
                                            library={library}
                                        />

                                    ))
                                }

                            </div>

                        ) : (

                            // =========================================
                            // Workout না থাকলে Empty State
                            // =========================================

                            <div className="min-h-[300px] flex items-center justify-center">

                                <div className="text-center">

                                    <h2 className="text-xl font-bold uppercase">

                                        {activeTab === "today"
                                            ? "Nothing Here Yet"
                                            : "Nothing Saved Yet"
                                        }

                                    </h2>


                                    <p className="text-gray-500 text-sm mt-2">

                                        {activeTab === "today"
                                            ? "Browse the library and add a lift to get today moving."
                                            : "Save workouts from the library to find them here."
                                        }

                                    </p>


                                    <Link href="/">

                                        <button className="btn bg-lime-400 hover:bg-lime-300 border-none text-black mt-5">
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