import AddToTodaysPlan from '@/components/button/AddToTodaysPlan';
import SaveForLater from '@/components/button/SaveForLater';
import { getAllLibrary } from '@/lib/library';
import Image from 'next/image';
import React from 'react';

const LibraryDetailPage = async ({ params }) => {

  const { id } = await params
  const allLibrary = await getAllLibrary()
  const library = allLibrary.find(library => library.id == id)

  return (
    <section className="bg-[#0d0f12] text-white min-h-screen">
      <div className="container mx-auto px-6 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side - Image */}
          <div>
            <Image
              src={library.image}
              alt={library.name}
              width={700}
              height={800}
              className="w-full h-[600px] object-cover rounded-xl"
            />
          </div>


          {/* Right Side */}
          <div>

            {/* Title */}
            <h1 className="text-3xl font-black uppercase">
              {library.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-6 mt-2">
              {library.description}
            </p>


            {/* Muscle Groups */}
            <div className="flex gap-2 mt-4">
              {library.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="badge bg-lime-400 border-none text-black font-bold text-xs"
                >
                  {muscle}
                </span>
              ))}
            </div>


            {/* Information Box */}
            <div className="bg-[#151820] border border-[#292d35] rounded-xl mt-6 overflow-hidden">

              {/* Equipment */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#292d35]">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Equipment
                </span>

                <span className="text-sm">
                  {library.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#292d35]">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Difficulty
                </span>

                <span className="text-sm">
                  {library.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#292d35]">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Sets
                </span>

                <span className="text-sm">
                  {library.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#292d35]">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Reps
                </span>

                <span className="text-sm">
                  {library.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#292d35]">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Duration
                </span>

                <span className="text-sm">
                  {library.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#292d35]">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Calories
                </span>

                <span className="text-sm">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Rating
                </span>

                <span className="text-sm">
                  {library.rating}
                </span>
              </div>

            </div>


            {/* Instructions */}
            <div className="mt-7">

              <h2 className="font-bold uppercase text-sm tracking-wide">
                Instructions
              </h2>

              <ol className="list-decimal list-inside mt-4 space-y-3 text-gray-400 text-sm">
                {library.instructions.map((instruction, index) => (
                  <li key={index}>
                    {instruction}
                  </li>
                ))}
              </ol>

            </div>


            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <AddToTodaysPlan key={library.id} library={library} />
              <SaveForLater key={library.name} library={library}/>



            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LibraryDetailPage;