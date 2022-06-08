import Image from 'next/image'
import React from 'react'
import { Carousel, Container, Section, Sosial, Work } from '../components'

function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
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
      <section data-aos="fade-up">
        <Container className={"py-20"}>
          <h1 className='text-center text-xl font-medium mb-3'>☎️ Contact Me Anytime ☎️</h1>
          <p className='text-center mb-20'> You can contact me in many ways, I will be very happy if you contact me 🙌</p>

          <div>
            <Sosial
              title="Instagram"
              data-aos="fade-right"
              icon={<svg className='h-6 w-6 absolute left-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              } />
            <Sosial
              title="Tiktok"
              data-aos="fade-left"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 absolute left-4' viewBox="0 0 448 512">{/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
              } />
            <Sosial title="Facebook" icon={<svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 absolute left-4' viewBox="0 0 512 512">{/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>} />
            <Sosial
              title="Linked In"
              data-aos="fade-right"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 absolute left-4' viewBox="0 0 448 512">{/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              } />
          </div>
        </Container>
      </section>
      <footer className='flex justify-center py-5'>
        <span className='mb-5 text-sm'>Copyright © 2022 <a href='https://harithya.vercel.app/' className='text-gray-800 font-medium'>Haruthya</a>. inspiration <a className='text-gray-800 font-medium' href='https://jemi.so/jesserieprieto31?referral=jp'>@jesserieprieto31</a></span>
      </footer>
    </div>
  )
}

export default Home