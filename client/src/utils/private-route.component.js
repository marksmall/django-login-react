import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // console.log('PRIVATE: ', user, props);
      if (user && !user.isValidated) {
        return (
          <Redirect
            to="/validate"
            // to={{
            //   pathname: '/validate',
            //   state: { from: rest.location }
            // }}
          />
        );
      } else if (user && user.isValidated) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: rest.location }
            }}
          />
        );
      }
      // return user ? (
      //   <Component {...props} />
      // ) : (
      //   <Redirect to={{ pathname: '/login', state: { from: rest.location } }} />
      // );
    }}
  />
);

PrivateRoute.propTypes = {
  user: PropTypes.object
};

export default PrivateRoute;
