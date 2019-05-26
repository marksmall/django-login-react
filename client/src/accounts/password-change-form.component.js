import React from "react";
import PropTypes from "prop-types";

import useForm from "../hooks/useForm";
import validate from "./password-change-form.validator";

import Button from "../ui/button.component";

import styles from "./password-change-form.module.css";

const PasswordChangeForm = ({ changePassword }) => {
  const { handleChange, handleSubmit, reset, values, errors } = useForm(onSubmit, validate);

  function onSubmit() {
    console.log("Changing password: ", values);
    changePassword(values);
  }

  console.log("VALUES: ", values, " ERRORS: ", errors);

  return (
    <div className={styles["password-change-form-container"]}>
      <form className={styles["password-change-form"]} onSubmit={handleSubmit}>
        <h3>Change Password</h3>

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
            className={`${styles.input} ${errors.oldPassword ? styles.error : ""}`}
            type="password"
            name="oldPassword"
            onChange={handleChange}
            value={values.oldPassword || ""}
            required
          />
          <em className={styles.required}>(Required)</em>
        </div>
        {errors.oldPassword && <p className={styles["error-message"]}>{errors.oldPassword}</p>}

        <div className={styles["form-row"]}>
          <label className={styles.label}>Password (Comfirm): </label>
          <input
            className={`${styles.input} ${errors.newPassword ? styles.error : ""}`}
            type="password"
            name="newPassword"
            onChange={handleChange}
            value={values.newPassword || ""}
            required
          />
          <em className={styles.required}>(Required)</em>
        </div>
        {errors.newPassword && <p className={styles["error-message"]}>{errors.newPassword}</p>}

        <div className={styles.buttons}>
          <Button
            // type="submit"
            className={styles.button}
            onClick={reset}
            disabled={Object.keys(values).length === 0}
          >
            Reset
          </Button>

          <Button
            type="submit"
            className={styles.button}
            disabled={Object.keys(errors).length > 0 || Object.keys(values).length === 0}
          >
            Change Password
          </Button>
        </div>
      </form>
    </div>
  );
};

PasswordChangeForm.propTypes = {
  changePassword: PropTypes.func.isRequired
};

export default PasswordChangeForm;
