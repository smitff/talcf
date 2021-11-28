import {takeEvery, put, call, select} from 'redux-saga/effects';
import {URL, HEADER} from '../../helper/Const';
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  UPDATE_USER,
  VERIFY_OTP,
  CREATE_PASSWORD,
  UPDATE_CACHE,
  DASHBOARD,
  SESSIONS,
  SESSIONS_RESPONSE,
  SESSIONSDETAILS,
  SESSIONSDETAILS_RESPONSE,
  NOTIFICATION,
  LOADINNG,
  IS_USERS,
  CHECK_LOGIN,
  RESET_PASSWORD,
  // CHANGE_PASSWORD,
  UPDATE_IMAGES,
  DASHBOARD_RESPONSE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from '../action/actionTypes';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EventSubscriptionVendor, ToastAndroid} from 'react-native';
import axios from 'axios';
import {navigate, navigationRef} from '../../navigations/navigationref';
import {Alert} from 'react-native';

const registerAPI = body => {
  return axios.post(`${URL}register`, body);
};
export function* registerWorker(action) {
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    const res = yield call(registerAPI, action.payload);
    console.log('registerWorker', res.data.data);

    yield put({type: LOADINNG, payload: {status: false}});

    if (res.status == '200') {
      yield call(saveUserId, `${res.data?.data?.payload?.user?.id}`);
      AsyncStorage.setItem('user', `${res.Id}`);
      yield put({type: UPDATE_CACHE, payload: res});
      console.log('registerWorker', navigate);
      navigate('CompleteYourProfile');
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
      Toast.show(res.message, ToastAndroid.SHORT);
      // navigate("MainTab")
    }
  } catch (error) {
    console.log('error', error);
    yield put({type: LOADINNG, payload: {status: false}});
    Toast.show('Something went wrong');
  }
}
export function* registerWatcher() {
  yield takeEvery(REGISTER, registerWorker);
}

const loginAPI = body => {
  return axios.post(`${URL}login`, body);
};
export function* loginWorker(action) {
  try {
    console.log(action.payload, 'login data');
    const res = yield call(loginAPI, action.payload);
    console.log(res.data, 'response data');

    if (res.data.data.responseCode == 200) {
      yield call(saveToken, res.data.data.payload.token);
      yield call(saveUserId, `${res.data.data.user.id}`);
      yield call(saveLoginStatus);
      yield put({type: UPDATE_CACHE, payload: true});
      console.log('TOKEN', res.data.data.payload.token);
      navigate('BottomNavi');
    } else {
      Toast.show(res.data.data.message);
    }
    yield put({type: LOADINNG, payload: {status: false}});
  } catch (error) {
    console.log(error, 'err on login');
    console.log(error.response.data, 'err on login');

    yield put({type: LOADINNG, payload: {status: false}});
    Toast.show('Something went wrong');
  }
}

export function* loginWatcher() {
  yield takeEvery(LOGIN, loginWorker);
}

