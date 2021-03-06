import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import useForm from "../hooks/useForm";
import validate from "./login-form.validator";

import Button from "../ui/button.component";

import styles from "./login-form.module.css";

const LoginForm = ({ login, from }) => {
  const { handleChange, handleSubmit, reset, values, errors } = useForm(onSubmit, validate);
  const [redirectToReferrer, setRedirectToReferer] = useState(false);

  function onSubmit() {
    login(values);
    setRedirectToReferer(true);
  }

  // Re-direct to originally clicked URL on successful login.
  console.log("REDIRECT TO REFERRER? ", redirectToReferrer);
  if (redirectToReferrer) {
    console.log("REDIRECT TO: ", from);
    return <Redirect to={from} />;
  }

  return (
    <div className={styles["login-form-container"]}>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h3>Log In</h3>

        {/* {console.log("WHAT THE FU")} */}

        <p>
          If you have not account, you can <Link to={"/register"}>register here</Link>
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
            className={`${styles.input} ${errors.password ? styles.error : ""}`}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <em className={styles.required}>(Required)</em>
        </div>
        {errors.password && <p className={styles["error-message"]}>{errors.password}</p>}

        <p>
          Forgotten your <Link to="/password/reset">password?</Link>
        </p>

        <div className={styles.buttons}>
          <Button className={styles.button} onClick={reset} disabled={Object.keys(values).length === 0}>
            Reset
          </Button>

          <Button
            type="submit"
            className={styles.button}
            disabled={Object.keys(errors).length > 0 || Object.keys(values).length === 0}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
