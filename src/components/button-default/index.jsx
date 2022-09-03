import React from 'react'

const Button = ({ title }) => {
    return (
        <button className='w-4/12 py-3 px-4 bg-primary-200 shadow-md rounded-lg relative flex justify-center items-center cursor-pointer hover:bg-opacity-90' >
            <p className='text-center text-white text-xl font-thin'>
                {title}
            </p>
        </button>
    )
}

export default Button