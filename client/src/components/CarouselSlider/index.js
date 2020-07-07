import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function CarouselSlider() {

    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/28/2017/10/30043452/Blog-Banner-Image-1000x300-Arapahoe-Libraries.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.tryazon.com/wp-content/uploads/2018/01/KNEX-Timeline-image-1000-x-300.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dqm2hs0fb20qv.cloudfront.net/wp-content/uploads/sites/2/2019/11/21134501/For-the-Kids-1000x300.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )


}