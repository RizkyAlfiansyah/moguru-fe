import React from 'react'

const Search = ({
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className='w-full'>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full border-primary-200 border-2 rounded-lg p-1 px-2 focus:border-primary-200 focus:ring-primary-200 hover:border-primary-200 focus:outline-none placeholder:text-slate-400 placeholder:text-sm"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Search