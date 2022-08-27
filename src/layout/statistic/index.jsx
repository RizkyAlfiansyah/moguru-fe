import React, { useState } from 'react'
import AboutUsIllustration from 'assets/img/landing-page/about-us-illustration.png'
import Image from 'next/image'
import ArrowDownSVG from 'assets/icons/arrow-down.svg'

const Statistic = () => {
    const [select, setSelect] = useState(false)

    const data = [
        'Tolotoli',
        'Makassar',
        'Bone',
        'Gowa',
        'Takalar',
        'Maros',
    ]

    return (
        <div className='w-full p-2 flex flex-col gap-2 py-24 border-b-2'>
            <p className='w-full text-start font-bold text-4xl'>Statistic</p>
            <div className='w-full flex flex-wrap justify-between items-center gap-2'>
                <div className='w-3/12 flex flex-col p-4 gap-5 justify-start items-center '>
                    <div className='bg-primary-300 shadow-xl rounded-lg'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-3xl font-extrabold'>
                        Jumlah Tutor
                    </p>
                </div>
                <div className='w-3/12 flex flex-col p-4 gap-5 justify-start items-center '>
                    <div className='bg-primary-300 shadow-xl rounded-lg'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-3xl font-extrabold'>
                        Mata Telajaran
                    </p>
                </div>
                <div className='w-3/12 flex flex-col p-4 gap-5 justify-start items-center '>
                    <div className='bg-primary-300 shadow-xl rounded-lg'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-3xl font-extrabold'>
                        Kota
                    </p>
                </div>
            </div >
        </div>
    )
}

export default Statistic