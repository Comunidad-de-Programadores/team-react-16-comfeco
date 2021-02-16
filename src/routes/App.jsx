import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthForm from "../pages/AuthForm/AuthForm";
import ForgotPass from "../pages/ForgotPass/ForgotPass";
import Home from "../pages/Home/Home";
import Privacy from "../pages/Privacy/Privacy";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AuthContext from "../hooks/AuthContext";
import authReducer from "../hooks/authReducer";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={AuthForm}
            isAuth={user.logged}
          />

          <PrivateRoute
            exact
            path="/home"
            component={Home}
            isAuth={user.logged}
          />
          <Route exact path="/politicas-de-privacidad" component={Privacy} />
          <Route exact path="/recuperar-contraseña" component={ForgotPass} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
