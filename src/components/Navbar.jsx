import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between item-center h-24 max-w-[1240px] mx-auto text-[#FC8621] px-4 cursor-pointer text-xl'>
        <h1 className='logo w-fit text-3xl text-[#FC8621] font-bold mt-4'>Movie Hunter</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 m-2'>Genre</li>
          <li className='p-4 m-2'>Home</li>
          <li className='p-4 m-2'>Top IMDB</li>
          <li className='p-4 m-2'>Country</li>
        
          <li><button className='m-4 py-2 px-4 md:ml-10 bg-[#FC8621] text-white rounded-md transition-all duration-500 hover:bg-none hover:text-#FC8621]'> Login</button> </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden mt-4'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-30 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%] md:hidden'}>
          <h1 className='text-3xl font-bold m-4'>Movie Hunter</h1>
          <li className='p-4 borderb border-gray-600'>Genre</li>
          <li className='p-4 borderb border-gray-600'>Home</li>
          <li className='p-4 borderb border-gray-600'>Top IMDB</li>
          <li className='p-4 borderb border-gray-600'>Country</li>
        
        <li><button className='m-4 py-2 px-4 md:ml-10 outline rounded-md'>Login</button> </li>
        </ul>
    </div>
  );
};
