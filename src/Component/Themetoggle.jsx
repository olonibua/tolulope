import React, { useContext } from 'react'
import {HiSun, HiMoon} from 'react-icons/hi'
import { ThemeContext } from '../Context/ThemeContext'


const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='float-right hidden sticky top-4 p-2'>
       {theme === 'dark' ? (
        <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <HiSun className='text-primary h-4 w-4 md:w-6 md:h-6 text-2xl mr-2'/> 
        </div >
       ) : (
        <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <HiMoon className='text-primary h-4 w-4 md:w-6 md:h-6 text-2xl mr-2'/> 
        </div>
       )}
      
    </div>
  );
};

export default ThemeToggle;
