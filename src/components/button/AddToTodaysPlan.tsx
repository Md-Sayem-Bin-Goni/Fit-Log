'use client'
import { LibraryContext } from '@/context/LibraryProvider';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const AddToTodaysPlan = ({ library }) => {

    const { addToTodaysPlan, setAddToTodaysPlan } = useContext(LibraryContext)

    const handleAddToTodaysPlan = () => {
        console.log("add to button trigger");
        setAddToTodaysPlan([...addToTodaysPlan, library])


        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <button
            onClick={handleAddToTodaysPlan}
            className="btn bg-lime-400 hover:bg-lime-300 border-none text-black">
            ▣ Add to today's plan
        </button>
    );
};

export default AddToTodaysPlan;