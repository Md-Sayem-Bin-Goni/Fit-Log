import { getAllLibrary } from '@/lib/library';
import React from 'react';
import LibraryCard from '../shared/LibraryCard';
import { ILibrary } from '@/types/library';

const TheLibrary = async () => {

    const data = await getAllLibrary()
    
    return (
        <div className='container mx-auto px-10'>
            <div className='py-15'>
                <h2 className='font-bold text-4xl'>The Library</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
            {
                <div className='grid grid-cols-3 gap-10 '>
                    {
                        data.map((library : ILibrary, idx: number) => {
                            return <LibraryCard key={library.id} library={library}></LibraryCard>
                        })
                    }
                </div>
            }
        </div>
    );
};

export default TheLibrary;