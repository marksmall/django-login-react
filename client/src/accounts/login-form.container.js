import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "./accounts.actions";

import LoginForm from "./login-form.component";

const mapStateToProps = (state, props) => ({
  from: props.location.state ? props.location.state.from || { from: { pathname: "/" } } : null
});

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
