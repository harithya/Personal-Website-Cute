import React from 'react'

function Section({ children, className }) {
    return (
        <div data-aos="fade-up" className={`bg-peach-500/50 dark:bg-gray-700 w-full py-24 ${className}`}>{children}</div>
    )
}

export default Section