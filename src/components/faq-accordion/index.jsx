import React, { useState } from 'react'
import ArrowDownWhite from 'assets/icons/arrow-down-white.svg'
import Image from 'next/image'

const Accordion = ({
    title,
    content,
}) => {
    const [show, setShow] = useState(false)

    return (
        <div className='w-full p-2 px-6 bg-primary-200 rounded-xl flex flex-col gap-2 cursor-pointer hover:shadow-lg' onClick={() => setShow(!show)}>
            <div className='w-full flex justify-between'>
                <p className='w-full text-white font-semibold'>
                    {title}
                </p>
                <div className={`w-4 h-4 flex justify-center items-center m-auto ${show && 'rotate-180'}`}>
                    <Image
                        src={ArrowDownWhite}
                        alt='arrow-down-white'
                    />
                </div>
            </div>
            {
                show && (
                    <p className='w-full text-justify font-normal text-white'>
                        {content}
                    </p>
                )
            }
        </div>
    )
}

export default Accordion