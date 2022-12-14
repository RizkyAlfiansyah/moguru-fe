import React, { useState } from 'react'
import { useRouter } from 'next/router'
import LogoPNG from 'assets/img/brand/brand-logo.png'
import SearchSVG from 'assets/icons/search-icon.svg'
import Image from 'next/image'
import { Button, Search } from 'components'

const MainHeader = ({ search }) => {
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <div className='w-full flex lg:gap-2 justify-between items-center'>
            <div className='flex justify-center items-center'>
                <Image src={LogoPNG} alt='logo' width={177} height={55} />
            </div>
            <div className='flex gap-2'>
                {
                    search && (
                        <button className='lg:hidden flex flex-col gap-1 border-2 rounded-lg p-2 hover:bg-gray-200'
                            onClick={() => {
                                setOpenSearch((prev) => !prev)
                                setOpen(false)
                            }}
                        >
                            <Image
                                src={SearchSVG}
                            />
                        </button>
                    )
                }
                <button className='lg:hidden flex flex-col gap-1 border-2 rounded-lg p-2 hover:bg-gray-200'
                    onClick={() => {
                        setOpen((prev) => !prev)
                        setOpenSearch(false)
                    }}
                >
                    <div className='m-auto flex flex-col gap-1'>
                        <div className='w-4 border-t-2 border-t-gray-400'></div>
                        <div className='w-4 border-t-2 border-t-gray-400'></div>
                        <div className='w-4 border-t-2 border-t-gray-400'></div>
                    </div>
                </button>
            </div>
            {
                open && (
                    <div className='lg:hidden absolute top-16 right-2 w-28 flex flex-col gap-2 shadow-lg rounded-md p-2 bg-white'>
                        <p className='hover:bg-primary-200 hover:text-white rounded-md px-2' onClick={() => router.push('/list-tutor')}>Tutor Kami</p>
                        <p className='hover:bg-primary-200 hover:text-white rounded-md px-2'
                            onClick={() => router.push('/faq')}
                        >FAQ</p>
                    </div>
                )
            }
            {
                openSearch && (
                    <div className='lg:hidden absolute top-16 right-14 w-48 flex flex-col gap-2 shadow-lg rounded-md p-2 bg-white'>
                        <div className='w-full'>
                            <Search
                                placeholder='Cari Lokasi...'
                            />
                        </div>
                        <div className='w-full'>
                            <Search
                                placeholder='Cari Mata Pelajaran...'
                            />
                        </div>
                        <div className='w-full flex justify-end items-center'>
                            <button
                                className='bg-primary-200 text-white rounded-md px-2 py-1 hover:opacity-70'
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                )
            }
            {
                search && (
                    <div className='hidden lg:flex gap-4'>
                        <div className='w-6/12'>
                            <Search
                                placeholder='Cari Lokasi...'
                            />
                        </div>
                        <div className='w-4/12'>
                            <Search
                                placeholder='Cari Mata Pelajaran...'
                            />
                        </div>
                        <div className='flex items-center'>
                            <button
                                className='bg-primary-200 text-white rounded-md px-2 py-1 hover:opacity-70'
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                )
            }
            <div className='hidden lg:flex justify-center items-center gap-7'>
                <div className='w-28 p-2 bg-primary-200 rounded-2xl cursor-pointer hover:bg-opacity-80'>
                    <p className='text-center text-white text-sm font-semibold' onClick={() => router.push('/list-tutor')}>
                        Tutor Kami
                    </p>
                </div>
                <div className='w-28 p-2 bg-primary-200 rounded-2xl cursor-pointer hover:bg-opacity-80'>
                    <p className='text-center text-white text-sm font-semibold'
                        onClick={() => router.push('/faq')}
                    >
                        FAQ
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainHeader