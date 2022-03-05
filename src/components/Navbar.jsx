import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

import { Link, animateScroll as scroll } from "react-scroll";





function Navbar(props) {
    
    const [ open, setopen ] = useState(false);
    

    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => {

          if (open && ref.current && !ref.current.contains(e.target)) {
            setopen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {

          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [open])
    


      
function Humberger() {
    return <div onClick={() => {setopen(!open)}} className=' h-12 md:hidden w-12 flex items-center justify-center border-white cursor-pointer'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    </div>
}

function Dropdown() {
    return <div ref={ref} className='mt-4 md:hidden fixed z-10 w-full pt-20 bg-green  flex flex-col justify-center items-center shadow-md'>
                <a  onClick={() => {setopen(!open)}} href="#home" className='hover:bg-greenish cursor-pointer w-full flex justify-center items-center text-2xl text-white text-center scroll-smooth py-3  pt-2 ml-4'>Accueil</a>
                <a  onClick={() => {setopen(!open)}} href="#Boxes" className='hover:bg-greenish cursor-pointer  w-full flex justify-center items-center text-2xl text-white text-center scroll-smooth py-3 ml-4'>Avantages</a>
                <a  onClick={() => {setopen(!open)}} href="#CCM" className='hover:bg-greenish cursor-pointer w-full flex justify-center items-center text-2xl text-white text-center scroll-smooth py-3 ml-4'>CCM</a>
                <a  onClick={() => {setopen(!open)}} href="#CTA" className='hover:bg-greenish cursor-pointer pb-3 w-full flex justify-center items-center shadow-lg text-2xl text-white text-center py-3  scroll-smooth'>Support</a>
            </div>
}
function Navlink() {
    return <div className='bg-green flex justify-center items-center mr-24 fl:mr-33  xs:hidden'>
                <div className='flex flex-col items-center justify-center group'>
                <a className='text-2xl flex items-center justify-center cursor-pointer text-white text-center pl-6 scroll-smooth' href="#home">Accueil</a>
                  <div className='hidden bg-greenish px-2 border-greenish rounded-lg group-hover:flex items-center justify-center border-2 text-center w-3/4 h-2 mt-2'></div>
                </div>
                <div className='flex flex-col items-center justify-center group'>
                <a  className='text-2xl flex items-center  justify-center  cursor-pointer text-white text-center pl-6 scroll-smooth' href="#Boxes">Avantages</a>
                  <div className='hidden bg-greenish px-2 border-greenish rounded-lg group-hover:flex items-center justify-center border-2 text-center w-3/4  h-2 mt-2'></div>
                </div>
                <div className='flex flex-col items-center justify-center group'>
                <a className='text-2xl flex items-center justify-center  cursor-pointer text-white text-center pl-6 scroll-smooth' href="#CCM">CCM</a>
                  <div className='bg-greenish hidden px-2 border-greenish rounded-lg group-hover:flex items-center justify-center border-2 text-center w-3/4  h-2 mt-2'></div>
                </div>
                <div className='flex flex-col items-center justify-center group'>
                <a  className='text-2xl flex items-center justify-center cursor-pointer text-white text-center pl-6 scroll-smooth' href="#CTA">Support</a>
                  <div className='bg-greenish hidden px-2 border-greenish rounded-lg group-hover:flex items-center justify-center border-2 text-center w-3/4 h-2 mt-2'></div>
                </div>
                
            </div>
}



  return <div>
      <div className='p-0 fixed w-full m-0 flex bg-green top-0 pt-1 pb-1 justify-between items-center z-50 pl-6 pr-10 shadow-md'>
          <a href='/' className='flex justify-center items-center'>
              <img className='h-20 w-20 md:ml-28 cursor-pointer border-0 rounded-md' src='../assets/droid.png' alt='Logo' />
              <p className=' cursor-pointer font-bold text-center text-2xl text-white pl-2 fl:hidden'>Takwira</p>
              
          </a>
          <Humberger />
          <Navlink />
          
          
     
          

      </div>
      {open === true && <Dropdown  />}
     
      
  </div>;
}

export default Navbar;

