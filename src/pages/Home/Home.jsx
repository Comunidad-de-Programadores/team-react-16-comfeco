import "./Home.scss";
import CountDown from "../../components/CountDown/CountDown";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
// import swal from "sweetalert";
import Communities from "../../components/Communities/Communities";
import TittleDescription from "../../components/TittleDescription/TittleDescription";
import { CarouselCreators } from "../../components/Carousels/Creators/CarouselCreators";
import { CarouselSponsors } from "../../components/Carousels/Sponsors/CarouselSponsors";

const Home = () => {
  // swal(
  //   "¡Bienvenido a Comfeco!",
  //   "Hola, ahora eres miembro de esta gran comunidad."
  // );
  return (
    <LayoutHome>
      <div className="container">
        <TittleDescription />
        <div className="container--center">
          <div className="container--left">
            <div className="carrousel--creators">
              <CarouselCreators />
            </div>
            <div className="carrousel--sponsors">
              <CarouselSponsors />
            </div>
          </div>
          <div className="container--right">
            <div className="count-down">
              <CountDown />
            </div>
            <div className="communities">
              <Communities />
            </div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default Home;
