import { FAQuestion, Header, MainHeader, SelectedTutors, Tutors } from 'layout'
import React from 'react'

const FAQ = () => {
    return (
        <>
            <Header title="Tutor" description="This is the home page" />
            <div className='min-h-screen bg-primary-100'>
                <div className="w-full p-2 lg:px-8 lg:py-4 bg-white shadow-xl sticky top-0 z-50">
                    <MainHeader
                        search={true}
                    />
                </div>
                <div className='w-full h-80 justify-center items-start flex p-2 lg:px-24 m-auto'>
                    <FAQuestion />
                </div>
            </div>
        </>
    )
}

export default FAQ