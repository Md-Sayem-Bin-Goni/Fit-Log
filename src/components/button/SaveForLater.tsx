'use client'
import { LibraryContext } from '@/context/LibraryProvider';
import React, { useContext } from 'react';

const saveForLater = ({ library }) => {

    const { saveForLater, setSaveForLater } = useContext(LibraryContext)

    const handleAddToSaveForLater = () => {
        setSaveForLater([...saveForLater, library])
    }

    return (
        <button
            onClick={handleAddToSaveForLater}
            className="btn bg-lime-400 hover:bg-lime-300 border-none text-black">
            Save For Later
        </button>
    );
};

export default saveForLater;