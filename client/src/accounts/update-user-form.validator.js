const validate = values => {
  let errors = {};

  if (values.first_name) {
    if (values.first_name.length < 2) {
      errors.first_name = `First name ${values.first_name} is too short`;
    }
  }

  if (values.last_name) {
    if (values.last_name.length < 2) {
      errors.last_name = `Last name ${values.last_name} is too short`;
    }
  }

  return errors;
};

export default validate;
