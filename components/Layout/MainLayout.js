import React from 'react'
import SwitchMode from '../Switch/SwitchMode'

function MainLayout({ children }) {
    return (
        <div>
            {children}
            <SwitchMode />
        </div>
    )
}

export default MainLayout