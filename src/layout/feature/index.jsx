import React, { useState } from 'react'
import AboutUsIllustration from 'assets/img/landing-page/about-us-illustration.png'
import Image from 'next/image'
import ArrowDownSVG from 'assets/icons/arrow-down.svg'

const Feature = () => {
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
        <div className='w-full p-2 flex flex-col gap-2 lg:py-0 py-4 lg:px-14 m-auto'>
            <p className='w-full text-start font-bold text-4xl'>Feature</p>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-2'>
                <div className='w-full lg:w-3/12 flex flex-col p-4 gap-5 justify-start items-start'>
                    <div className='bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-3xl font-extrabold'>
                        Feature A
                    </p>
                </div>
                <div className='w-full lg:w-3/12 flex flex-col p-4 gap-5 justify-start items-start'>
                    <div className='bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-3xl font-extrabold'>
                        Feature B
                    </p>
                </div>
                <div className='w-full lg:w-3/12 flex flex-col p-4 gap-5 justify-start items-center '>
                    <div className='bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-3xl font-extrabold'>
                        Feature C
                    </p>
                </div>
            </div >
        </div>
    )
}

export default Feature