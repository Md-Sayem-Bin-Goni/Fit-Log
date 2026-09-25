'use client'
import { LibraryContext } from '@/context/LibraryProvider';
import { ILibrary } from '@/types/library';
import React, { useContext, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const AddToTodaysPlan = ({ library } :  {
  library: ILibrary
}) => {

    const { addToTodaysPlan, setAddToTodaysPlan } = useContext(LibraryContext)

    const [isAdded, setIsAdded] = useState(false)


    const handleAddToTodaysPlan = () => {


         if (isAdded) {
                    toast.error("Already Added!");
                    return;
                }

                
        setAddToTodaysPlan([...addToTodaysPlan, library])
        setIsAdded(true)
        toast.success(`Added to Todays Plan`)
    }

    return (
        <button
            onClick={handleAddToTodaysPlan}
             className={`btn border-none text-black
                ${
                    isAdded
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-lime-400 hover:bg-lime-300"
                }
            `}
            >
            {isAdded ? "Added to Plan" : "Add to Today's Plan"}
        </button>
    );
};

export default AddToTodaysPlan;