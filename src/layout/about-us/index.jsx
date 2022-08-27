import React, { useState } from 'react'
import AboutUsIllustration from 'assets/img/landing-page/about-us-illustration.png'
import Image from 'next/image'
import ArrowDownSVG from 'assets/icons/arrow-down.svg'

const AboutUs = () => {
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
            <p className='w-full text-start font-bold text-4xl'>About Us</p>
            <div className='w-full flex flex-wrap justify-between items-center bg-blue-500 shadow-lg rounded-lg pr-8'>
                <div className='w-5/12 flex flex-col gap-7 justify-start items-center'>
                    <Image
                        src={AboutUsIllustration}
                        alt='about-us-illustration'

                    />
                </div>
                <div className='w-6/12 flex flex-col justify-start items-start text-white'>
                    <p className='text-xl text-justify font-thin leading-7 tracking-wide'>
                        Moguru adalah wadah untuk menemukan teman belajar atau yang kami sebut sebagai Tutor yang sesuai dengan keinginan calon murid diluar dari metode belajar pendidikan formal serta dapat mengembangkan keahlian para calon murid. Moguru hadir dalam bentuk yang berbeda.
                    </p>
                    <p className='text-xl text-justify font-thin leading-7 tracking-wide'>
                        Moguru memungkinkan tersedianya ratusan Tutor sebagai teman belajar yang dapat terhubung dengan ratusan hingga ribuan calon murid di seluruh Indonesa dengan system belajar online maupun offline sesuai dengan keinginan calon murid.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs