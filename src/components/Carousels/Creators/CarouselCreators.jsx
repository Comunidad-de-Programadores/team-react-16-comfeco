import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import creatorsList from '../data'
import { ContentCarousel } from '../ContentCarousel'

import '../Carousel.scss';

export const CarouselCreators = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return (
        <div className="container carousel">
            <h2 className='slider_title'>Creadores</h2>
            <Slider { ...settings }>
                {
                    creatorsList.map( creator => (
                        <ContentCarousel info={ creator } key={ creator.id } />
                    ))
                }
            </Slider>
        </div>
    )
}
