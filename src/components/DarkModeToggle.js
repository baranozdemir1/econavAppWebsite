import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from '../ThemeContext';

const DarkModeToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full">
            {
                theme === 'dark' ? (
                    <div
                        className='flex items-center justify-center w-11 h-11 cursor-pointer shadow-lg rounded-full bg-white dark:bg-black dark:border-white border transition-all hover:bg-econavOrange hover:text-white text-black dark:text-white dark:hover:bg-econavOrange hover:transition-all'
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        <FaSun className="w-5" />
                    </div>
                ) : (
                    <div
                        className='flex items-center justify-center w-11 h-11 cursor-pointer shadow-lg rounded-full bg-white dark:bg-black dark:border-white border transition-all hover:bg-econavOrange hover:text-white text-black dark:text-white hover:transition-all'
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        <FaMoon className="w-5 text-black dark:text-white" />
                    </div>
                )
            }
        </div>
    );
};

export default DarkModeToggle;