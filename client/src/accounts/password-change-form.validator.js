const validate = values => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = `Email address ${values.email} is invalid`;
  }

  if (!values.oldPassword) {
    errors.oldPassword = "Old Password is required";
  } else if (values.oldPassword.length < 5) {
    errors.oldPassword = `Old Password ${values.oldPassword} is too short`;
  } else if (!values.newPassword) {
    errors.newPassword = "New Password is required";
  } else if (values.newPassword.length < 5) {
    errors.newPassword = `New Password ${values.newPassword} is too short`;
  }

  return errors;
};

export default validate;
