import React from 'react';

import i18next from 'i18next';
import ReactCountryFlag from "react-country-flag"

const LangToggle = ( { changeLanguage } ) => {
    return (
        <div className="transition duration-500 ease-in-out flex items-center justify-center">
            {
                i18next.language === 'tr' ? (
                    <div
                        className='flex items-center justify-center w-11 h-11 cursor-pointer shadow-lg rounded-full bg-white dark:bg-black dark:border-white border transition-all dark:hover:bg-econavOrange hover:bg-econavOrange hover:text-white hover:transition-all'
                        onClick={() => changeLanguage('en')}
                    >
                        <ReactCountryFlag svg countryCode="US" className='w-5'/>
                    </div>
                ) : (
                    <div
                        className='flex items-center justify-center w-11 h-11 cursor-pointer shadow-lg rounded-full bg-white dark:bg-black dark:border-white dark:hover:bg-econavOrange border transition-all hover:bg-econavOrange hover:text-white hover:transition-all'
                        onClick={() => changeLanguage('tr')}
                    >
                        <ReactCountryFlag svg countryCode="TR" className='w-5'/>
                    </div>
                )
            }
        </div>
    );
};

export default LangToggle;