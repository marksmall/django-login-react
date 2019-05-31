import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { confirmChangePassword } from './accounts.actions';

import PasswordResetConfirmForm from './password-reset-confirm-form.component';

const mapStateToProps = (state, props) => ({ props });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      confirmChangePassword
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordResetConfirmForm);
