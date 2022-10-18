import React from 'react'
import twitter from '../img/Twitter.png'
import Github from '../img/github.png'
import Behance from '../img/behance.png'

const Contact = () => {
  return (
    <div className='text-white  bg-black w-full  mx-auto '>
    <div className='sm:max-w-[500px]  md:max-w-[700px] lg:max-w-[1050px] max-w-[300px] w-full py-10  mx-auto'>
    <p className='text-md'>Got an idea?</p>
        <h2 className='text-2xl md:text-3xl lg:text-4xl pb-8 p underline underline-offset-4 font-bold'><a href='https://linkedin.com/olonibua-tolu-465042127' target="_blank">Let's talk about it</a></h2>
      <div className=' border-b-2 py-2 grid md:grid-cols-3'>
     
       <p className='text-[#878787]'>mail:<br/><span className='p text-white'>Olonts@gmail.com</span></p>
          <p className='text-[#878787]'>call:<br/><span className='p text-white'>+2348149249926</span></p>
          <p className='text-[#878787] sm:ml-24'>Connect:<br/> <span className=' justify-between flex'>
          <a href='https://twitter.com/ifetolu5' target="_blank"><img src={twitter} alt='' /></a> <a href='https://github.com/tolulope55/' target="_blank" ><img src={Github} alt='' /></a>
          <a href='https://behance.net/olonibutolulop' target="_blank"> <img src={Behance} alt='' /></a>
          </span>
          </p>
      </div>
      
    </div>
    <div className='bg-[#111117] w-full text-center h-10 mx-auto'>
          <p className='text-xs py-3 p md:text-md'>Designed and Development by <strong className='text-white p'> <a href='https://linkedin.com/olonibua-tolu-465042127' target="_blank">Tolulope Olonibua</a></strong></p>
    </div>
  </div>
  )
}

export default Contact