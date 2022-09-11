import React from 'react'
import { Accordion } from 'components'

const FAQuestion = () => {
    const accordionData = [
        {
            title: "Section 1",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
        },
        {
            title: "Section 2",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
        },
        {
            title: "Section 3",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
        }
    ];

    return (
        <div className='w-full flex flex-col justify-start gap-4 lg:m-auto'>
            <p className='w-full bg-white p-2 font-extrabold text-primary-200 text-3xl rounded-lg'>
                Frequently Asked Question
            </p>
            <div className='w-full flex flex-col gap-4 justify-start items-center bg-white rounded-lg p-4'>
                {
                    accordionData.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default FAQuestion