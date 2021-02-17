import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ isAuth, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      component={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};
PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
