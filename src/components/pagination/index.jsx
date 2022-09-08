import React from 'react'
import ArrowRight from 'assets/icons/arrow-right.svg'
import ArrowLeft from 'assets/icons/arrow-left.svg'
import Image from 'next/image'

const Pagination = () => {
    return (
        <div className='flex p-2 gap-2 justify-center items-center'>
            <div className='w-7 h-7 p-1 bg-slate-300 rounded-full flex items-center justify-center hover:bg-primary-200 cursor-pointer hover:shadow-2xl'>
                <Image
                    src={ArrowLeft}
                    alt='arrow-left'
                />
            </div>
            <div className='bg-slate-300 rounded-full flex items-center justify-center gap-2 text-center'>
                <p className='w-7 h-7 hover:bg-primary-200 hover:rounded-md hover:rounded-l-full hover:shadow-2xl cursor-pointer hover:text-white'>1</p>
                <p className='w-7 h-7 hover:bg-primary-200 hover:rounded-md hover:shadow-2xl cursor-pointer hover:text-white'>2</p>
                <p className='w-7 h-7 hover:bg-primary-200 hover:rounded-md hover:shadow-2xl cursor-pointer hover:text-white'>3</p>
                <p className='w-7 h-7 hover:bg-primary-200 hover:rounded-md hover:shadow-2xl cursor-pointer hover:text-white'>...</p>
                <p className='w-7 h-7 hover:bg-primary-200 hover:rounded-md hover:shadow-2xl cursor-pointer hover:text-white'>8</p>
                <p className='w-7 h-7 hover:bg-primary-200 hover:rounded-md hover:shadow-2xl cursor-pointer hover:text-white'>9</p>
                <p className='w-7 h-7 hover:bg-primary-200 hover:rounded-md hover:rounded-r-full hover:shadow-2xl cursor-pointer hover:text-white'>10</p>
            </div>
            <div className='w-7 h-7 p-1 bg-slate-300 rounded-full flex items-center justify-center hover:bg-primary-200 cursor-pointer hover:shadow-2xl'>
                <Image
                    src={ArrowRight}
                    alt='arrow-left'
                />
            </div>
        </div>
    )
}

export default Pagination