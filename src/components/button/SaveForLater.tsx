'use client'
import { LibraryContext } from '@/context/LibraryProvider';
import React, { useContext, useState } from 'react';

const saveForLater = ({ library }) => {

    const { saveForLater, setSaveForLater } = useContext(LibraryContext)

    const [isAdded, setIsAdded] = useState(false)

    const handleAddToSaveForLater = () => {
        setSaveForLater([...saveForLater, library])
        setIsAdded(true)
    }

    return (
        <button
            onClick={handleAddToSaveForLater}
            disabled={isAdded}
            className="btn bg-lime-400 hover:bg-lime-300 border-none text-black">
            {isAdded ? "Saved" : "Save For Later"}
        </button>
    );
};

export default saveForLater;