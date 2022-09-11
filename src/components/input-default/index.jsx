import React from 'react'

const Input = ({
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full border-primary-200 border-2 rounded-lg p-1 px-2 focus:border-primary-200 focus:ring-primary-200 hover:border-primary-200 focus:outline-none placeholder:text-slate-400 placeholder:text-sm"
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input