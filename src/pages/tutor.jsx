import { Header, MainHeader, SelectedTutors, Tutors } from 'layout'
import React from 'react'

const Tutor = () => {
    return (
        <>
            <Header title="Tutor" description="This is the home page" />
            <div className='min-h-screen bg-primary-100 md:overflow-hidden'>
                <div className="w-full p-2 lg:px-8 lg:py-4 bg-white shadow-xl sticky top-0 z-50">
                    <MainHeader
                        search={true}
                    />
                </div>
                <div className='w-full md:h-80 justify-center items-center flex p-2 lg:px-24'>
                    <SelectedTutors />
                </div>
            </div>
        </>
    )
}

export default Tutor