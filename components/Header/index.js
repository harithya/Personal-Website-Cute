import React, { useState } from 'react'
import Container from '../Layout/Container'


const Item = ({ children, href }) => {
    return (
        <a href={href} className='hover:font-medium lg:text-base text-sm'>{children}</a>
    )
}

const Navigation = ({ className }) => {
    return (
        <nav className={`lg:space-x-10 ${className} `}>
            <Item href={"#"}>Home</Item>
            <Item href={"#about"}>About</Item>
            <Item href={"#work"}>Work</Item>
            <Item href={"#contact"}>Contact</Item>
        </nav>
    )
}
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='sticky top-0 z-50 bg-[#f9f7f5]  dark:bg-gray-700  right-0 left-0'>
            <Container className={`lg:py-8 py-6 flex  justify-between flex-row  items-center  ${isOpen && 'border-b-2 border-gray-600'} lg:border-0`}>
                <h5 className='font-medium text-lg'>Della Rianty Febrian</h5>
                <div className='block'>
                    <button className='lg:hidden block' onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <Navigation className={"hidden lg:block"} />
                </div>
            </Container>
            <Container className={`py-5  lg:hidden ${isOpen ? "block" : "hidden"}`}>
                <Navigation className={"flex flex-col space-y-6"} />
            </Container>
        </div>
    )
}

export default Header