'use client'

import { LibraryContext } from '@/context/LibraryProvider';
import { ILibrary } from '@/types/library';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const SaveForLater = ({ library }: { library: ILibrary }) => {

    const { saveForLater, setSaveForLater } = useContext(LibraryContext);

    const [isAdded, setIsAdded] = useState(false);

    const handleAddToSaveForLater = () => {


        if (saveForLater.find(item => item.id === library.id)) {
            toast.error("Already Saved!");
        }
        else {
            toast.success(`Added to save for later`)
            setSaveForLater([...saveForLater, library])
            setIsAdded(true)
        }
    };

    return (
        <button
            onClick={handleAddToSaveForLater}
            className={`btn border-none text-black
                ${isAdded
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-lime-400 hover:bg-lime-300"
                }
            `}
        >
            {isAdded ? "Saved" : "Save For Later"}
        </button>
    );
};

export default SaveForLater;