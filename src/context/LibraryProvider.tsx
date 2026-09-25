"use client"
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ILibrary } from '@/types/library';


interface LibraryContextType {
  addToTodaysPlan: ILibrary[];
  setAddToTodaysPlan: Dispatch<SetStateAction<ILibrary[]>>;
  saveForLater: ILibrary[];
  setSaveForLater: Dispatch<SetStateAction<ILibrary[]>>;
}

export const LibraryContext = createContext<LibraryContextType>({
  addToTodaysPlan: [],
  setAddToTodaysPlan: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
});


const LibraryProvider = ({ children }: { children: React.ReactNode }) => {

    const [addToTodaysPlan, setAddToTodaysPlan] = useState<ILibrary[]>([]);
    const [saveForLater, setSaveForLater] = useState<ILibrary[]>([]);

    const shareData = {
        addToTodaysPlan,
        setAddToTodaysPlan,
        saveForLater,
        setSaveForLater
    }


    return (
        <LibraryContext.Provider value={shareData}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;