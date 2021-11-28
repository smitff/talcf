import {
  UPDATE_CACHE,
  LOADINNG,
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD,
  VERIFY_OTP,
  CREATE_PASSWORD,
  UPDATE_USER,
  DASHBOARD,
  DASHBOARD_RESPONSE,
  SESSIONS,
  SESSIONS_RESPONSE,
  SESSIONSDETAILS,
  SESSIONSDETAILS_RESPONSE,
  NOTIFICATION,
  NOTIFICATION_RESPONSE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from '../action/actionTypes';

const initialState = {
  isLoggedIn: false,
  user: {},
  isLoading: true,
  UserId: '',
  dashboard: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CACHE:
      return {
        ...state,
        isLoggedIn: action.payload,
        isLoading: false,
      };

    case LOADINNG:
      return {
        ...state,
        isLoading: action.payload.status,
      };

    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP:
      return {
        ...state,
        loading: true,
      };

    case FORGOT_PASSWORD:
      return {
        ...state,
        loading: true,
      };

    case VERIFY_OTP:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      };

    case DASHBOARD:
      return {
        ...state,
        loading: true,
        dashboard: action.data,
      };
    case DASHBOARD_RESPONSE:
      return {
        ...state,
        loading: true,
        dashboard: action.payload,
      };

    case SESSIONS:
      return {
        ...state,
        loading: true,
        sessions: action.data,
      };
    case SESSIONS_RESPONSE:
      return {
        ...state,
        loading: true,
        sessions: action.payload,
      };

    case SESSIONSDETAILS:
      return {
        ...state,
        loading: true,
        sessiondetails: action.data,
      };
    case SESSIONSDETAILS_RESPONSE:
      return {
        ...state,
        loading: true,
        sessiondetails: action.payload,
      };

    case NOTIFICATION:
      return {
        ...state,
        loading: true,
        notification: action.data,
      };
    case NOTIFICATION_RESPONSE:
      return {
        ...state,
        loading: true,
        notification: action.payload,
      };

    case CREATE_PASSWORD:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
