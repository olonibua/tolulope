import { useRef } from 'react'
import {Routes, Route, Link} from "react-router-dom";
import face from '../img/face.png'
import {GiPlayButton} from 'react-icons/gi'
import {BsDash} from 'react-icons/bs'
import React, {useEffect, useState} from 'react'
import circle from '../img/circle.png'
import circlee from '../img/circlee.png'
import Abouto from '../img/Abouto.png'
import TypeWritter from "typewriter-effect"
import signature from '../img/signature.png'
import Line from '../img/Line.png'
import pocketone from '../img/pocketone.png'
import tools from'../img/tools.png'
import javascript from'../img/JS.png'
import Reactt from'../img/React.png'
import css from'../img/CSS.png'
import html from'../img/HTML.png'
import process from'../img/process.png'
import processo from'../img/processs.png'
import photoshop from'../img/photoshop.png'
import figma from'../img/Figma.png'
import illustrator from'../img/Illustrator.png'
import animate from'../img/Animate.png'
import adobexd from'../img/Adobe XD.png'
import sch from'../img/sch.png'
import Arrow from'../img/Arrow.png'
import wordpress from'../img/wordpress.png'
import edu from'../img/edu.png'
import twitter from '../img/Twitter.png'
import Github from '../img/github.png'
import Behance from '../img/behance.png'
import Nav from './Nav';
import ThemeToggle from './Themetoggle';




