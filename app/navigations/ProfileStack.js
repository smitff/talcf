import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccount from '../screen/MyAccount';
import Profile from '../screen/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        options={{headerShown: false}}
        component={MyAccount}
      />
      <Stack.Screen
        name="Profile"
        options={{
          title: 'PROFILE',
          headerTintColor: '#005390',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
          headerLeft: null,
        }}
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
