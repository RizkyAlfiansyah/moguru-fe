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
        <div className='w-full p-2 flex flex-col gap-2 pt-12 border-b-2'>
            <p className='w-full text-start font-bold text-4xl'>Contact Us</p>
            <div className='w-full flex flex-wrap justify-around items-center gap-2'>
                <div className='w-2/12 flex flex-col p-4 gap-5 justify-start items-center'>
                    <div className='bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-lg font-extrabold'>
                        +62 xxx xxxx xxxx
                    </p>
                </div>
                <div className='w-2/12 flex flex-col p-4 gap-5 justify-start items-center '>
                    <div className='bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-lg font-extrabold'>
                        @moguruIndonesia
                    </p>
                </div>
                <div className='w-2/12 flex flex-col p-4 gap-5 justify-between items-center'>
                    <div className='bg-primary-300 shadow-xl rounded-xl'>
                        <Image
                            src={AboutUsIllustration}
                            alt='about-us-illustration'
                        />
                    </div>
                    <p className='text-lg font-extrabold'>
                        moguruIndonesia@gmail.com
                    </p>
                </div>
            </div >
        </div>
    )
}

export default Contacts