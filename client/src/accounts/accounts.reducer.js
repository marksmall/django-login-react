import {
  LOGIN_REQUESTED_SUCCESS,
  LOGIN_REQUESTED_FAILURE,
  REGISTER_REQUESTED_SUCCESS,
  REGISTER_REQUESTED_FAILURE,
  // VALIDATE_REGISTRATION,
  LOGOUT_REQUESTED_SUCCESS,
  LOGOUT_REQUESTED_FAILURE
} from "./accounts.actions";

const initialState = {
  user: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null
      };
    case LOGIN_REQUESTED_FAILURE:
      return { ...state, error: action.error };

    case REGISTER_REQUESTED_SUCCESS:
      return {
        ...state,
        error: null
      };
    case REGISTER_REQUESTED_FAILURE:
      return { ...state, error: action.error };

    case LOGOUT_REQUESTED_SUCCESS:
      return {
        ...state,
        user: null,
        error: null
      };
    case LOGOUT_REQUESTED_FAILURE:
      return { ...state, error: action.error };

    // case VALIDATE_REGISTRATION:
    //   return {
    //     ...state,
    //     isRegistered: true,
    //     error: null
    //   };

    default:
      return state;
  }
};

export default reducer;
