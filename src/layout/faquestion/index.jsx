import React, { useState } from 'react'
import Profile from 'assets/img/profile/profile.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Input } from 'components'
import ArrowDownWhite from 'assets/icons/arrow-down-white.svg'

const FAQuestion = () => {

    const router = useRouter()
    const [show, setShow] = useState(false)

    return (
        <div className='w-full flex flex-col justify-start gap-4 lg:m-auto'>
            <p className='w-full bg-white p-2 font-extrabold text-primary-200 text-3xl rounded-lg'>
                Frequently Asked Question
            </p>
            <div className='w-full flex flex-col gap-4 justify-start items-center bg-white rounded-lg p-4'>
                {
                    Array(5).fill(0).map((_, index) => (
                        <div className='w-full p-2 px-6 bg-primary-200 rounded-lg flex flex-col gap-2'>
                            <div className='w-full flex justify-between'>
                                <p className='w-full text-white font-semibold'>
                                    What is Moguru ?
                                </p>
                                <div className='w-4 h-4 cursor-pointer flex justify-center items-center m-auto' onClick={() => setShow((prev) => !prev)}>
                                    <Image
                                        src={ArrowDownWhite}
                                        alt='arrow-down-white'
                                    />
                                </div>
                            </div>
                            {
                                show && (
                                    <p className='w-full text-justify font-normal text-white'>
                                        Moguru is a platform that connects students and tutors. We provide a variety of tutors for various subjects and levels. We also provide a variety of learning methods, such as online, offline, and blended learning.
                                    </p>
                                )
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default FAQuestion