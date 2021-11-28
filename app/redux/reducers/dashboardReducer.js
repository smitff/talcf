/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  FETCH_STORE_LIST,
  FETCH_STORE_LIST_SUCCESS,
  FETCH_STORE_LIST_FAILURE,
  FETCH_STORE_DETAILS,
  FETCH_STORE_DETAILS_SUCCESS,
  FETCH_STORE_DETAILS_FAILURE,
  FETCH_ADDRESS_LIST,
  FETCH_ADDRESS_LIST_SUCCESS,
  FETCH_ADDRESS_LIST_FAILURE,
  ADD_NEW_ADDRESS,
  ADD_NEW_ADDRESS_SUCCESS,
  ADD_NEW_ADDRESS_FAILURE,
  GET_ORDER,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  PLAN_DETAILS,
  PLAN_DETAILS_SUCCESS,
  PLAN_DETAILS_FAILURE,
  PLAN_LIST,
  PLAN_LIST_SUCCESS,
  PLAN_LIST_FAILURE,
  PROFILE_DETAILS,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_FAILURE,
  UPDATE_PROFILE_DETAILS,
  UPDATE_PROFILE_DETAILS_SUCCESS,
  UPDATE_PROFILE_DETAILS_FAILURE,
  NOTIFICATION_LIST,
  NOTIFICATION_LIST_SUCCESS,
  NOTIFICATION_LIST_FAILURE,
  REMOVE_NOTIFICATION,
  REMOVE_NOTIFICATION_SUCCESS,
  REMOVE_NOTIFICATION_FAILURE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from '../action/actionTypes';

