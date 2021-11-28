import React, {useEffect} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import Splash from './app/screen/Splash';
import Tutorial1 from './app/screen/Tutorial1';
import Tutorial2 from './app/screen/Tutorial2';
import Tutorial3 from './app/screen/Tutorial3';
import Login from './app/screen/Login';
import Singup from './app/screen/Singup';
import ForgotPassword from './app/screen/ForgotPassword';
import ResetCode from './app/screen/ResetCode';
import CreatePassword from './app/screen/CreatePassword';
import CompleteYourProfile from './app/screen/CompleteYourProfile';
import SessionDetails from './app/screen/SessionDetails';
import Checkout from './app/screen/Checkout';
import AddNewAddress from './app/screen/AddNewAddress';
import Payment from './app/screen/Payment';
import Payments from './app/screen/Payments';
import AddNewAddressSave from './app/screen/AddNewAddressSave';
import ChangePassword from './app/screen/ChangePassword';
import Notification from './app/screen/Notification';
import ChooseAddAddress from './app/screen/ChooseAddAddress';
import Sessions from './app/screen/Sessions';
import Store from './app/screen/Store';
import ProductDetails from './app/screen/ProductDetails';
import EditProfile from './app/screen/Edit Profile';
import MyOrders from './app/screen/MyOrders';
import Package from './app/screen/Package';
import Cart from './app/screen/Cart';
import Profile from './app/screen/Profile';
import SelectDateTimes from './app/screen/SelectDateTimes';
import Dashboard from './app/screen/Dashboard';
import BottomNavi from './app/navigations/BottomNavi';
import {navigationRef} from './app/navigations/navigationref';

import CustomWebView from './app/screen/CustomWebView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Singup"
          options={{headerShown: false}}
          component={Singup}
        />
        <Stack.Screen
          name="Forgot Password"
          options={{headerShown: false, title: 'Forgot Password'}}
          component={ForgotPassword}
        />
        <Stack.Screen
          name="Reset Code"
          options={{headerShown: false, title: 'Reset Code'}}
          component={ResetCode}
        />
        <Stack.Screen
          name="Create Password"
          options={{headerShown: false, title: 'Create Password'}}
          component={CreatePassword}
        />
        <Stack.Screen
          name="AddNewAddress"
          options={({navigation}) => ({
            title: 'Add New Address',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={AddNewAddress}
        />
        <Stack.Screen
          name="ChangePassword"
          options={({navigation}) => ({
            title: 'Change Password',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={ChangePassword}
        />
        <Stack.Screen
          name="Notification"
          options={({navigation}) => ({
            title: 'Notification',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Notification}
        />
        <Stack.Screen
          name="Choose/Add Address"
          options={({navigation}) => ({
            title: 'Choose/Add Address',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={ChooseAddAddress}
        />

        <Stack.Screen
          name="SessionsDetails"
          options={({navigation}) => ({
            title: 'Sessions Details',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={SessionDetails}
        />
        <Stack.Screen
          name="Checkout"
          options={({navigation}) => ({
            title: 'Checkout',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Checkout}
        />
        <Stack.Screen
          name="AddNewAddressSave"
          options={({navigation}) => ({
            title: 'Add New Address',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={AddNewAddressSave}
        />
        <Stack.Screen
          name="Payment"
          options={({navigation}) => ({
            title: 'Payment',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Payment}
        />
        <Stack.Screen
          name="Payments"
          options={({navigation}) => ({
            title: 'Payments',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Payments}
        />
        <Stack.Screen
          name="Tutorial1"
          options={{headerShown: false}}
          component={Tutorial1}
        />
        <Stack.Screen
          name="Tutorial2"
          options={{headerShown: false}}
          component={Tutorial2}
        />
        <Stack.Screen
          name="Tutorial3"
          options={{headerShown: false}}
          component={Tutorial3}
        />
        <Stack.Screen
          name="CompleteYourProfile"
          options={{headerShown: false, title: 'Complete your Profile'}}
          component={CompleteYourProfile}
        />
        <Stack.Screen
          name="Sessions"
          options={({navigation}) => ({
            title: 'Sessions',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Sessions}
        />
        <Stack.Screen
          name="Store"
          options={({navigation}) => ({
            headerTitle: () => (
              <Image
                style={{width: 50, height: 50}}
                source={require('./app/image/Group 4617.png')}
              />
            ),
            title: 'Store',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',

            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},

            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  {/* <Image
                    source={require('./app/image/Group 4617.png')}

                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 20,
                    }}
                  /> */}
                </TouchableOpacity>
              );
            },
          })}
          component={Store}
        />
        <Stack.Screen
          name="ProductDetails"
          options={({navigation}) => ({
            title: 'Product Details',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={ProductDetails}
        />
        <Stack.Screen
          name="EditProfile"
          options={{headerShown: false, title: 'Edit Profile'}}
          component={EditProfile}
        />
        <Stack.Screen
          name="MyOrders"
          options={({navigation}) => ({
            title: 'My Orders',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={MyOrders}
        />
        <Stack.Screen
          name="Package"
          options={({navigation}) => ({
            title: 'Package',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Package}
        />
        <Stack.Screen
          name="Cart"
          options={({navigation}) => ({
            title: 'Cart',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Cart}
        />
        <Stack.Screen
          name="Profile"
          options={({navigation}) => ({
            title: 'Profile',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={Profile}
        />

        <Stack.Screen
          name="SelectDateTimes"
          options={({navigation}) => ({
            title: 'Select Date & Time',
            headerTintColor: '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./app/image/left-arrow.png')}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'black',
                      marginLeft: 20,
                      marginTop: 2,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          })}
          component={SelectDateTimes}
        />
        <Stack.Screen
          name="BottomNavi"
          options={{headerShown: false}}
          component={BottomNavi}
        />
        <Stack.Screen
          name="CustomWebView"
          options={{headerShown: false}}
          component={CustomWebView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
