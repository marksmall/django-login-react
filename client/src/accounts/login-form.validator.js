const validate = values => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 3) {
    errors.username = `Username ${values.email} is too short`;
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = `Email address ${values.email} is invalid`;
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = `Password ${values.password} is too short`;
  }

  return errors;
};

export default validate;
