/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import configureStore from './app/redux';
const store = configureStore;
const Appp = () => <Provider store={store}><App /></Provider>
AppRegistry.registerComponent(appName, () => Appp);

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