const forgotPasswordAPI = (body, token) => {
  // return fetch(URL + 'verify_code', {
  //   method: 'POST',
  //   headers: { ...HEADER, Authorizatio: 'Bearer' + token },
  //   body: {

  //   }
  // }).then((response) => response.json());
  return axios.post(
    URL + 'forgot_password',
    {
      email: 'abc@abc.com',
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
};

export function* forgotPasswordWorker(action) {
  console.log(
    '🚀 ~ file: authSaga.js ~ line 112 ~ function*forgotPasswordWorker ~ forgotPasswordWorker',
  );
  yield put({type: LOADINNG, payload: {status: true}});
  let token = yield call(() => AsyncStorage.getItem('user'));
  console.log('TOKEN', token);
  // const { onComplete } = action.payload;
  try {
    const res = yield call(forgotPasswordAPI, {}, token);
    console.log(res);
    Toast.show(res.message);
    if (res.status == true || res.status === 200) {
      // onComplete(res);
      navigate('ResetCode');
      yield put({type: FORGOT_PASSWORD, payload: res});
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
    }
  } catch (error) {
    console.log(error);
  }
}
export function* forgotPasswordWatcher() {
  yield takeEvery(FORGOT_PASSWORD, forgotPasswordWorker);
}

const verifyOtpAPI = body => {
  // console.log(body)
  // return fetch(URL + 'verify_code', {
  //   method: 'POST',
  //   headers: HEADER,
  //   body: JSON.stringify(body)
  // }).then((response) => response.json());
  const option = {
    headers: HEADER,
  };
  return axios.post(
    URL + 'verify_code',
    {
      email: 'abc@abc.com',
      verification_code: '274591',
    },
    option,
  );
};

export function* verifyOtpWorker(action) {
  yield put({type: LOADINNG, payload: {status: true}});
  // let token = yield call(() => AsyncStorage.getItem('user_token'))
  // console.log('TOKEN', token)
  const {body, onComplete} = action.payload;
  console.log(
    '🚀 ~ file: authSaga.js ~ line 165 ~ function*verifyOtpWorker ~ body',
    body,
  );
  try {
    const res = yield call(verifyOtpAPI, body);
    console.log('VERify response', res);
    Toast.show(res.message);
    if (res.status == true || res.status === 200) {
      onComplete(res);
      navigate('CreatePassword');
      yield put({type: VERIFY_OTP, payload: res});
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
      // navigate("CreatePassword")
    }
  } catch (error) {
    console.log(error);
  }
}
export function* verifyOtpWatcher() {
  yield takeEvery(VERIFY_OTP, verifyOtpWorker);
}

const createpasswordAPI = (body, token, userId) => {
  const option = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  return axios.post(
    URL + 'create_new_password',
    {
      user_id: userId,
      password: 12345678,
      password_confirmation: 12345678,
    },
    option,
  );
};

export function* createpasswordWorker(action) {
  yield put({type: LOADINNG, payload: {status: true}});
  let token = yield call(getToken);
  let userId = yield call(getUserId);

  console.log('TOKEN', token);
  // const { body, onComplete } = action.payload;
  try {
    const res = yield call(createpasswordAPI, {}, token, user_Id);
    console.log(res);
    Toast.show(res.message);
    if (res.status == true || res.status === 200) {
      // onComplete(res);
      navigate('Login');
      yield put({type: CREATE_PASSWORD, payload: res});
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
    }
  } catch (error) {
    console.log(error);
  }
}
export function* createpasswordWatcher() {
  yield takeEvery(CREATE_PASSWORD, createpasswordWorker);
}

// sssssssss
const updateuserAPI = (body, token, userId) => {
  return axios.post(
    URL + 'update_profile',
    {
      ...body,
      user_id: userId,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
};
export function* updateuserWorker(action) {
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    let token = yield call(getToken);
    let userId = yield call(getUserId);

    const res = yield call(updateuserAPI, action.payload, token, userId);
    Toast.show(res.data.data.message);

    if (res.data.data.responseCode == '200') {
      console.log('resp');
      navigate('BottomNavi');
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
    }
  } catch (error) {
    console.log(error);
  }
}
export function* updateuserWatcher() {
  yield takeEvery(UPDATE_USER, updateuserWorker);
}
// sssssssss

const dashboardAPI = (body, token) => {
  return axios.post(URL + 'dashboard', body, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
export function* dashboardWorker(action) {
  console.log(
    '🚀 ~ file: authSaga.js ~ line 266 ~ function*dashboardWorker ~ dashboardWorker',
  );
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    let token = yield call(getToken);

    const res = yield call(dashboardAPI, {}, token);
    // console.log('CONSOLE HERE',res.data)
    if (res.data.data.responseCode == '200') {
      yield put({type: DASHBOARD_RESPONSE, payload: res.data.data.payload});
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
    }
  } catch (error) {
    console.log(error);
  }
}
export function* dashboardWatcher() {
  yield takeEvery(DASHBOARD, dashboardWorker);
}

const sessionsAPI = (body, token) => {
  return axios.post(URL + 'dashboard', body, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
export function* sessionsWorker(action) {
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    let token = yield call(getToken);

    const res = yield call(sessionsAPI, {}, token);
    // console.log('CONSOLE HERE',res.data)
    if (res.data.data.responseCode == '200') {
      yield put({type: SESSIONS_RESPONSE, payload: res.data.data.payload});
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
    }
  } catch (error) {
    console.log(error);
  }
}
export function* sessionsWatcher() {
  yield takeEvery(SESSIONS, sessionsWorker);
}

const sessiondetailsAPI = (body, token) => {
  return axios.post(URL + 'dashboard', body, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
export function* sessiondetailsWorker(action) {
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    let token = yield call(getToken);

    const res = yield call(sessiondetailsAPI, {}, token);
    // console.log('CONSOLE HERE',res.data)
    if (res.data.data.responseCode == '200') {
      yield put({
        type: SESSIONSDETAILS_RESPONSE,
        payload: res.data.data.payload,
      });
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
    }
  } catch (error) {
    console.log(error);
  }
}
export function* sessiondetailsWatcher() {
  yield takeEvery(SESSIONSDETAILS, sessiondetailsWorker);
}

const notificationAPI = (body, token) => {
  return axios.post(URL + 'notification_list', body, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
export function* notificationWorker(action) {
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    let token = yield call(getToken);

    const res = yield call(notificationAPI, token);
    // console.log('CONSOLE HERE',res.data)
    if (res.data.data.responseCode == '200') {
      yield put({type: NOTIFICATION_RESPONSE, payload: res.data.data.payload});
      yield put({type: LOADINNG, payload: {status: false}});
    } else {
      yield put({type: LOADINNG, payload: {status: false}});
    }
  } catch (error) {
    console.log(error);
  }
}
export function* notificationWatcher() {
  yield takeEvery(NOTIFICATION, notificationWorker);
}

const isUserAPI = body => {
  return fetch(`${URL}check-user`, {
    method: 'POST',
    headers: HEADER,
    body,
  }).then(response => response.json());
};

export function* isUserWorker(action) {
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    const {body, onCompleteCheckUsers} = action.payload;
    if (body.email == '') {
      Toast.show('Username is required');
      yield put({type: LOADINNG, payload: {status: false}});
      return;
    }
    const res = yield call(isUserAPI, body);
    onCompleteCheckUsers(res);
    yield put({type: LOADINNG, payload: {status: false}});
  } catch (error) {
    yield put({type: LOADINNG, payload: {status: false}});
    Toast.show('Something went wrong');
  }
}
export function* isUserWatcher() {
  yield takeEvery(IS_USERS, isUserWorker);
}

const checkLoginAPI = UserId => {
  return fetch(`${URL}users/` + UserId, {
    method: 'GET',
    headers: HEADER,
  }).then(response => response.json());
};
export function* checkLoginWorker(action) {
  try {
    yield put({type: LOADINNG, payload: {status: true}});
    const {onComplete} = action.payload;
    let UserId = yield AsyncStorage.getItem('user');

    if (UserId != null && UserId != 'null') {
      const res = yield call(checkLoginAPI, UserId);
      yield put({type: LOADINNG, payload: {status: false}});
      if (res.status == true) {
        yield put({type: UPDATE_CACHE, payload: res});
      } else {
        yield put({
          type: UPDATE_CACHE,
          payload: {status: false, data: {id: 0}},
        });
      }
      onComplete({status: true});
    } else {
      onComplete({status: false});
    }
    yield put({type: LOADINNG, payload: {status: false}});
  } catch (error) {
    yield put({type: LOADINNG, payload: {status: false}});
  }
}
export function* checkLoginWatcher() {
  yield takeEvery(CHECK_LOGIN, checkLoginWorker);
}

const resetPasswordAPI = body => {
  return fetch(URL + 'reset-password', {
    method: 'POST',
    headers: HEADER,
    body,
  }).then(response => response.json());
};

export function* resetPasswordWorker(action) {
  yield put({type: LOADINNG, payload: {status: true}});
  const {body, onComplete} = action.payload;
  const res = yield call(resetPasswordAPI, body);
  Toast.show(res.message);
  if (res.status == true) {
    onComplete(res);
    yield put({type: LOADINNG, payload: {status: false}});
  } else {
    yield put({type: LOADINNG, payload: {status: false}});
  }
}

export function* resetPasswordWatcher() {
  yield takeEvery(RESET_PASSWORD, resetPasswordWorker);
}

// const changePasswordAPI = (body) => {
//   return fetch(`${URL}change-password`, {
//     method: 'POST',
//     headers: HEADER,
//     body: body
//   }).then((response) => response.json());
// };

// export function* changePasswordWorker(action) {
//   const { body, onComplete } = action.payload;
//   yield put({ type: LOADINNG, payload: { status: true } });
//   const res = yield call(changePasswordAPI, body);
//   Toast.show(res.message);
//   if (res.status == true) {
//     onComplete(res);
//     yield put({ type: LOADINNG, payload: { status: false } });
//   } else {
//     yield put({ type: LOADINNG, payload: { status: false } });
//   }
// }
// export function* changePasswordWatcher() {
//   yield takeEvery(CHANGE_PASSWORD, changePasswordWorker);
// }
const saveToken = async token => {
  await AsyncStorage.setItem('user_token', token);
};

const saveUserId = async userId => {
  await AsyncStorage.setItem('user_id', userId);
};

const saveLoginStatus = async () => {
  await AsyncStorage.setItem('isLoggedIn', 'true');
};

const getToken = async () => {
  let token = await AsyncStorage.getItem('user_token');
  return token;
};

const getUserId = async () => {
  let userId = await AsyncStorage.getItem('user_id');
  return userId;
};

const changePasswordApi = (body, token, userId) => {
  console.log(
    '🚀 ~ file: authSaga.js ~ line 601 ~ changePasswordApi ~ body',
    body,
  );
  const option = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  return axios.post(
    URL + 'change_password',
    {
      user_id: userId,
      old_password: body.Oldpassword,
      password: body.Newpassword,
      password_confirmation: body.ConfirmNewPassword,
    },
    option,
  );
};

export function* changePasswordWorker(action) {
  try {
    console.log('ABCABCABC');
    let token = yield call(getToken); // token

    let userId = yield call(getUserId);

    console.log(
      '🚀 ~ file: authSaga.js ~ line 613 ~ function*changePasswordWorker ~ token',
      token,
    );
    const res = yield call(changePasswordApi, action.payload, token, userId);
    console.log('ABCABCABC res 1', res);
    // Toast.show(res.Result);
    if (res.status == '200' || res.statusCode === 1) {
      console.log('ABCABCABC res 2', res);
      Alert.alert(
        'Password Changed Successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              navigate('Login');
            },
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
      setTimeout(() => {
        navigate('Login');
      }, 2000);
      yield put({type: CHANGE_PASSWORD_SUCCESS, payload: res?.data?.data});
    } else {
      console.log('ABCABCABC else');
      Toast.show(res.message, ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('ABCABCABC error', error);
    console.log('error', error);
    yield put({type: CHANGE_PASSWORD_FAILURE, payload: {status: false}});
    Toast.show('Something went wrong');
  }
}

export function* changePasswordWatcher() {
  yield takeEvery(CHANGE_PASSWORD, changePasswordWorker);
}
