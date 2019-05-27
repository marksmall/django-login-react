const validate = values => {
  let errors = {};

  if (!values.old_password) {
    errors.old_password = "Old Password is required";
  } else if (values.old_password.length < 5) {
    errors.old_password = `Old Password ${values.old_password} is too short`;
  } else if (!values.new_password1) {
    errors.new_password1 = "New Password is required";
  } else if (values.new_password1.length < 5) {
    errors.new_password1 = `New Password ${values.new_password1} is too short`;
  } else if (!values.new_password2) {
    errors.new_password2 = "New Password is required";
  } else if (values.new_password2.length < 5) {
    errors.new_password2 = `New Password ${values.new_password2} is too short`;
  } else if (values.new_password2 !== values.new_password1) {
    errors.new_password2 = `Password ${values.new_password1} doesn't match ${values.new_password2}`;
  }

  return errors;
};

export default validate;
