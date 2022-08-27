import React, { useState } from 'react'
import HeroIllustration from 'assets/img/landing-page/hero-section.png'
import Image from 'next/image'
import ArrowDownSVG from 'assets/icons/arrow-down.svg'

const Hero = () => {

    const [select, setSelect] = useState(false)

    const data = [
        'Tolitoli',
        'Makassar',
        'Bone',
        'Gowa',
        'Takalar',
        'Maros',
    ]

    return (
        <div className='w-full h-auto px-36 flex gap-10 justify-between items-center relative bg-black bg-opacity-50 backdrop-blur-sm'>
            <div className='w-5/12 flex flex-col gap-7 justify-start items-start'>
                <p className='text-5xl font-extrabold leading-20 tracking-tight text text-primary-200 drop-shadow-xl'>
                    Selamat Datang Di Moguru
                </p>
                <p className='text-xl text-white font-thin leading-7 tracking-wide drop-shadow-2xl'>
                    Tempat yang tepat untuk mencari guru
                </p>
                <div className='w-full py-3 px-4 bg-white shadow-md rounded-lg'>
                    <p className='text-xl font-thin leading-7 tracking-wide'>
                        Mata Pelajaran
                    </p>
                </div>
                <div className='w-full flex justify-between gap-2 relative'>
                    <div className='w-8/12 py-3 px-4 bg-white shadow-md rounded-lg relative flex justify-between items-center cursor-pointer ' onClick={() => setSelect((prev) => !prev)} >
                        <p className='text-xl font-thin leading-7 tracking-wide'>
                            {data[0]}
                        </p>
                        <div className={`w-5 h-5 ${select && 'rotate-180'}`}>
                            <Image
                                src={ArrowDownSVG}
                                alt='arrow down'
                            />
                        </div>
                    </div>
                    <button className='w-4/12 py-3 px-4 bg-primary-200 shadow-md rounded-lg relative flex justify-center items-center cursor-pointer hover:bg-opacity-90' >
                        <p className='text-center text-white text-xl font-thin'>
                            Cari
                        </p>
                    </button>
                    {
                        select && (
                            <div className='w-8/12 absolute top-16 rounded-lg shadow-md bg-white pt-5 px-2'>
                                <ul className='flex flex-col justify-start items-start gap-1 h-36 overflow-auto no-scrollbar'>
                                    {data.map((item, index) => (
                                        <li key={index} className='w-full px-2 rounded-md cursor-pointer hover:bg-slate-100'
                                            onClick={() => setSelect(false)}
                                        >{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='w-5/12 flex flex-col gap-7 justify-start items-center'>
                <Image
                    src={HeroIllustration}
                    alt='hero-illustration'

                />
            </div>
        </div >
    )
}

export default Hero