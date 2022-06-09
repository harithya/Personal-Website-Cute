import React from 'react'
import Header from '../Header'
import SwitchMode from '../Switch/SwitchMode'
import MetaSeo from '../MetaSeo'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <MetaSeo
                keyword="Della Rianty,Unsoed,Universitas Jendral Sudirman, Mahasiswa Ilmu Gizi, Della Rianty Febrian"
                title={`Hey there! I'm Della Rianty Febrian 👋 I'm a student and also a nutritionist,`}
                description={`I'm a student and also a nutritionist, anime and manga are things I like, but there are some things I hate including peanuts. You can contact me in many ways, I will be very happy if you contact me 🙌`}
            />
            {children}
            <SwitchMode />
        </div>
    )
}

export default MainLayout