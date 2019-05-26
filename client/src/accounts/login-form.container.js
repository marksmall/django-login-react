import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "./accounts.actions";

import LoginForm from "./login-form.component";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
