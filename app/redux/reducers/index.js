/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import authReducers from './authReducers';
import dashboardReducer from './dashboardReducer';
export default combineReducers({authReducers, dashboardReducer});
