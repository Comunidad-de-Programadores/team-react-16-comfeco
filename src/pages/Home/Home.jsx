import { useContext } from "react";
import { useHistory } from "react-router-dom";
import style from "./Home.module.scss";
import styles from "../../assets/style/Main.module.scss";
import AuthContext from "../../hooks/AuthContext";
import { types } from "../../types";
import TittleDescription from "../../components/TittleDescription/TittleDescription";
import CountDown from "../../components/CountDown/CountDown";
import LayoutHome from "../../components/LayoutHome/LayoutHome";

const Home = () => {
  const { user, dispatch } = useContext(AuthContext);
  var data;
  if (user.username != null) {
    data = user.username;
  } else {
    data = user.email;
  }
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: types.logout,
    });
    history.push("/");
  };

  return (
    <LayoutHome>
      <div className={style.container}>
        <TittleDescription />
        {/* <h1>¡Bienvenido a Comfeco!</h1>
        <h2>
          Hola <span>{data}</span> ahora eres miembro de esta gran comunidad.
        </h2>
        <button
          type="submit"
          className={`${styles.btn} ${styles.solid}`}
          onClick={() => logout()}
        >
          Salir
        </button> */}
        <div className="container--center">
          <div className="container--left">
            <div className="carrousel--creators">hola</div>
            <div className="carrousel--sponsors">hola3</div>
          </div>
          <div className="container--right">
            <div className="count-down">
              <CountDown />
            </div>
            <div className="communities">hola5</div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default Home;
