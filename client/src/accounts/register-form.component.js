import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import useForm from "../hooks/useForm";
import validate from "./register-form.validator";

import Button from "../ui/button.component";

import styles from "./register-form.module.css";

const RegisterForm = ({ register }) => {
  const { handleChange, handleSubmit, reset, values, errors } = useForm(onSubmit, validate);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  function onSubmit() {
    register(values);
    setRedirectToLogin(true);
  }

  // Re-direct to originally clicked URL on successful login.
  if (redirectToLogin) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles["register-form-container"]}>
      <form className={styles["register-form"]} onSubmit={handleSubmit}>
        <h3>Register</h3>

        <p>
          Already have an account? <Link to={"/login"}>Log in</Link>
        </p>

        <div className={styles["form-row"]}>
          <label className={styles.label}>Username: </label>
          <input
            className={`${styles.input} ${errors.username ? styles.error : ""}`}
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username || ""}
            required
            autoFocus
          />
          <em className={styles.required}>(Required)</em>
        </div>
        {errors.username && <p className={styles["error-message"]}>{errors.username}</p>}

        <div className={styles["form-row"]}>
          <label className={styles.label}>Email Address: </label>
          <input
            className={`${styles.input} ${errors.email ? styles.error : ""}`}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          <em className={styles.required}>(Required)</em>
        </div>
        {errors.email && <p className={styles["error-message"]}>{errors.email}</p>}

        <div className={styles["form-row"]}>
          <label className={styles.label}>Password: </label>
          <input
            className={`${styles.input} ${errors.password1 ? styles.error : ""}`}
            type="password"
            name="password1"
            onChange={handleChange}
            value={values.password1 || ""}
            required
          />
          <em className={styles.required}>(Required)</em>
        </div>
        {errors.password1 && <p className={styles["error-message"]}>{errors.password1}</p>}

        <div className={styles["form-row"]}>
          <label className={styles.label}>Password (Comfirm): </label>
          <input
            className={`${styles.input} ${errors.password2 ? styles.error : ""}`}
            type="password"
            name="password2"
            onChange={handleChange}
            value={values.password2 || ""}
            required
          />
          <em className={styles.required}>(Required)</em>
        </div>
        {errors.password2 && <p className={styles["error-message"]}>{errors.password2}</p>}

        <div className={styles.buttons}>
          <Button className={styles.button} onClick={reset} disabled={Object.keys(values).length === 0}>
            Reset
          </Button>

          <Button
            type="submit"
            className={styles.button}
            disabled={Object.keys(errors).length > 0 || Object.keys(values).length === 0}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired
};

export default RegisterForm;
