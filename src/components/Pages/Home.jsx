import { useContext } from "react";
import { useHistory } from "react-router-dom";
import style from "../../assets/Home.module.css";
import styles from "../Form/AuthForm.module.css";
import { AuthContext } from "../../hooks/AuthContext";
import { types } from "../../types";

export const Home = () => {
  const { user, dispatch } = useContext(AuthContext);
  const { username } = user;
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: types.logout,
    });
    history.push("/");
  };
  return (
    <div className={style.container}>
      <h1>Home</h1>
      <h2>
        Hola <span>{username}</span> bienvenido a <span>Cofemco</span>
      </h2>
      <button
        type="submit"
        className={`${styles.btn} ${styles.solid}`}
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};
