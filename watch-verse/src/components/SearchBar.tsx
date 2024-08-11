import { useState } from 'react';

export const SearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex justify-end items-center w-full">
            {/* Search Icon Button for Smaller Screens */}
            <div className={`sm:hidden ${isExpanded ? 'hidden' : 'block'} `}>
                <button
                    onClick={handleExpand}
                    className="text-gray-400 p-2"
                >
                    <svg className="w-4 h-4 text-md inline-flex items-center cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                </button>
            </div>

            {/* Full Search Bar for Larger Screens */}
            <div className={`${isExpanded ? 'block' : 'hidden'} w-full sm:flex sm:w-auto sm:items-center`}>
                <div className="w-full sm:w-96 flex border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
                    <input
                        id="default-search"
                        className="w-full bg-slate-950 text-white border-none outline-none"
                        placeholder="Search"
                        required
                    />
                    <button className="bg-slate-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
