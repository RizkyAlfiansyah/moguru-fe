import React from 'react'
import Profile from 'assets/img/profile/profile.jpg'
import Image from 'next/image'
import { Pagination } from 'components'
import { useRouter } from 'next/router'

const Tutors = () => {

    const router = useRouter()

    return (
        <div className='w-full flex flex-col justify-start gap-4'>
            <div className='w-full h-full flex flex-col md:flex-row justify-evenly gap-8 items-start'>
                <div className='w-full md:w-auto rounded-lg shadow-xl flex flex-col justify-center items-center'>
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
                        <div className='w-full flex justify-center'>
                            <button
                                className='w-full bg-primary-200 text-white rounded-md px-2 py-1 hover:opacity-70 hover:shadow-2xl'
                                onClick={() => router.push('/reservasi')}
                            >
                                Reservasi
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-2'>
                    <div className='w-full flex flex-col gap-4 bg-white p-2 rounded-lg'>
                        <p className='text-lg font-bold text-primary-200'>BIO</p>
                        <p className='text-justify font-semibold'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu bibendum odio, at hendrerit massa. Sed placerat est eget mauris aliquam iaculis. Donec posuere imperdiet lectus vitae malesuada. Donec ut augue erat. Aliquam pretium posuere erat, at tempor tortor accumsan pharetra. Maecenas vel sem eget magna interdum vehicula. Pellentesque viverra elit vitae dolor tempus, quis faucibus erat t
                        </p>
                    </div>

                    <div className='w-full flex flex-col gap-4 bg-white p-2 rounded-lg'>
                        <p className='text-lg font-bold text-primary-200'>JADWAL</p>
                        <p className='text-justify font-semibold'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu bibendum odio, at hendrerit massa. Sed placerat est eget mauris aliquam iaculis. Donec posuere imperdiet lectus vitae malesuada. Donec ut augue erat. Aliquam pretium posuere erat, at tempor tortor accumsan pharetra. Maecenas vel sem eget magna interdum vehicula. Pellentesque viverra elit vitae dolor tempus, quis faucibus erat t
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutors