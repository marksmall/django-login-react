import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { history } from "./store";
import { getUser } from "./accounts/accounts.selector";
import { logout, fetchUser } from "./accounts/accounts.actions";

import App from "./app.component";

const mapStateToProps = state => ({ user: getUser(state), history });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUser, logout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
