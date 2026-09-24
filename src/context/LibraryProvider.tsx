"use client"
import React, { createContext, useState } from 'react';

export const LibraryContext = createContext({
    addToTodaysPlan: [],
    setAddToTodaysPlan: () => { },
    saveForLater: [],
    setSaveForLater: () => { }
})


const LibraryProvider = ({ children }) => {
    const [addToTodaysPlan, setAddToTodaysPlan] = useState([]);
    const [saveForLater, setSaveForLater] = useState([])

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