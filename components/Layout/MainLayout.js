import React from 'react'
import Header from '../Header'
import SwitchMode from '../Switch/SwitchMode'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <SwitchMode />
        </div>
    )
}

export default MainLayout