const Home = (props) => {

   const [showComponent, setShowComponent] = useState(false);

  useState(() => {
      setInterval(() => {
       setShowComponent(true);
      }, 3100);
  }, []);

  const [showLine, setShowLine] = useState(false);

  useState(() => {
      setInterval(() => {
       setShowLine(true);
      }, 3100);
  }, []);
  
  const [showPage, setShowPage] = useState(false);
  useState(() => {
      setInterval(() => {
       setShowPage(true);
      }, 7000);
  }, []);

  const [showsign, setShowSign] = useState(false);
  useState(() => {
      setInterval(() => {
       setShowSign(true);
      }, 5000);
  }, []);
  
  
  const [showAbout, setShowAbout] = useState(false);
  useState(() => {
      setInterval(() => {
       setShowAbout(true);
      }, 6000);
  }, []);
  

  
  const [skill, setSkill] = useState('Design')
  const [project, setProject] = useState('Development')
    
  return (


    

    <div id='home' className='mt-6 sm:py-0'>
 {showComponent &&   <ThemeToggle />}
        
    


    {showComponent &&  <ul className="hidden md:flex bg-black sticky top-4 ... text-white text-center z-20 my-5 rounded-3xl h-12 max-w-[700px] w-8/12 mx-auto  justify-between stroke-transparent">

       <button className="p-3 w-44 text-center hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl"><a href='#home'>Home</a></button>

        <button href='#about' className="p-3 w-44 text-center p hover:bg-white hover:text-black bg-black mx-auto rounded-3xl "><a href='#about'> About </a></button>
    
 
        <button className="p-3 text-center w-44 hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl "> <a href='#skills'>Skills</a></button>
       
        
        <button className="p-3 text-center w-44 hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl "><a href='#project'>Projects</a></button>
      
     </ul>}
     {showComponent &&  
     <div className='md:hidden sticky mobile top-4 bg-black p border-r-50 mx-auto box-border z-20 pb-4 justify-between sm:h-18  h-10 w-9/12 rounded-3xl  p-2 text-white flex'>
        <div className="grid grid-cols-2 -space-x-0 lg:-space-x-7">
       <Link to='/' ><a href='#home'><img  src={face} alt=''  className="md:hidden h-6 rounded-2xl" /></a></Link> 
        </div> 
        <ul className="flex px-1 text-xs p sm:justify-between">
        <li className="p-1 "><a href='#about'>About</a></li>
        <li className="p-1 "><a href='#skills'>Skills</a></li>
        <li className="p-1 "><a href='#project'>Projects</a></li>
     </ul>
    </div>
}
    
        
        <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] max-w-[300px] w-full h-[35vh] md:h-[80vh] sm:mt-16 mt-24 mx-auto grid md:grid-cols-4'>
        <div className='flex flex-col pb-3 home md:col-span-3 justify-center ' >
        <h1 className='text-4xl md:text-7xl lg:text-8xl h1 dynamic-txts pb-4'>
         <TypeWritter 
         onInit={(typewriter) => {
          typewriter.typeString("Hi, I'm Tolulope.").start();
         }}
         />
        </h1>
        <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[450px] max-w-[400px] flex w-full sm:mt-4 pl-4 mt-2'>
        {showLine && <img className='h-[40px] md:h-[60px] w-[5px]' src={Line} alt='' />}
        {showComponent && <p className='text-[12px] sm:text-[16px] md:text-[17px] pa mx-1 lg:text-[17px] p md:pb-3 md:ml-3 leading-3 md:text-sm'>A<strong className='text-white'> Front-End Web Developer </strong > passionate about creating interactive
        applications and experiences on the web.
        </p>}
        </div>
        
            {showsign && <img className='w-[100px] mt-7 sm:hidden z-10 block' src={signature} alt=''/> } 
             
        </div>
        <div className='justify-center'>
        {showAbout && <img className='w-[180px] aimg lg:w-[310px] text-center mt-28 justify-center hidden md:block md:mx-auto ' src={Abouto} alt='' />}

        </div>
        
        </div>
        <div className='wel-w text-[70px] sm:text-[110px] sm:max-w-[400px] md:max-w-[900px] lg:max-w-[1100px] max-w-[280px]'>
        <div className='wel '>
       
        </div>
        <div  className='wel'>
            <span id='about'>       WELCOME TO MY PORTFOLIO&nbsp;&nbsp;&nbsp;</span>
        </div >
        </div>

        


<div >
        

{showComponent &&  
        <div  className='w-full mb-10 py-0 sm:py-8 '>
           
            <div className=' sm:p-1 sm:mb-16 py-2  sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] mx-auto max-w-[300px]  grid md:grid-cols-2'>
            
            <div className='about flex flex-col md:col-span-2 justify-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl pb-4'>About Me</h1>
                <p className='text-[10px] text-white pb-2 p sm:text-xs md:text-sm'>Hello! My name is Tolulope Olonibua, i am a
                detail-oriented Frontend Software Engineer dedicated to the quest of 
                developing solutions that leverage on best practise technologies to deliver top user experience. My approach to web design and development is inﬂuenced by my 
            understanding of design as a problem solving process. i'm commited to solving complex problems through data driven processes that translate business objective to its reality. 
                </p>
                
                <p className='text-[10px] text-white pb-2  p sm:text-xs md:text-sm'><span className='text-white inline-block'>My Journey! -</span> "My interest in web development started back in high school, more than my buddies, i was always intrigued by technology. 
                This led to my appointment as the junior <strong>CISCO </strong>instructor for my level. I printed a 500 pages book on HTML and CSS after high school to learn how to create websites
                    but as soon as i moved to the University, i was focused on my academic work. My love has always been website creation therefore after my Bachelor's degree,
                    i enrolled in various web development courses which broadens my knowlegde".

                </p>
    
            <p className='text-[10px] text-white pt-2 p sm:text-xs md:text-sm'> Having attained the necessary competence, my main focus
             these days is building accessible, inclusive products and digital
            experiences as much as possible. My goal is to secure a responsive carreer opportunity to fully utilize my skills, while making 
            significant contributions to achieve goals of a company that focus on customer satisfaction and experience.</p>
            <div className='text-[10px] hidden md:block p pt-2 sm:text-xs md:text-sm mt-2'>
                <p className='tex-white text-[11px] my-2 sm:text-sm md:text-sm'>Here are a few technologies i've been working with recently:</p>
                <div className='flex space-between'>
                <div>
                    <p className='flex'><GiPlayButton className='mx-[2px]'/>Javascript</p>
                    <p className='flex'><GiPlayButton className='mx-[2px]'/>React</p>
                    <p className='flex'><GiPlayButton className='mx-[2px]'/>CSS (Bootstrap, Tailwind)</p>
                </div>
                <div className='mx-32'>
                    
                    <p className='flex'><GiPlayButton className='mx-[2px]'/>Html</p>
                    <p className='flex'><GiPlayButton className='mx-[2px]'/>Wordpress</p>
                    <p className='flex'><GiPlayButton className='mx-[2px]'/>Figma</p>
                </div>
                </div>
            </div>
            </div>
           
            <img className='w-[115px] md:w-[220px] mx- md:text-center 8 circle mt-20 md:mt-32 md:mx-10 float-right z-10 block' src={circle} alt=''/>
    
            </div>
     
            
          
        </div>}
        </div>

          


        
        {showComponent &&  <div>
        <div id='skills' className='w-full skill mt-10 sm:py-14 border-y-2 py-5 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] mx-auto max-w-[310px]'>
        
        <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] max-w-[310px] mx-auto'>
        <h1 className='text-2xl md:text-3xl mt-6 lg:text-4xl pb-4'>Skills & Education</h1>
        <button className='text-[10px] px-6 p p-2 sm:text-xs btn design md:text-sm' onClick={() => setSkill('Design')}>Design</button> 
        <button className='text-[10px] p-2 p sm:text-xs btn md:text-sm px-8' onClick={() => setSkill('Development')}> Development</button>
        </div>
        
     <div className='mx-auto items-center grid md:grid-cols-2'>
      <div>
        {skill === 'Design' && 
          <div className='grid grid-cols-3 mx-auto '>
             <div className='pr-3'>
                 <img className='mx-auto inline-block h-[96px]  md:h-[100px] lg:h-[110px] pt-12 items-center align-middle' src={tools} alt='' />
                 <img className='mx-auto float-right' src={process} alt='' />
             </div>
             <div className=' w-[200px] text-[11px] sm:text-xs mx-4 py-2'>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={figma} alt='' /> Figma</p>  
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={photoshop} alt='' /> Photoshop</p>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={illustrator} alt='' />Adobe Illustrator</p>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={animate} alt='' /> Adobe Affect Effect</p>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={adobexd} alt='' />Adobe XD</p>
             </div>
          </div>
         }
        
        {skill === 'Development' &&   
         <div className='grid grid-cols-3 mx-auto '>
            <div className='pr-3'>
                <img className='mx-auto inline-block h-24  md:h-[100px] lg:h-[110px] pt-12 items-center align-middle' src={tools} alt='' />
                <img className='mx-auto float-right' src={process} alt='' />
            </div>
            <div className=' w-[170px] h-[150px] text-[11px] sm:text-xs mx-4'>
                <p className='flex py-2 p items-center'><img className='px-1' src={html} alt='' /> HTML</p>  
                <p className='flex py-2 p items-center'><img className='px-1' src={css} alt='' /> CSS</p>
                <p className='flex py-2 p items-center'><img className='px-1' src={javascript} alt='' />Javascript</p>
                <p className='flex py-2 p items-center'><img className='px-1' src={Reactt} alt='' /> React</p>
                <p className='flex py-2 p items-center'><img className='px-1' src={wordpress} alt='' />Wordpress</p>
            </div>
         </div>
        }
      </div>  
        

        <div className='grid grid-cols-3 mx-auto'>
        <div className='pr-3 py-8'>
                <img className='mx-auto inline-block h-[110px]  md:h-[115px] lg:h-[125px] py-4 pt-12 items-center align-middle' src={sch} alt='' />
                <img className='mx-auto float-right' src={processo} alt='' />
            </div>
            <div className='w-[200px] md:w-[280px] mx-4 py-4'>
                <div className=''>
                  <h2 className='font-bold text-[13px] p sm:text-[16px]'>Cousera</h2>
                  <p className='text-[10px] p sm:text-[12px]'>Front-End Web UI Frameworks and Tools: Bootstrap 4</p>
                  <span className='text-[11px] italic'>2022</span>
                  </div>
                  <div className=''>
                  <h2 className='font-bold text-[13px] p  sm:text-[16px]'>Federal University, Oye Ekiti</h2>
                  <p className='text-[10px] p sm:text-[12px]'>BSc.(Edu) Mathematics</p>
                  <span className='text-[11px] italic'>2021</span>
                  </div> 
                  <div className=''>
                  <h2 className='font-bold text-[13px] p sm:text-[16px]'>Federal Government College, Ikole</h2>
                  <p className='text-[10px] p sm:text-[12px]'>SSCE Certificate</p>
                  <span className='text-[11px] italic' >2016</span>
                </div>
            </div>
        </div>
     </div>
    </div>
    </div> }

    {showComponent &&  
   <div>
    <div id='project' className=''>
    
    <div className='w-full project mt-8 sm:py-8 py-5 p-4 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] mx-auto max-w-[310px]'>
        <div className= 'sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] max-w-[330px] mx-auto'>
        {showComponent &&   <h1 className='text-2xl md:text-3xl lg:text-4xl pb-10'>Projects</h1>}
        {showComponent &&   <button className='text-[10px] px-6 p-2 sm:text-xs p btn  design md:text-sm' onClick={() => setProject('Development')}>Development</button> }
        {showComponent &&   <button className='text-[10px] p-2 sm:text-xs  p btn md:text-sm px-8' onClick={() => setProject('More')}> More...</button>}
      </div>
        {project === 'Development' && 
        <div className='py-5 items-center grid md:grid-cols-3'>
           
         <div className=' bgg border-2 md:border-4 text-center mx-auto bg mt-4 p h-72 w-72  py-10'>
           <h2 className='font-bold text-[14px] md:text-[17px]'>Learn</h2>
            <p className='p-2 my-4 text-[10px] md:text-xs'>Designed and Developed a learning platform for users to find out if they will make a good Designer or Developer - Javascript - React - Tailwind Css </p>
           <div className='grid grid-cols-2'>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://olonibua.github.io/learn/' target='_blank'>Live site </a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://github.com/olonibua/learn' target='_blank'>Github</a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
           </div>
        </div>
        <div className=' bgg border-2 md:border-4 text-center mx-auto bg mt-4 p h-72 w-72  py-10'>
           <h2 className='font-bold text-[14px] md:text-[17px]'>Coin App </h2>
            <p className='p-2 my-4 text-[10px] md:text-xs'>Designed and Developed a crypto market website using React - Javascript - Axios - API from Coingecko</p>
           <div className='grid grid-cols-2'>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://olonibua.github.io/coinapp/' target='_blank'>Live site </a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://github.com/olonibua/coinapp' target='_blank'>Github</a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
           </div>
        </div>
            
    

        <div className=' bgg border-2 md:border-4 text-center mx-auto bg mt-4 p h-72 w-72  py-10'>
        <h2 className='font-bold text-[14px] md:text-[17px]'>My Portfolio Site </h2>
            <p className='p-2 my-4 text-[10px] md:text-xs'>Designed and Developed my Portfolio website from scratch using React - Tailwind Css </p>
            <div className='grid grid-cols-2'>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://olonibua.github.io/tolulope' target='_blank'>Live site </a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://github.com/olonibua/tolulope' target='_blank'>Github</a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
           </div>
  
        </div>

        
        </div>
         }
        {project === 'More' && 
        <div className='py-5 items-center grid lg:grid-cols-2 '>
        
        <div className='bgg text-center mx-auto border-2 md:border-4 mt-4 p h-72 w-72 py-10'>
            <h2 className='font-bold text-[14px] md:text-[17px]'>Pocket App</h2>
            <p className='p-2 my-4 text-[10px] md:text-xs'>Redesigned and Developed Pocket App website landing page</p>
            <div className='grid grid-cols-2'>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://tolulope55.github.io/pocketapp' target='_blank'>Live site </a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://github.com/tolulope55/pocketapp' target='_blank'>Github</a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
           </div>
        </div>
        <div className=' bgg border-2 md:border-4 text-center mx-auto bg mt-4 p h-72 w-72  py-10'>
           <h2 className='font-bold text-[14px] md:text-[17px]'>Vscode </h2>
            <p className='p-2 my-4 text-[10px] md:text-xs'>Developed the Vscode app startup page with its basic functionalities using React - Tailwind Css </p>
           <div className='grid grid-cols-2'>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://olonibua.github.io/vscode/' target='_blank'>Live site </a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
            <p className='flex p-2 text-[10px] md:text-xs font-bold mx-2 underline underline-offset-2 text-center '><a href='https://github.com/olonibua/vscode' target='_blank'>Github</a> <img className='text-center h-3 mx-2 mt-1' src={Arrow} alt=''/></p>
           </div>
        </div>
        </div>
          } 
    
        </div>
        <div>
        </div>
    
        <div className='wel-w mt-4 text-[70px] sm:text-[110px] overflow-hidden sm:max-w-[400px] md:max-w-[900px] lg:max-w-[1100px] max-w-[280px]'>
        <div className='wel'>
            {/* <span className=''>       WELCOME TO MY PORTFOLIO&nbsp;&nbsp;&nbsp;</span> */}
        </div>
        <div  className='wel'>
            <span id='about'> THANKS FOR READING&nbsp;&nbsp;&nbsp;</span>
        </div >
        </div>

           <h2 className='text-3xl mt-24 text-center p md:text-5xl lg:text-6xl font-bold pb-10'>THANKS FOR READING</h2>
    </div>
    </div>}
       

    {showComponent &&   
    <div className='text-white  bg-black w-full  mx-auto '>
    <div className='sm:max-w-[500px]  md:max-w-[700px] lg:max-w-[1100px] max-w-[300px] w-full py-10  mx-auto'>
    <p className='text-[13px] text-md'>Got an idea?</p>
        <h2 className='text-xl md:text-3xl lg:text-4xl pb-8 p underline underline-offset-2 md:underline-offset-4 font-bold'><a href='http://linkedin.com/in/olonibua-tolulope' target="_blank">Let's talk about it</a></h2>
      <div className=' border-b-2 py-2 grid md:grid-cols-3'>
     
       <p className='text-[13px] md:text-[16px] text-[#878787]'>mail:<br/><span className='p text-white'>Olonts@gmail.com</span></p>
          <p className='text-[13px] md:text-[16px] text-[#878787]'>call:<br/><span className='p text-white'>+2348149249926</span></p>
          <p className='text-[#878787] text-[13px] md:text-[16px] sm:ml-24'>Connect:<br/> <span className=' justify-between flex'>
          <a href='https://twitter.com/ifetolu5' target="_blank"><img src={twitter} alt='' /></a> <a href='https://github.com/olonibua/' target="_blank" ><img src={Github} alt='' /></a>
          <a href='https://behance.net/olonibutolulop' target="_blank"> <img src={Behance} alt='' /></a>
          </span>
          </p>
      </div>
      
    </div>
    <div className='bg-[#111117] w-full text-center h-10 mx-auto'>
          <p className='text-[10px] py-3 p md:text-md'>Designed and Developed by <strong className='text-white p'> <a href='http://linkedin.com/in/olonibua-tolulope' target="_blank">Tolulope Olonibua</a></strong></p>
    </div>
  </div>
}
   
        
    
    </div>

    
         
    
    
  )
}

export default Home
