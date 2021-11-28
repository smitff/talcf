import {takeEvery, put, call} from 'redux-saga/effects';
import {URL, HEADER} from '../../helper/Const';
import {
  LOGIN,
  UPDATE_CACHE,
  SENT_OTP,
  REGISTER,
  VERIFY_OTP,
  LOADINNG,
  IS_USERS,
  CHECK_LOGIN,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  UPDATE_IMAGES,
} from '../action/actionTypes';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';
import {GET_DRIVER_SHIPMENTS_REQ} from '../action/driver/types';

const getDriverShipmentsAPI = body => {
  return fetch(`${URL}driver/get-shipment`, {
    method: 'POST',
    headers: HEADER,
    body,
  }).then(response => response.json());
};

export function* getDriverShipmentWorker(action) {
  //   try {
  //     yield put({type: LOADINNG, payload: {status: true}});
  //     const {body, onComplete} = action.payload;
  //     const res = yield call(getDriverShipmentsAPI, body);
  //     Toast.show(res.Result);
  //     console.log(res);
  //     yield put({type: LOADINNG, payload: {status: false}});
  //     if (res.status == '200') {
  //       onComplete(res);
  //       yield put({type: UPDATE_CACHE, payload: res});
  //     } else {
  //       yield put({type: LOADINNG, payload: {status: false}});
  //       Toast.show(res.message, ToastAndroid.SHORT);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //     yield put({type: LOADINNG, payload: {status: false}});
  //     Toast.show('Something went wrong');
  //   }
}

export function* getDriverShipmentsWatcher() {
  yield takeEvery(GET_DRIVER_SHIPMENTS_REQ, getDriverShipmentWorker);
}