let initialState = {
  storeListLoading: false,
  storeList: [],
  storeListSuccess: false,
  storeListFailure: false,
  storeDetailsLoading: false,
  storeDetails: {},
  storeDetailsFailure: false,
  storeDetailsSuccess: {},
  addressList: [],
  addressListSuccess: false,
  addressListFailure: false,
  addNewAddressSuccess: false,
  addNewAddressFailure: false,
  loading: false,

  getOrderLoader: false,
  getOrderList: [],

  planListLoader: false,
  planList: [],

  planDetailsLoader: false,
  planDetails: {},

  profileLoader: false,
  profileData: {},

  updateProfileLoader: false,
  updateProfileSuccess: false,
  updateProfileFailure: false,

  notificationList: [],
  notificationLoader: false,
  notificationListSuccess: false,
  notificationListFailure: false,

  removeNotification: [],
  removeNotificationLoader: false,
  removeNotificationSuccess: false,
  removeNotificationFailure: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STORE_LIST:
      return {
        ...state,
        storeList: [],
        storeListSuccess: false,
        storeListFailure: false,
        storeListLoading: true,
      };
    case FETCH_STORE_LIST_SUCCESS:
      return {
        ...state,
        storeListLoading: false,
        storeList: action.payload && action.payload.payload,
        storeListSuccess: true,
        storeListFailure: false,
      };
    case FETCH_STORE_LIST_FAILURE:
      return {
        ...state,
        storeListLoading: false,
        storeList: [],
        storeListSuccess: false,
        storeListFailure: true,
      };

    case FETCH_STORE_DETAILS:
      return {
        ...state,
        storeDetails: {},
        storeDetailsLoading: true,
        storeDetailsSuccess: false,
        storeDetailsFailure: false,
        loading: true,
      };
    case FETCH_STORE_DETAILS_SUCCESS:
      return {
        ...state,
        storeDetails: action.payload && action.payload.payload,
        storeDetailsSuccess: true,
        storeDetailsFailure: false,
        storeDetailsLoading: false,
      };
    case FETCH_STORE_DETAILS_FAILURE:
      return {
        ...state,
        storeDetails: {},
        storeDetailsSuccess: false,
        storeDetailsFailure: true,
        storeDetailsLoading: false,
      };

    case FETCH_ADDRESS_LIST:
      return {
        ...state,
        addressList: [],
        addressListSuccess: false,
        addressListFailure: false,
        loading: true,
      };
    case FETCH_ADDRESS_LIST_SUCCESS:
      return {
        ...state,
        addressList: action.payload && action.payload.payload,
        addressListSuccess: true,
        addressListFailure: false,
      };
    case FETCH_ADDRESS_LIST_FAILURE:
      return {
        ...state,
        addressList: [],
        addressListSuccess: false,
        addressListFailure: true,
      };

    case ADD_NEW_ADDRESS:
      return {
        ...state,
        addNewAddressSuccess: false,
        addNewAddressFailure: false,
        loading: true,
      };
    case ADD_NEW_ADDRESS_SUCCESS:
      return {
        ...state,
        addNewAddressSuccess: true,
        addNewAddressFailure: false,
      };
    case ADD_NEW_ADDRESS_FAILURE:
      return {
        ...state,
        addNewAddressSuccess: false,
        addNewAddressFailure: true,
      };

    case GET_ORDER:
      return {
        ...state,
        getOrderLoader: true,
        getOrderList: [],
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        getOrderLoader: false,
        getOrderList: action.payload && action.payload.payload,
      };
    case GET_ORDER_FAILURE:
      return {
        ...state,
        getOrderLoader: false,
        getOrderList: [],
      };

    case PLAN_LIST:
      return {
        ...state,
        planListLoader: true,
        planList: [],
      };
    case PLAN_LIST_SUCCESS:
      return {
        ...state,
        planListLoader: false,
        planList: action.payload && action.payload.payload,
      };
    case PLAN_LIST_FAILURE:
      return {
        ...state,
        planListLoader: false,
        planList: [],
      };

    case PLAN_DETAILS:
      return {
        ...state,
        planDetailsLoader: true,
        planDetails: {},
      };
    case PLAN_DETAILS_SUCCESS:
      return {
        ...state,
        planDetailsLoader: false,
        planDetails: action.payload && action.payload.payload,
      };
    case PLAN_DETAILS_FAILURE:
      return {
        ...state,
        planDetailsLoader: false,
        planDetails: {},
      };

    case PROFILE_DETAILS:
      return {
        ...state,
        profileLoader: true,
        profileData: {},
      };
    case PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        profileLoader: false,
        profileData: action.payload && action.payload.payload,
      };
    case PROFILE_DETAILS_FAILURE:
      return {
        ...state,
        profileLoader: false,
        profileData: {},
      };

    case UPDATE_PROFILE_DETAILS:
      return {
        ...state,
        updateProfileLoader: true,
        updateProfileSuccess: false,
        updateProfileFailure: false,
      };
    case UPDATE_PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        updateProfileLoader: false,
        updateProfileSuccess: true,
        updateProfileFailure: false,
      };
    case UPDATE_PROFILE_DETAILS_FAILURE:
      return {
        ...state,
        updateProfileLoader: false,
        updateProfileSuccess: false,
        updateProfileFailure: true,
      };

    case NOTIFICATION_LIST:
      return {
        ...state,
        notificationList: [],
        notificationLoader: true,
        notificationListSuccess: false,
        notificationListFailure: false,
      };
    case NOTIFICATION_LIST_SUCCESS:
      return {
        ...state,
        notificationList: action.payload && action.payload.payload,
        notificationLoader: false,
        notificationListSuccess: true,
        notificationListFailure: false,
      };
    case NOTIFICATION_LIST_FAILURE:
      return {
        ...state,
        notificationList: [],
        notificationLoader: false,
        notificationListSuccess: false,
        notificationListFailure: true,
      };

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        removeNotification: {},
        removeNotificationLoader: true,
        removeNotificationSuccess: false,
        removeNotificationFailure: false,
      };
    case REMOVE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        removeNotification: {},
        removeNotificationLoader: false,
        removeNotificationSuccess: true,
        removeNotificationFailure: false,
      };
    case REMOVE_NOTIFICATION_FAILURE:
      return {
        ...state,
        removeNotification: {},
        removeNotificationLoader: false,
        removeNotificationSuccess: false,
        removeNotificationFailure: true,
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        changePassword: {},
        changePasswordLoader: true,
        changePasswordSuccess: false,
        changePasswordFailure: false,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {},
        changePasswordLoader: false,
        changePasswordSuccess: true,
        changePasswordFailure: false,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        changePassword: {},
        changePasswordLoader: false,
        changePasswordSuccess: false,
        changePasswordFailure: true,
      };
    default:
      return state;
  }
}
