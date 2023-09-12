import Cards from "@/componenets/Cards"
import { useState } from 'react';

const FlashCards = () => {
    const [collectionName, setCollectionName] = useState('open'); 
    const [searchedCollectionName, setSearchedCollectionName] = useState(''); 
    
    const handleSearchClick = () => {
        setCollectionName(searchedCollectionName);
    };

    return (
        <section className="bg-yellow-200 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Flashcards</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the flashcards to experience the fun and easier experience like never before in the last-minute prep.</p>
                    <div className="mt-4">
                        <label htmlFor="collectionName" className="text-gray-600 dark:text-gray-400">Enter Collection Name:</label>
                        <input
                            type="text"
                            id="collectionName"
                            value={searchedCollectionName}
                            onChange={(e) => setSearchedCollectionName(e.target.value)}
                            className="block w-full mt-1 px-4 py-2 border rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                    <button
                        onClick={handleSearchClick}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Search
                    </button>
                </div>
                <Cards collectionName={collectionName} />
            </div>
        </section>
    );
};

export default FlashCards;
