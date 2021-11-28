/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  REGISTER,
  IS_USERS,
  LOGIN,
  UPDATE_USER,
  DASHBOARD_RESPONSE,
  SESSIONS,
  SESSIONS_RESPONSE,
  SESSIONSDETAILS,
  NOTIFICATION,
  NOTIFICATION_RESPONSE,
  SESSIONSDETAILS_RESPONSE,
  FORGOT_PASSWORD,
  VERIFY_OTP,
  CREATE_PASSWORD,
  LOADINNG,
  CHECK_LOGIN,
  UPDATE_CACHE,
  RESET_PASSWORD,
  SHIPMENTINFO,
  DASHBOARD,
  FETCH_STORE_LIST,
  FETCH_STORE_DETAILS,
  FETCH_ADDRESS_LIST,
  ADD_NEW_ADDRESS,
  GET_ORDER,
  PLAN_LIST,
  PLAN_DETAILS,
  PROFILE_DETAILS,
  UPDATE_PROFILE_DETAILS,
  NOTIFICATION_LIST,
  REMOVE_NOTIFICATION,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
} from './actionTypes';

export const showLoading = state => {
  return {
    type: showLoading,
    payload: state,
  };
};

export const hideLoading = state => {
  return {
    type: hideLoading,
    payload: state,
  };
};

export const login = state => {
  return {
    type: LOGIN,
    payload: state,
  };
};

export const register = state => ({
  type: REGISTER,
  payload: state,
});

export const forgotPassword = state => ({
  type: FORGOT_PASSWORD,
  payload: state,
});

export const verifyOtp = state => ({
  type: VERIFY_OTP,
  payload: state,
});

export const CreatePassword = state => ({
  type: CREATE_PASSWORD,
  payload: state,
});

export const updateuser = state => ({
  type: UPDATE_USER,
  payload: state,
});

export const dashboard = state => ({
  type: DASHBOARD,
  payload: state,
});

export const dashboardresponse = state => ({
  type: DASHBOARD_RESPONSE,
  payload: state,
});

export const sessions = state => ({
  type: SESSIONS,
  payload: state,
});

export const sessionsresponse = state => ({
  type: SESSIONS_RESPONSE,
  payload: state,
});

export const sessiondetails = state => ({
  type: SESSIONSDETAILS,
  payload: state,
});

export const sessiondetailsresponse = state => ({
  type: SESSIONSDETAILS_RESPONSE,
  payload: state,
});

export const notification = state => ({
  type: NOTIFICATION,
  payload: state,
});

export const notificationresponse = state => ({
  type: NOTIFICATION_RESPONSE,
  payload: state,
});

export const checkIsUsers = state => ({
  type: IS_USERS,
  payload: state,
});

export const updateCache = state => ({
  type: UPDATE_CACHE,
  payload: state,
});
export const loadingStatus = state => ({
  type: LOADINNG,
  payload: state,
});

export const checkLogin = state => ({
  type: CHECK_LOGIN,
  payload: state,
});

export const sendOtpAction = state => ({
  type: SENT_OTP,
  payload: state,
});

export const resetPassword = state => ({
  type: RESET_PASSWORD,
  payload: state,
});

export const shipmentinfo = state => ({
  type: SHIPMENTINFO,
  payload: state,
});

export const fetchStoreList = state => ({
  type: FETCH_STORE_LIST,
  payload: state,
});

export const fetchStoreDetails = state => ({
  type: FETCH_STORE_DETAILS,
  payload: state,
});

export const fetchAddressList = state => ({
  type: FETCH_ADDRESS_LIST,
  payload: state,
});

export const addNewAddress = state => ({
  type: ADD_NEW_ADDRESS,
  payload: state,
});

export const getOrder = state => ({
  type: GET_ORDER,
  payload: state,
});

export const getPlanList = state => ({
  type: PLAN_LIST,
  payload: state,
});

export const getPlanDetails = state => ({
  type: PLAN_DETAILS,
  payload: state,
});

export const getUserProfile = state => ({
  type: PROFILE_DETAILS,
  payload: state,
});

export const saveUserProfile = state => ({
  type: UPDATE_PROFILE_DETAILS,
  payload: state,
});

export const getNotificationList = state => ({
  type: NOTIFICATION_LIST,
  payload: state,
});

export const removeNotification = state => ({
  type: REMOVE_NOTIFICATION,
  payload: state,
});

export const changePassword = state => ({
  type: CHANGE_PASSWORD,
  payload: state,
});
