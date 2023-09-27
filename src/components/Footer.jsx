import React from 'react';
import { FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='m-wid-[1240px] mx-auto py-14 px-4 grid grid-cols-2 text-[#FC8621]
    border-t-2 border-gray-800'>   
        <div className='ml-20'>
        <h1 className='logo w-fit text-3xl text-[#FC8621] font-bold mt-4'>Movie Hunter</h1>
        <p className='py-4'>Hunt your favourite movies now!</p>
        </div>
        <div>
            <div className='flex justify-evenly md:w-[75%] my-6 cursor-pointer'> 
            <FaFacebookSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaInstagram size={30}/>
            </div>
            <p className='ml-12 md:ml-24'>All right reserved {year} </p>
        </div>
    </div>
  )
}

export default Footer