import { takeEvery, put, call } from 'redux-saga/effects';
import { URL, HEADER } from '../../helper/Const';
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
  PLAN_LIST,
  PLAN_LIST_SUCCESS,
  PLAN_LIST_FAILURE,
  PLAN_DETAILS,
  PLAN_DETAILS_SUCCESS,
  PLAN_DETAILS_FAILURE,
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


  LOGIN,

} from '../action/actionTypes';
import Toast from 'react-native-simple-toast';
import { ToastAndroid } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate, navigationRef } from '../../navigations/navigationref';

// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90YWxjLnViaWNvYXBwcy5pblwvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzQ2MTE0OCwiZXhwIjoxNjMzNDY0NzQ4LCJuYmYiOjE2MzM0NjExNDgsImp0aSI6ImNmbUk5MGcyVGllSWo0d04iLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.qIAuU1lIxga5gkYW5qcv-0oNjHhlLhXCe376Wbiuiw0"

const getToken = async () => {
  let token = await AsyncStorage.getItem("user_token")
  return token;
}

const getUserId = async () => {
  let userId = await AsyncStorage.getItem("user_id")
  return userId;
}

const fetchStoreListApi = (body, token) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'store_list', {}, option)
};

export function* fetchStoreListWorker(action) {
  try {
    console.log('ABCABCABC');
    let token = yield call(getToken) // token
    const res = yield call(fetchStoreListApi, action.payload, token);
    console.log('ABCABCABC res 1', res);
    // Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      console.log('ABCABCABC res 2', res);
      yield put({ type: FETCH_STORE_LIST_SUCCESS, payload: res?.data?.data });
    } else {
      console.log('ABCABCABC else');
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('ABCABCABC error', error);
    console.log('error', error);
    yield put({ type: FETCH_STORE_LIST_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* fetchStoreListApiWatcher() {
  yield takeEvery(FETCH_STORE_LIST, fetchStoreListWorker);
}

const fetchStoreDetailsApi = (body, token) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'store_details', {
    store_id: body?.store_id
  }, option)
};

export function* fetchStoreDetailsWorker(action) {
  try {
    let token = yield call(getToken) // token
    const res = yield call(fetchStoreDetailsApi, action.payload, token);
    console.log('function*fetchStoreDetailsWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: FETCH_STORE_DETAILS_SUCCESS, payload: res?.data?.data });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*fetchStoreDetailsWorker -> error', error);
    yield put({ type: FETCH_STORE_DETAILS_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* fetchStoreDetailsApiWatcher() {
  yield takeEvery(FETCH_STORE_DETAILS, fetchStoreDetailsWorker);
}

const fetchAddressListApi = (body, token, userId) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'address_list', {
    user_id: userId
  }, option)
};

export function* fetchAddressListWorker(action) {
  try {
    let token = yield call(getToken) // token
    let userId = yield call(getUserId) // userId
    const res = yield call(fetchAddressListApi, action.payload, token, userId);
    console.log('function*fetchAddressListWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: FETCH_ADDRESS_LIST_SUCCESS, payload: res.data ? res.data.data : {} });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*fetchAddressListWorker -> error', error);
    yield put({ type: FETCH_ADDRESS_LIST_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* fetchAddressListApiWatcher() {
  yield takeEvery(FETCH_ADDRESS_LIST, fetchAddressListWorker);
}

const addNewAddressApi = (body,token, userId) => {
  console.log(body)
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'add_address', {
    ...body, 
    user_id: userId
  }
, option)
};

export function* addNewAddressWorker(action) {
  console.log("🚀 ~ file: dashboardSaga.js ~ line 178 ~ function*addNewAddressWorker ~ action", action)
  try {
    let token = yield call(getToken) // token
    console.log("🚀 ~ file: dashboardSaga.js ~ line 181 ~ function*addNewAddressWorker ~ token", token)
    let userId = yield call(getUserId) 
    console.log("🚀 ~ file: dashboardSaga.js ~ line 183 ~ function*addNewAddressWorker ~ userId", userId)

    const res = yield call(addNewAddressApi, action.payload,token,userId);
    console.log('function*addNewAddressWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: ADD_NEW_ADDRESS_SUCCESS, payload: res?.data?.data });
      yield put({ type: FETCH_ADDRESS_LIST_SUCCESS, payload: res?.data?.data });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*addNewAddressWorker -> error', error);
    yield put({ type: ADD_NEW_ADDRESS_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* addNewAddressApiWatcher() {
  yield takeEvery(ADD_NEW_ADDRESS, addNewAddressWorker);
}


const fetchOrderListApi = (body,token,userId) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'user_order', {
    user_id: userId
  }, option)
};

export function* fetchOrderListWorker(action) {
  console.log('function*fetchOrderListWorker -> action');
  try {
    let token = yield call(getToken) // token
    let userId = yield call(getUserId) // userId


    const res = yield call(fetchOrderListApi, action.payload,token,userId);
    console.log('function*fetchOrderListWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: GET_ORDER_SUCCESS, payload: res.data ? res.data.data : {} });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*fetchAddressListWorker -> error', error);
    yield put({ type: GET_ORDER_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* fetchOrderListApiWatcher() {
  yield takeEvery(GET_ORDER, fetchOrderListWorker);
}

const fetchPlanListApi = (body,token) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'plan_list', {}, option)
};

export function* fetchPlanListWorker(action) {
  console.log('function*fetchPlanListWorker -> action');
  try {
    let token = yield call(getToken) // token

    const res = yield call(fetchPlanListApi, action.payload,token);
    console.log('function*fetchPlanListWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: PLAN_LIST_SUCCESS, payload: res.data ? res.data.data : {} });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*fetchPlanListWorker -> error', error);
    yield put({ type: PLAN_LIST_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* fetchPlanListApiWatcher() {
  yield takeEvery(PLAN_LIST, fetchPlanListWorker);
}


const fetchPlanDetailsApi = (body,token) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'plan_list', {
    plan_id: 3
  }, option)
};

export function* fetchPlanDetailsWorker(action) {
  console.log('function*fetchPlanDetailsWorker -> action');
  try {
    let token = yield call(getToken) // token

    const res = yield call(fetchPlanDetailsApi, action.payload,token);
    console.log('function*fetchPlanDetailsWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: PLAN_DETAILS_SUCCESS, payload: res.data ? res.data.data : {} });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*fetchPlanDetailsWorker -> error', error);
    yield put({ type: PLAN_DETAILS_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* fetchPlanDetailsApiWatcher() {
  yield takeEvery(PLAN_DETAILS, fetchPlanDetailsWorker);
}

const fetchProfileApi = (body,token, userId) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'user_profile', {
    user_id: userId
  }, option)
};

export function* fetchProfileWorker(action) {
  console.log('function*fetchProfileWorker -> action');
  try {
    let token = yield call(getToken) // token
    let userId = yield call(getUserId) // userId


    const res = yield call(fetchProfileApi, action.payload,token, userId);
    console.log('function*fetchProfileWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: PROFILE_DETAILS_SUCCESS, payload: res.data ? res.data.data : {} });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*fetchProfileWorker -> error', error);
    yield put({ type: PROFILE_DETAILS_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* fetchProfileApiWatcher() {
  yield takeEvery(PROFILE_DETAILS, fetchProfileWorker);
}

const updateProfileApi = (body,token, userId) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'update_profile', {
    ...body, 
    user_id: userId
  }
, option)
};

export function* updateProfileWorker(action) {
  console.log('function*updateProfileWorker -> action');
  try {
    let token = yield call(getToken) // token
    let userId = yield call(getUserId) 

    const res = yield call(updateProfileApi, action.payload,token,userId);
    console.log('function*updateProfileWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: UPDATE_PROFILE_DETAILS_SUCCESS, payload: res.data ? res.data.data : {} });
      navigate('Profile')
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*updateProfileWorker -> error', error);
    yield put({ type: UPDATE_PROFILE_DETAILS_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* updateProfileApiWatcher() {
  yield takeEvery(UPDATE_PROFILE_DETAILS, updateProfileWorker);
}

const notificationListApi = (body,token, userId) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'notification_list', {
    ...body,
    user_id: userId
  }, option)
};

export function* notificationListWorker(action) {
  console.log('function*notificationListWorker -> action');
  try {
    let token = yield call(getToken) // token
    let userId = yield call(getUserId) 

    const res = yield call(notificationListApi, action.payload,token, userId);
    console.log('function*notificationListWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield put({ type: NOTIFICATION_LIST_SUCCESS, payload: res.data ? res.data.data : {} });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*notificationListWorker -> error', error);
    yield put({ type: NOTIFICATION_LIST_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* notificationListApiWatcher() {
  yield takeEvery(NOTIFICATION_LIST, notificationListWorker);
}

const removeNotificationApi = (body,token, userId) => {
  const option = {
    headers: {
      Authorization: "Bearer " + token
    }
  }
  return axios.post(URL + 'notification_remove', {
    ...body, 
    user_id: userId
  }, option)
};

export function* removeNotificationWorker(action) {
  console.log('function*removeNotificationWorker -> action');
  try {
    let token = yield call(getToken) // token
    let userId = yield call(getUserId) 

    const res = yield call(removeNotificationApi, action.payload,token, userId);
    console.log('function*removeNotificationWorker -> res', res);
    Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      yield call(notificationListWorker)
      yield put({ type: REMOVE_NOTIFICATION_SUCCESS, payload: res.data ? res.data.data : {} });
    } else {
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('function*removeNotificationWorker -> error', error);
    yield put({ type: REMOVE_NOTIFICATION_FAILURE, payload: { status: false } });
    Toast.show('Something went wrong');
  }
}

export function* removeNotificationApiWatcher() {
  yield takeEvery(REMOVE_NOTIFICATION, removeNotificationWorker);
}
