import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import sponsorsList from '../data'
import { ContentCarousel } from '../ContentCarousel';

import '../Carousel.scss';

export const CarouselSponsors = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return (
        <div className="carousel">
            <h2 className='slider_title'>Patrocinadores</h2>
            <Slider { ...settings }>
                {
                    sponsorsList.map( sponsor => (
                        <ContentCarousel info={ sponsor } key={ sponsor.id } />
                    ))
                }
            </Slider>
            <button className='support'>Apoyar</button>
        </div>
    )
}