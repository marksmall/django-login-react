import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { history } from './store';
import { getUser } from './accounts/accounts.selector';
import { logout, fetchUser } from './accounts/accounts.actions';

import { getThemes, getSelectedTheme } from './theming/theming.selector';
import { selectTheme } from './theming/theming.actions';

import App from './app.component';

const mapStateToProps = state => ({
  user: getUser(state),
  history,
  themes: getThemes(state),
  selectedTheme: getSelectedTheme(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUser, logout, selectTheme }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
