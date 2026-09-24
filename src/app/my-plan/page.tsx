"use client"
import saveForLater from "@/components/button/SaveForLater";
import LibraryCard from "@/components/shared/LibraryCard";
import SelectedLibraryCard from "@/components/shared/SelectedLibraryCard";
import { LibraryContext } from "@/context/LibraryProvider";
import { getAllLibrary } from "@/lib/library";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlanPage = () => {

    const { addToTodaysPlan, setAddToTodaysPlan } = useContext(LibraryContext)
    const { saveForLater, setSaveForLater } = useContext(LibraryContext)
    // const data = await getAllLibrary()
    // console.log("MY PLAN DATA:", addToTodaysPlan);
    return (
        <main className="min-h-screen bg-[#0d0f12] text-white">
            <div className="container mx-auto px-6 py-8">

                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold uppercase">
                        My Plan
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats */}
                <div className="bg-[#15181e] border border-[#252a31] rounded-lg p-7 mb-5">
                    <div className="grid grid-cols-3">

                        {/* Exercises */}
                        <div className="border-r border-[#292d33]">
                            <p className="text-xs text-gray-500 mb-1">
                                Exercises
                            </p>

                            <h2 className="text-3xl font-bold text-lime-400">
                                2
                            </h2>
                        </div>

                        {/* Minutes */}
                        <div className="border-r border-[#292d33] pl-8">
                            <p className="text-xs text-gray-500 mb-1">
                                Minutes
                            </p>

                            <h2 className="text-3xl font-bold">
                                23
                            </h2>
                        </div>

                        {/* Calories */}
                        <div className="pl-8">
                            <p className="text-xs text-gray-500 mb-1">
                                Calories
                            </p>

                            <h2 className="text-3xl font-bold">
                                190
                            </h2>
                        </div>

                    </div>
                </div>

                {/* Tabs + Sort */}
                <div className="tabs tabs-lift">

                    {/* Today's Plan Tab */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label="Todays Plan"
                        defaultChecked
                    />

                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {addToTodaysPlan.length > 0 ? (
                            <div className=" gap-5">
                                {addToTodaysPlan.map((library) => (
                                    <SelectedLibraryCard
                                        key={library.id}
                                        library={library}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="py-16 text-center">
                                <h2 className="text-xl font-bold uppercase">
                                    Nothing Here Yet
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href="/">
                                    <button className="btn bg-lime-400 text-black border-none mt-5">
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        )}

                    </div>


                    {/* Saved Tab */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label="Saved"
                    />

                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {saveForLater.length > 0 ? (
                            <div className=" gap-5">
                                {saveForLater.map((library) => (
                                    <SelectedLibraryCard
                                        key={library.id}
                                        library={library}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="py-16 text-center">
                                <h2 className="text-xl font-bold uppercase">
                                    Nothing Here Yet
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href="/">
                                    <button className="btn bg-lime-400 text-black border-none mt-5">
                                        Go to workouts
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