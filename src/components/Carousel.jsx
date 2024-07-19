import React, { useEffect } from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom'
const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if(current === 0) setCurrent(slides.length - 1)
        else {setCurrent(current - 1)}
    }

    const nextSlide = () => {
        if(current === slides.length - 1) setCurrent(0)
        else {setCurrent(current + 1)}
    }

    
    useEffect(() => {
        const data = setInterval(() => {
            setCurrent(prev => 
                prev === slides.length - 1 ? 0 : prev + 1
            )
        }, 5000)

        return (() => {
            clearInterval(data)
        })
    }, [])

  return (
    <div className='overflow-hidden relative h-[600px]'>
        <div className='flex transition ease-out duration-300' style={{transform: `translateX(-${current * 100}%)`,}}>
            {slides.map((each) => {
                return (
                    <img src={each} alt="image" />
                )
            })}
        </div>
        <div className='absolute bottom-0 flex justify-center gap-3 w-full py-10'>
            {slides.map((each ,e) => {
                return (
                    <div key={e} onClick={() => setCurrent(e)} 
                    className={`w-2 h-2 rounded-full ${e == current ? 'bg-white' : 'bg-gray-300'} cursor-pointer`}></div>
                )
            })}
        </div>
        <div className='absolute top-0 h-full w-full flex items-start pt-10 justify-end px-16'>
            <button onClick={prevSlide} className='bg-white rounded-md rounded-r-none py-2 px-3 border-r-2'>
                <ArrowLeftIcon />
            </button>
            <button onClick={nextSlide} className='bg-white rounded-md rounded-l-none py-2 px-3'>
                <ArrowRightIcon />
            </button>
            <div className='flex flex-col justify-center items-center mr-24 h-full gap-5'>
                <h1 className='text-white font-bold text-7xl text-center bg-black/30'>Level up your style with our summer collections</h1>
                <div className='bg-white px-5 py-3 rounded-sm shadow-xl'>
                    <Link to='shop'>
                    <button>Shop Now <ArrowRightAltIcon /></button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel