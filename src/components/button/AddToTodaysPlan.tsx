'use client'
import { LibraryContext } from '@/context/LibraryProvider';
import React, { useContext, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const AddToTodaysPlan = ({ library }) => {

    const { addToTodaysPlan, setAddToTodaysPlan } = useContext(LibraryContext)

    const [isAdded, setIsAdded] = useState(false)


    const handleAddToTodaysPlan = () => {
        setAddToTodaysPlan([...addToTodaysPlan, library])
        setIsAdded(true)
    }

    return (
        <button
            onClick={handleAddToTodaysPlan}
            disabled={isAdded}
            className="btn bg-lime-400 hover:bg-lime-300 border-none text-black"
            >
            {isAdded ? "Added to Plan" : "Add to Today's Plan"}
        </button>
    );
};

export default AddToTodaysPlan;