import React, { useState } from 'react'
import LogoPNG from 'assets/img/brand/brand-logo.png'
import Image from 'next/image'

const MainHeader = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <Image src={LogoPNG} alt='logo' width={177} height={55} />
            </div>
            <button className='lg:hidden flex flex-col gap-1 border-2 rounded-lg p-2 hover:bg-gray-200'
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className='w-4 border-t-2 border-t-gray-400'></div>
                <div className='w-4 border-t-2 border-t-gray-400'></div>
                <div className='w-4 border-t-2 border-t-gray-400'></div>
            </button>
            {
                open && (
                    <div className='lg:hidden absolute top-16 right-2 w-28 flex flex-col gap-2 shadow-lg rounded-md p-2 bg-white'>
                        <p className='hover:bg-primary-200 hover:text-white rounded-md px-2'>Tutor Kami</p>
                        <p className='hover:bg-primary-200 hover:text-white rounded-md px-2'>FAQ</p>
                    </div>
                )
            }
            <div className='hidden lg:flex justify-center items-center gap-7 mx-32'>
                <div className='w-28 p-2 bg-primary-200 rounded-2xl cursor-pointer hover:bg-opacity-80'>
                    <p className='text-center text-white text-sm font-semibold'>
                        Tutor Kami
                    </p>
                </div>
                <div className='w-28 p-2 bg-primary-200 rounded-2xl cursor-pointer hover:bg-opacity-80'>
                    <p className='text-center text-white text-sm font-semibold'>
                        FAQ
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainHeader