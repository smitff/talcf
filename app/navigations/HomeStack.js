import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screen/Dashboard';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{headerShown: false}}
        component={Dashboard}
    
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
