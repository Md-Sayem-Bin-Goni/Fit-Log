"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";

import { LibraryContext } from "@/context/LibraryProvider";
import SelectedLibraryCard from "@/components/shared/SelectedLibraryCard";

const MyPlanPage = () => {

    // =====================================================
    // 1. CONTEXT থেকে দুইটা list নিচ্ছি
    // =====================================================
    // addToTodaysPlan = Today's Plan-এ add করা workout
    // saveForLater = Saved tab-এ save করা workout
    const {
        addToTodaysPlan,
        saveForLater
    } = useContext(LibraryContext);


    // =====================================================
    // 2. বর্তমানে কোন tab active সেটা রাখছি
    // =====================================================
    // প্রথমে "today" থাকবে কারণ Today's Plan default tab
    const [activeTab, setActiveTab] = useState("today");


    // =====================================================
    // 3. Active tab অনুযায়ী current data বের করছি
    // =====================================================
    // যদি Today's Plan active হয় → addToTodaysPlan
    // যদি Saved active হয় → saveForLater
    const currentLibraries =
        activeTab === "today"
            ? addToTodaysPlan
            : saveForLater;


    // =====================================================
    // 4. Total Minutes calculate করছি
    // =====================================================
    // reduce() প্রতিটা workout-এর duration যোগ করবে
    //
    // Example:
    // 25 + 10 + 15 = 50 minutes
    //
    // 0 হচ্ছে starting value
    const totalMinutes = currentLibraries.reduce(
        (total, library) => total + library.duration,
        0
    );


    // =====================================================
    // 5. Total Calories calculate করছি
    // =====================================================
    // প্রতিটা workout-এর caloriesBurned যোগ হচ্ছে
    //
    // Example:
    // 180 + 70 + 100 = 350 calories
    const totalCalories = currentLibraries.reduce(
        (total, library) => total + library.caloriesBurned,
        0
    );


    return (
        <main className="min-h-screen bg-[#0d0f12] text-white">

            <div className="container mx-auto px-6 py-8">

                {/* =================================================
                    PAGE HEADING
                ================================================= */}
                <div className="mb-6">

                    <h1 className="text-3xl font-bold uppercase">
                        My Plan
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>


                {/* =================================================
                    STATISTICS SECTION
                    Active tab অনুযায়ী data change হবে
                ================================================= */}
                <div className="bg-[#15181e] border border-[#252a31] rounded-lg p-7 mb-5">

                    <div className="grid grid-cols-3">

                        {/* ===============================
                            EXERCISES
                            
                            .length দিয়ে কতগুলো workout
                            আছে সেটা দেখাচ্ছি
                        =============================== */}
                        <div className="border-r border-[#292d33]">

                            <p className="text-xs text-gray-500 mb-1">
                                Exercises
                            </p>

                            <h2 className="text-3xl font-bold text-lime-400">
                                {currentLibraries.length}
                            </h2>

                        </div>


                        {/* ===============================
                            MINUTES

                            সব workout-এর duration
                            যোগ করে totalMinutes পেয়েছি
                        =============================== */}
                        <div className="border-r border-[#292d33] pl-8">

                            <p className="text-xs text-gray-500 mb-1">
                                Minutes
                            </p>

                            <h2 className="text-3xl font-bold">
                                {totalMinutes}
                            </h2>

                        </div>


                        {/* ===============================
                            CALORIES

                            সব workout-এর caloriesBurned
                            যোগ করে totalCalories পেয়েছি
                        =============================== */}
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


                {/* =================================================
                    DAISYUI TABS
                ================================================= */}
                <div className="tabs tabs-lift">


                    {/* =================================================
                        TODAY'S PLAN TAB BUTTON

                        Click/change হলে activeTab = "today"
                    ================================================= */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label="Todays Plan"
                        defaultChecked
                        onChange={() => setActiveTab("today")}
                    />


                    {/* =================================================
                        TODAY'S PLAN CONTENT
                    ================================================= */}
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {/* 
                            যদি Today's Plan-এ workout থাকে
                            তাহলে cards দেখাবো
                        */}
                        {addToTodaysPlan.length > 0 ? (

                            <div className="flex flex-col gap-4">

                                {addToTodaysPlan.map((library) => (

                                    <SelectedLibraryCard
                                        key={library.id}
                                        library={library}
                                    />

                                ))}

                            </div>

                        ) : (

                            /* 
                                কোনো workout না থাকলে
                                Empty State দেখাবে
                            */
                            <div className="py-16 text-center">

                                <h2 className="text-xl font-bold uppercase">
                                    Nothing Here Yet
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href="/">

                                    <button className="btn bg-lime-400 hover:bg-lime-300 text-black border-none mt-5">
                                        Go to workouts
                                    </button>

                                </Link>

                            </div>

                        )}

                    </div>


                    {/* =================================================
                        SAVED TAB BUTTON

                        Click/change হলে activeTab = "saved"
                    ================================================= */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label="Saved"
                        onChange={() => setActiveTab("saved")}
                    />


                    {/* =================================================
                        SAVED TAB CONTENT
                    ================================================= */}
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {/* 
                            Saved workout থাকলে cards দেখাবে
                        */}
                        {saveForLater.length > 0 ? (

                            <div className="flex flex-col gap-4">

                                {saveForLater.map((library) => (

                                    <SelectedLibraryCard
                                        key={library.id}
                                        library={library}
                                    />

                                ))}

                            </div>

                        ) : (

                            /* Saved list empty হলে এটা দেখাবে */
                            <div className="py-16 text-center">

                                <h2 className="text-xl font-bold uppercase">
                                    Nothing Saved Yet
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    Save workouts from the library to find them here.
                                </p>

                                <Link href="/">

                                    <button className="btn bg-lime-400 hover:bg-lime-300 text-black border-none mt-5">
                                        Browse Workouts
                                    </button>

                                </Link>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </main>
    );
};

export default MyPlanPage;