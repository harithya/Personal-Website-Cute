import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../Layout/Container';

const url = [
    "https://jemi.so/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fjemi-testing.appspot.com%2Fo%2Fuploads%252FROScuygP9UcsPSVR4alsUtNyPk92%252Fegberllkkhkucemsll25q-Beige_2002.jpg%3Falt%3Dmedia%26token%3D51b0f41d-f7dc-4003-819d-8f380d730310&w=1920&q=75",
    "https://jemi.so/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fjemi-testing.appspot.com%2Fo%2Fuploads%252FROScuygP9UcsPSVR4alsUtNyPk92%252Fofn3gj9qc87y8ij8q23a8-Inspirational%2520art%2520work.jpg%3Falt%3Dmedia%26token%3Dc90d2aea-c999-461a-b2f5-d376d3d29399&w=1920&q=75",
    "https://i.pinimg.com/originals/01/f2/9a/01f29a9716b008921886f948b7a0f07f.jpg",
    "https://i.pinimg.com/736x/24/43/52/2443528efe4b63988be24ab5fe5ada1e.jpg"
]

const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    return (
        <button
            {...props}
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
            className={`absolute lg:right-[-50px] right-[-20px] top-2/4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button >
    )
}

const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    return (
        <button
            {...props}
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
            className={`absolute lg:left-[-50px] left-[-20px] top-2/4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
        </button >
    )
}
const Carousel = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "0px",
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div>
            <Container>
                <Slider {...settings} >
                    {url.map((val, key) =>
                        <div key={`slider-${key}`} className='py-5 px-8'>
                            <img src={val} className="lg:h-80 h-72 lg:w-80 w-full object-cover" />
                        </div>)}
                </Slider>
            </Container>
        </div>
    )
}

export default Carousel