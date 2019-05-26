import { sendData, JSON_HEADERS } from "../utils/http";

export const LOGIN_REQUESTED_SUCCESS = "LOGIN_REQUESTED_SUCCESS";
export const LOGIN_REQUESTED_FAILURE = "LOGIN_REQUESTED_FAILURE";
// export const VALIDATE_REGISTRATION = 'VALIDATE_REGISTRATION';

export const REGISTER_REQUESTED_SUCCESS = "REGISTER_REQUESTED_SUCCESS";
export const REGISTER_REQUESTED_FAILURE = "REGISTER_REQUESTED_FAILURE";

export const LOGOUT_REQUESTED_SUCCESS = "LOGOUT_REQUESTED_SUCCESS";
export const LOGOUT_REQUESTED_FAILURE = "LOGOUT_REQUESTED_FAILURE";

export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

const API_PREFIX = "/api/auth";
const API = {
  register: API_PREFIX + "/registration/",
  login: API_PREFIX + "/login/",
  changePassword: API_PREFIX + "/password/change/",
  resetPassword: API_PREFIX + "/password/reset/",
  logout: API_PREFIX + "/logout/"
};

/**
 * Call API with user details. If there is an problem with the
 * request, then dispatch an error action, otherwise, dispatch
 * a success action.
 *
 * @param {*} form
 */
export const register = form => async dispatch => {
  console.log("Register: ", form);
  const response = await sendData(API.register, form, JSON_HEADERS);

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;
    alert("Error registering");

    return dispatch({
      type: REGISTER_REQUESTED_FAILURE,
      error
    });
  }

  dispatch({ type: REGISTER_REQUESTED_SUCCESS });
};

/**
 * Call API with user credentials and receive a user object in response.
 * If there is an problem with the request, then dispatch an error action,
 * otherwise, dispatch a success action.
 *
 * @param {*} form
 * @param {*} callback
 */
export const login = form => async dispatch => {
  console.log("Login: ", form);
  const response = await sendData(API.login, form, JSON_HEADERS);

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;
    console.log("ERROR: ", error);
    alert("Error logging in: ", error.message);

    return dispatch({
      type: LOGIN_REQUESTED_FAILURE,
      error
    });
  }

  const user = await response.json();
  dispatch({ type: LOGIN_REQUESTED_SUCCESS, user });
};

/**
 *
 *
 * @param {*} history
 */
export const logout = history => async dispatch => {
  console.log("Logout: ", history);
  const response = await sendData(API.logout, {});

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;
    alert("Error logging out");

    return dispatch({
      type: LOGOUT_REQUESTED_FAILURE,
      error
    });
  }

  dispatch({ type: LOGOUT_REQUESTED_SUCCESS });
  history.push("/logout");
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
  console.log("CHANGE PASSWORD: ", oldPassword, newPassword);
  // const response = await sendData(API.changePassword, form, JSON_ACCEPT_HEADERS, 'PUT');

  // if (!response.ok) {
  //   const error = new Error();
  //   error.message = response.statusText;
  //   alert('Error logging in');

  //   return dispatch({
  //     type: LOGIN_REQUESTED_FAILURE,
  //     error
  //   });
  // }

  // const user = await response.json();
  // dispatch({ type: LOGIN_REQUESTED_SUCCESS, user });
  // callback();
};

export const resetPassword = form => async () => {
  console.log("REST PASSWORD FOR: ", form);
  const response = await sendData(API.resetPassword, form, JSON_HEADERS);

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;
    alert("Error resetting password: ", error.message);

    // return dispatch({
    //   type: REGISTER_REQUESTED_FAILURE,
    //   error
    // });
  }

  // dispatch({ type: REGISTER_REQUESTED_SUCCESS });
};
