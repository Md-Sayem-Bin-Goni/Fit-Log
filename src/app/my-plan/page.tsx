import { getAllLibrary } from "@/lib/library";
import Link from "next/link";
import React from "react";
 
const MyPlanPage = async() => {

    const data = await getAllLibrary()

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
                <div className="bg-[#111419] border border-[#252a31] rounded-lg px-4 py-2 flex items-center justify-between mb-5">

                    {/* Tabs */}
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-lift">
                        <input type="radio" name="my_tabs_3" className="tab" aria-label="Todays Plan" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            Tab content 1
                        </div>

                        <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            Tab content 2
                        </div>


                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-3">

                        <span className="text-xs text-gray-500">
                            Sort By
                        </span>

                        <select
                            defaultValue="duration"
                            className="select select-sm bg-[#171b22] border-[#303640] text-gray-300 focus:outline-none"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>

                    </div>
                </div>

                {/* Empty State */}
                <div className="min-h-[330px] bg-[#0f1115] border border-[#252a31] rounded-lg flex items-center justify-center">

                    <div className="text-center">

                        <h2 className="text-xl font-bold uppercase">
                            Nothing Here Yet
                        </h2>

                        <p className="text-gray-500 text-sm mt-1">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link href="/">
                            <button className="btn bg-lime-400 hover:bg-lime-300 border-none text-black rounded-full px-7 mt-5">
                                Go to workouts
                            </button>
                        </Link>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default MyPlanPage;