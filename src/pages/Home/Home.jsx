import { useContext } from "react";
import { useHistory } from "react-router-dom";
import style from "./Home.module.scss";
import styles from "../../assets/style/Main.module.scss";
import AuthContext from "../../hooks/AuthContext";
import { types } from "../../types";
import CountDown from "../../components/CountDown/CountDown";

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
    <div className={style.container}>
      <h1>¡Bienvenido a Comfeco!</h1>
      <h2>
        Hola <span>{data}</span> ahora eres miembro de esta gran comunidad.
      </h2>
      <button
        type="submit"
        className={`${styles.btn} ${styles.solid}`}
        onClick={() => logout()}
      >
        Salir
      </button>
      <CountDown />
    </div>
  );
};

export default Home;
