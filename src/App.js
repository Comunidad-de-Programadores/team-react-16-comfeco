import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthForm } from "./components/Pages/AuthForm";
import { ForgotPassword } from "./components/Pages/ForgotPassword";
import { Home } from "./components/Pages/Home";
import { Privacity } from "./components/Pages/Privacity";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { PublicRoute } from "./components/routes/PublicRoute";
import { AuthContext } from "./hooks/AuthContext";
import { authReducer } from "./hooks/authReducer";

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
          <Route exact path="/politicas-de-privacidad">
            <Privacity />
          </Route>
          <Route exact path="/recuperar-password">
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
