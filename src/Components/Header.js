import React from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className='w-full bg-white border fixed top-0  shadow-md'>
        <header className='w-11/12 h-full max-w-[670px] flex mx-auto justify-between text-center py-5'>
            <h1 className='text-3xl font-bold uppercase'>CodeHelp Blogs</h1>  
           <button
          onClick={toggleTheme}
          className="py-1 px-3 text-sm border rounded-md text-black dark:bg-gray-800 dark:text-white border-black"
        >
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>  
        </header>
    </div>
  )
}

export default Header;