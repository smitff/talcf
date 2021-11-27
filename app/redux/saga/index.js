/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import {
  changePasswordWatcher,
  registerWatcher,
  forgotPasswordWatcher,
  updateuserWatcher,
  dashboardWatcher,
  sessionsWatcher,
  resetPasswordWatcher,
  notificationWatcher,
  sessiondetailsWatcher,
  createpasswordWatcher,
  checkLoginWatcher,
  isUserWatcher,
  loginWatcher,
  verifyOtpWatcher,
} from './authSaga';
import {
  fetchStoreListApiWatcher,
  fetchStoreDetailsApiWatcher,
  fetchAddressListApiWatcher,
  addNewAddressApiWatcher,
  fetchOrderListApiWatcher,
  fetchPlanListApiWatcher,
  fetchPlanDetailsApiWatcher,
  fetchProfileApiWatcher,
  updateProfileApiWatcher,
  notificationListApiWatcher,
  removeNotificationApiWatcher
} from './dashboardSaga';
import {getDriverShipmentsWatcher} from './driverSaga';

export default function* rootSaga() {
  yield all([
    registerWatcher(),
    forgotPasswordWatcher(),
    createpasswordWatcher(),
    isUserWatcher(),
    dashboardWatcher(),
    notificationWatcher(),
    updateuserWatcher(),
    sessionsWatcher(),
    checkLoginWatcher(),
    sessiondetailsWatcher(),
    loginWatcher(),
    resetPasswordWatcher(),
    // changePasswordWatcher(),
    verifyOtpWatcher(),
    // getDriverShipmentsWatcher(),
    fetchStoreListApiWatcher(),
    fetchStoreDetailsApiWatcher(),
    fetchAddressListApiWatcher(),
    addNewAddressApiWatcher(),
    fetchOrderListApiWatcher(),
    fetchPlanListApiWatcher(),
    fetchPlanDetailsApiWatcher(),
    fetchProfileApiWatcher(),
    updateProfileApiWatcher(),
    notificationListApiWatcher(),
    removeNotificationApiWatcher(),
    changePasswordWatcher()

  ]);
}
