import React from "react";
import PropTypes from "prop-types";
import { Link, Route, Switch } from "react-router-dom";

import PrivateRoute from "./utils/private-route.component";

import LoginFormContainer from "./accounts/login-form.container";
import RegisterFormContainer from "./accounts/register-form.container";
import PasswordResetContainer from "./accounts/password-reset-form.container";
import PasswordChangeContainer from "./accounts/password-change-form.container";

import styles from "./app.module.css";

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

const App = ({ user, history, login, register, logout }) => {
  console.log("USER: ", user);
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <ul className={styles.menu}>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          {!user && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <li>
              <button onClick={() => logout(history)} data-cy="logout">
                Logout
              </button>
            </li>
          )}
        </ul>
      </header>

      <main className={styles.main}>
        <Switch>
          <Route path="/public" component={Public} />
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/password/reset" user={user} component={PasswordResetContainer} />
          <PrivateRoute exact path="/protected" user={user} component={Protected} />
          <PrivateRoute exact path="/password/change" user={user} component={PasswordChangeContainer} />
        </Switch>
        {/* <LoginForm /> */}
      </main>

      <footer className={styles.footer}>This is the footer</footer>
    </div>
  );
};

App.propTypes = {
  user: PropTypes.object
};

export default App;
