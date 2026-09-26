'use client'
import { LibraryContext } from '@/context/LibraryProvider';
import { ILibrary } from '@/types/library';
import React, { useContext, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const AddToTodaysPlan = ({ library }: { library: ILibrary }) => {

    const { addToTodaysPlan, setAddToTodaysPlan } = useContext(LibraryContext)

    const [isAdded, setIsAdded] = useState(false)

    const handleAddToTodaysPlan = () => {





        if (addToTodaysPlan.length >= 5) {
            toast.error("You reached daily limit")
        }


        if (addToTodaysPlan.find(item => item.id === library.id)) {
            toast.error("Already Added!");
        }
        else {
            toast.success(`Added to Todays Plan`)
            setAddToTodaysPlan([...addToTodaysPlan, library])
            setIsAdded(true)
        }

    }

    return (
        <button
            onClick={handleAddToTodaysPlan}
            className={`btn border-none text-black
                ${isAdded
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-lime-400 hover:bg-lime-300"
                }`
            }

        >
            {isAdded ? "Added to Plan" : "Add to Today's Plan"}

        </button>
    );
};

export default AddToTodaysPlan;