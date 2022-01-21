import React, { useRef } from 'react';
import { useState, useEffect } from 'react';





function Navbar(props) {
    
    const [ open, setopen ] = useState(false);
    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (open && ref.current && !ref.current.contains(e.target)) {
            setopen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
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
    return <div ref={ref} className='mt-4 md:hidden fixed z-10 w-full pt-20 bg-green max-h-60 flex flex-col justify-center items-center shadow-md'>
                <a onClick={() => {setopen(!open)}} href="#home" className='hover:bg-greenish w-full flex justify-center items-center text-2xl text-white text-center scroll-smooth pt-2 ml-4'>Accueil</a>
                <a onClick={() => {setopen(!open)}} href="#Boxes" className='hover:bg-greenish  w-full flex justify-center items-center text-2xl text-white text-center scroll-smooth ml-4'>Avantages</a>
                <a onClick={() => {setopen(!open)}} href="#CCM" className='hover:bg-greenish w-full flex justify-center items-center text-2xl text-white text-center scroll-smooth ml-4'>CCM</a>
                <a onClick={() => {setopen(!open)}} href="#CTA" className='hover:bg-greenish pb-3 w-full flex justify-center items-center shadow-lg text-2xl text-white text-center scroll-smooth'>Support</a>
            </div>
}
function Navlink() {
    return <div className='bg-green flex justify-center items-center mr-24 fl:mr-33  xs:hidden'>
                <div><a className='text-2xl hover:text-greenish text-white text-center pl-6 scroll-smooth' href="#home">Accueil</a></div>
                <div><a className='text-2xl hover:text-greenish text-white text-center pl-6 scroll-smooth' href="#Boxes">Avantages</a></div>
                <div><a className='text-2xl hover:text-greenish text-white text-center pl-6 scroll-smooth' href="#CCM">CCM</a></div>
                <div><a className='text-2xl hover:text-greenish text-white text-center pl-6 scroll-smooth' href="#CTA">Support</a></div>
            </div>
}



  return <div>
      <div className='p-0 fixed w-full m-0 flex bg-green top-0 pt-1 pb-1 justify-between items-center z-50 pl-6 pr-10 shadow-md'>
          <div className='flex justify-center items-center'>
              <img className='h-20 w-20 md:ml-28 cursor-pointer' src='../assets/droid.png' alt='Logo' />
              <p className='hover:text-greenish cursor-pointer font-bold text-center text-2xl text-white pl-2 fl:hidden'>Takwira</p>
              
          </div>
          <Humberger />
          <Navlink />
          
          
     
          

      </div>
      {open === true && <Dropdown  />}
     
      
  </div>;
}

export default Navbar;

