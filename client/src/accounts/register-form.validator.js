const validate = values => {
  let errors = {};

  if (!values.username) {
    errors.username = "username is required";
  } else if (values.username.length < 3) {
    errors.username = `username ${values.username} is too short`;
  } else if (values.username.length > 15) {
    errors.username = `username ${values.username} is too long`;
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = `Email address ${values.email} is invalid`;
  }

  if (!values.password1) {
    errors.password1 = "Password is required";
  } else if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password1.length < 5) {
    errors.password1 = `Password ${values.password1} is too short`;
  } else if (values.password2.length < 5) {
    errors.password2 = `Password ${values.password2} is too short`;
  } else if (values.password2 !== values.password1) {
    errors.password2 = `Password ${values.password1} doesn't match ${values.password2}`;
  }

  return errors;
};

export default validate;
