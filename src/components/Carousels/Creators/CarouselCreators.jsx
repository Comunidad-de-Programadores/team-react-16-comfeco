import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { teamLeaders } from '../../../database/teamLeaders'
import { ContentCarousel } from '../ContentCarousel'

import '../Carousel.scss';

export const CarouselCreators = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return (
        <div className='carousel'>
            <h2 className='slider_title'>Creadores</h2>
            <Slider { ...settings }>
                {
                    teamLeaders.map( creator => (
                        <ContentCarousel info={ creator } key={ creator.id } />
                    ))
                }
            </Slider>
        </div>
    )
}
