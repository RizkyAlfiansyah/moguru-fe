import React from 'react'
import LogoPNG from 'assets/img/brand/brand-logo.png'
import Image from 'next/image'

const MainHeader = () => {
    return (
        <div className='w-full px-8 py-4 bg-white shadow-md sticky top-0 z-50'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <Image src={LogoPNG} alt='logo' width={177} height={55} />
                </div>

                <div className='flex justify-center items-center gap-7 mx-32'>
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
        </div>
    )
}

export default MainHeader