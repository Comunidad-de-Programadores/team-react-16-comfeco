import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContentCarousel } from "../ContentCarousel";
import { sponsors } from "../../../database/sponsors";

import "../Carousel.scss";

export const CarouselSponsors = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel">
      <h2 className="slider_title">Patrocinadores</h2>
      <Slider {...settings}>
        {sponsors.map((sponsor) => (
          <ContentCarousel info={sponsor} key={sponsor.id} />
        ))}
      </Slider>
      <button className="support">Apoyar</button>
    </div>
  );
};
