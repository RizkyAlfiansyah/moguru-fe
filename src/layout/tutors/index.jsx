import React from 'react'
import Profile from 'assets/img/profile/profile.jpg'
import Image from 'next/image'
import { Pagination } from 'components'

const Tutors = () => {
    return (
        <div className='w-full flex flex-col justify-start gap-4'>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-4 items-center'>
                {
                    Array(3).fill().map((_, index) => (
                        <div className='w-72 rounded-lg shadow-xl flex flex-col'>
                            <Image
                                src={Profile}
                                alt='profile'
                                objectFit='cover'
                                width={350}
                                height={350}
                                className='rounded-lg rounded-b-none'
                            />
                            <div className='w-full p-2 bg-white rounded-b-lg flex flex-col gap-1 justify-start'>
                                <p className='text-lg font-semibold text-primary-200'>Lucy Agnez</p>
                                <p className='text-sm text-gray-800'>Jakarta</p>
                                <p className='text-sm font-extrabold text-gray-800'>Matematika (SD, SMP, SMA)</p>
                                <p className='text-sm font-extrabold text-gray-800'>Rp. 100.000 / SESI</p>
                                <div className='w-full flex justify-end'>
                                    <button
                                        className='bg-primary-200 text-white rounded-md px-2 py-1 hover:opacity-70 hover:shadow-2xl'
                                    >
                                        Reservasi
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center'>
                <Pagination />
            </div>
        </div>
    )
}

export default Tutors