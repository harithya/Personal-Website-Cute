import Image from 'next/image'
import React from 'react'
import { Carousel, Container, Section, Sosial, SosialSection, Work } from '../components'

function Home() {
  return (
    <div className='w-full container'>
      <Section>
        <Carousel />
      </Section>
      <section data-aos="fade-up">
        <Container className={"py-20"}>
          <div className='flex justify-start gap-12 items-center lg:flex-row flex-col'>
            <Image src={"/della.jpg"} height={600} width={600} objectFit="cover" />
            <div>
              <h1 className='text-xl font-medium mb-5'>Hey there! I'm Della Rianty Febrian 👋</h1>
              <p className='leading-8'>I'm a student and also a nutritionist, anime and manga are things I like, but there are some things I hate including peanuts.</p>
            </div>
          </div>
          <img data-aos="zoom-in-left" src='/della-feed.png' alt='Della Rianty Feed Instagram' className='w-full h-full mt-20' />
        </Container>
      </section>
      <Section>
        <Container>
          <h1 className='text-center text-xl font-medium mb-3'>⭐ Some of My Recent Work ⭐</h1>
          <p className='text-center mb-20'> You can contact me if you want to get the same result😊</p>
          <div data-aos="zoom-in" className='grid lg:grid-cols-3 grid-cols-2 gap-10'>
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
          </div>
        </Container>
      </Section>
      <SosialSection />

      <footer className='flex justify-center py-5'>
        <span className='mb-5 text-sm'>Copyright © 2022 <a href='https://harithya.vercel.app/' className='text-gray-800 font-medium'>Haruthya</a>. inspiration <a className='text-gray-800 font-medium' href='https://jemi.so/jesserieprieto31?referral=jp'>@jesserieprieto31</a></span>
      </footer>
    </div>
  )
}

export default Home