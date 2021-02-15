import "../assets/style/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Privacy from "../pages/Privacy/Privacy";
import Login from "../pages/Login/Login";
import RecoverPass from "../pages/RecoverPass/RecoverPass";
import Register from "../pages/Register/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/privacy-policy" component={Privacy} />
            <Route path="/recover-pass" component={RecoverPass} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
