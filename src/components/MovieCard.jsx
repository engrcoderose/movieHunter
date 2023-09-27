import React from 'react'

const MovieCard = ({ movie }) => {
  return (

    <div className="movie relative overflow-hidden border-none rounded-xl w-[310px] h-[460px]
    m-[1.5rem] transition-all duration-500 shadow-lg shadow-[#100c09]
    hover:shadow-[#FC8621] hover:shadow-lg hover:scale-x-105 hover:scale-y-105">
      <div className='w-full h-full hover:h-full '>
        <img className='w-full h-full' 
        src={movie.Poster !=='N/A' ? movie.Poster: "https://via.placeholder.com/400"}
         alt={movie.Title}/>
      </div>

      <div className='bg-[#343739] pt-[16px] pb-[24px] px-[24px] 
      absolute bottom-0 right-0 left-0 hover:bg-transparent '>
        <span className='uppercase text-[13px] tracking-widest font-semibold text-[#FC8621]'>{movie.Type}</span>
        <h3 className='mt-[5px] text-white'>{movie.Title}</h3>   
        <p className='text-[#FC8621] mt-1'>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieCard
