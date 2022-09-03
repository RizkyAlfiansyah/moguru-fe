import React, { useState } from 'react'
import AboutUsIllustration from 'assets/img/landing-page/about-us-illustration.png'
import Image from 'next/image'
import ArrowDownSVG from 'assets/icons/arrow-down.svg'

const Contacts = () => {
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
        <div className='w-full p-2 flex flex-col gap-2 pt-4 lg:pt-12 lg:px-14'>
            <p className='w-full text-start font-bold text-xl lg:text-4xl'>Contact Us</p>
            <div className='w-full flex flex-col lg:flex-row justify-around items-center gap-2'>
                <div className='w-full lg:w-2/12 flex flex-col lg:p-4 gap-5 justify-start lg:items-center'>
                    <div className='hidden lg:block bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-xs lg:text-lg font-extrabold'>
                        +62 xxx xxxx xxxx
                    </p>
                </div>
                <div className='w-full lg:w-2/12 flex flex-col lg:p-4 gap-5 justify-start lg:items-center '>
                    <div className='hidden lg:block bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-xs lg:text-lg font-extrabold'>
                        @moguruIndonesia
                    </p>
                </div>
                <div className='w-full lg:w-2/12 flex flex-col lg:p-4 gap-5 justify-between lg:items-center'>
                    <div className='hidden lg:block bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-xs lg:text-lg font-extrabold'>
                        moguruIndonesia@gmail.com
                    </p>
                </div>
            </div >
        </div>
    )
}

export default Contacts