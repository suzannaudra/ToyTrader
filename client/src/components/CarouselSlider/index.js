import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function CarouselSlider() {

    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1000x300"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1000x300"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1000x300"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )


}