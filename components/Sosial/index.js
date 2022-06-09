import React from 'react'

function Sosial({ title, icon, ...props }) {
    return (
        <button {...props} className=' bg-white dark:bg-gray-600 py-5 rounded-full hover:shadow-sm relative hover:scale-105 transition-all mb-5'>
            {icon}
            <span className='font-medium'>{title}</span>
        </button>
    )
}

export default Sosial