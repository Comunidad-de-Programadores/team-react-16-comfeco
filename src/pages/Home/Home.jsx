import "./Home.scss";
import CountDown from "../../components/CountDown/CountDown";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import swal from "sweetalert";

const Home = () => {
  swal(
    "¡Bienvenido a Comfeco!",
    "Hola, ahora eres miembro de esta gran comunidad."
  );
  return (
    <LayoutHome>
      <div className="container">
        <div className="container--center">
          <div className="container--left">
            <div className="carrousel--creators">
              Carrusel Creadores de contenido
            </div>
            <div className="carrousel--sponsors">Carrusel Sponsors</div>
          </div>
          <div className="container--right">
            <div className="count-down">
              <CountDown />
            </div>
            <div className="communities">Comunidades</div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default Home;
