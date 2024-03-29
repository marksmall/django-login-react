import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import PrivateRoute from './utils/private-route.component';

import RegisterFormContainer from './accounts/register-form.container';
import AccountActivationContainer from './accounts/account-activation-form.container';
import LoginFormContainer from './accounts/login-form.container';
import PasswordResetContainer from './accounts/password-reset-form.container';
import PasswordChangeContainer from './accounts/password-change-form.container';
import UpdateUserContainer from './accounts/update-user-form.container';
import PasswordResetDone from './accounts/password-reset-done.component';
import PasswordResetConfirmContainer from './accounts/password-reset-confirm-form.container';
// import NotFound from "./utils/not-found.component";
import ThemeSelector from './theming/theme-selector.component';
import AccountMenuButton from './accounts/account-menu-button.component';

import styles from './app.module.css';

const UserList = lazy(() => import('./accounts/admin/user-list.container'));
const Admin = lazy(() => import('./accounts/admin/admin.container'));

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

const App = ({ user, fetchUser, history, logout, selectedTheme, themes, selectTheme }) => {
  console.log('Something');
  // If page refreshed, ensure we try to retrieve the logged in user.
  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user, fetchUser]);

  return (
    <div className={`${styles.app} ${styles[selectedTheme.value]}`}>
      <NotificationContainer />
      <header className={styles.header}>
        <ul className={styles.nav}>
          <li>
            <Link className={styles['nav-item']} to="/public">
              Public Page
            </Link>
          </li>
          <li>
            <Link className={styles['nav-item']} to="/protected">
              Protected Page
            </Link>
          </li>
          {user && (
            <li>
              <Link className={styles['nav-item']} to="/admin">
                Admin
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link className={styles['nav-item']} to="/register">
                Register
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link className={styles['nav-item']} to="/login">
                Login
              </Link>
            </li>
          )}
          <li>
            <ThemeSelector themes={themes} selectedTheme={selectedTheme} selectTheme={selectTheme} />
          </li>
          {user && (
            <li>
              <AccountMenuButton user={user} logout={() => logout(history)} />
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
          <Route path="/reset_password_done" component={PasswordResetDone} />
          <Route path="/reset/:uid/:token/" component={PasswordResetConfirmContainer} />
          <Route exact path="/account/confirm-email/:key" user={user} component={AccountActivationContainer} />
          <PrivateRoute exact path="/protected" user={user} component={Protected} />
          <PrivateRoute exact path="/password/change" user={user} component={PasswordChangeContainer} />
          <PrivateRoute exact path="/user/update" user={user} component={UpdateUserContainer} />
          <Suspense fallback={<h3>Admin Loading...</h3>}>
            <PrivateRoute exact path="/admin" user={user} component={Admin} />
            <PrivateRoute exact path="/users" user={user} component={UserList} />
            <PrivateRoute exact path="/others" user={user} component={UserList} />
          </Suspense>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </main>

      <footer className={styles.footer}>This is the footer</footer>
    </div>
  );
};

App.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  themes: PropTypes.array.isRequired,
  selectedTheme: PropTypes.object.isRequired,
  selectTheme: PropTypes.func.isRequired
};

export default App;
