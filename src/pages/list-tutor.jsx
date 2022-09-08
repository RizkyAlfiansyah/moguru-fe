import { Header, MainHeader, Tutors } from 'layout'
import React from 'react'

const Home = () => {
    return (
        <div className='min-h-screen bg-primary-100 overflow-hidden'>
            <div className="w-full p-2 lg:px-8 lg:py-4 bg-white shadow-xl sticky top-0 z-50">
                <MainHeader
                    search={true}
                />
            </div>
            <div className='w-full p-2 lg:px-24 lg:pt-8'>
                <Tutors />
            </div>
        </div>
    )
}

export default Home