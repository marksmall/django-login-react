import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { history } from "./store";
import { getUser } from "./accounts/accounts.selector";
import { logout } from "./accounts/accounts.actions";

import App from "./app.component";

const mapStateToProps = state => ({ user: getUser(state), history });

const mapDispatchToProps = dispatch => bindActionCreators({ logout: logout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
