
import React, {useState} from 'react'
import face from '../img/face.png'
import info from '../img/info.png'
import background from '../img/backgroundo0.png'
import Themetoggle from './Themetoggle'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import scroll from '../img/scroll.png'

const Nav = () => {

    const [showComponent, setShowComponent] = useState(false);

    useState(() => {
        setInterval(() => {
         setShowComponent(true);
        }, 3700);
    }, []);

  return (
    <div className='sticky top 4'>
    <div>
    {showComponent &&   <Themetoggle />}
    </div>


    {showComponent &&  <ul className="hidden md:flex bg-black sticky top-4 ... text-white text-center z-20 my-5 rounded-3xl h-12 max-w-[700px] w-8/12 mx-auto  justify-between stroke-transparent">
        <Link to='/' > 
     <button className="p-3 w-36 text-center hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl"><a href='#home'>Home</a></button>
        </Link>
        <Link to='/about'>
        <button href='#about' className="p-3 w-36 text-center p hover:bg-white hover:text-black bg-black mx-auto rounded-3xl "> About </button>
        </Link>
        <Link to='/skill'>
        <button className="p-3 text-center w-36 hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl "> <a href='#skills'>Skills</a></button>
        </Link>
        <Link to='/project'>
        <button className="p-3 text-center w-36 hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl "><a href='#project'>Projects</a></button>
        </Link>
     </ul>}
     {showComponent &&  
     <div className='md:hidden sticky mobile top-4 bg-black p border-r-50 mx-auto box-border z-20 pb-4 justify-between sm:h-18  h-10 w-9/12 rounded-3xl  p-2 text-white flex'>
        <div className="grid grid-cols-2 -space-x-0 lg:-space-x-7">
       <Link to='/' ><a href='#home'><img  src={face} alt=''  className="md:hidden h-6 rounded-2xl" /></a></Link> 
        </div> 
        <ul className="flex px-1 text-xs p sm:justify-between">
        <Link to='/about'><li className="p-1 "><a href='#about'>About</a></li></Link>
        <Link to='/skill'><li className="p-1 "><a href='#skills'>Skills</a></li></Link>
        <Link to='/project'><li className="p-1 "><a href='#project'>Projects</a></li></Link>
     </ul>
    </div>
}
    </div>
  )
}

export default Nav