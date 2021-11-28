import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccount from '../screen/MyAccount';
import FindStack from '../screen/FindStack';
import Sessions from '../screen/Sessions';

const Stack = createStackNavigator();

const FindStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        options={{headerShown: true}}
        component={MyAccount}
      />
      <Stack.Screen
        name="Sessions"
        options={{
          title: 'FiND A MENTOR',
          headerTintColor: '#005390',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: '#e1e1e1',
              elevation: 50,
            },
          },
          headerLeft: null,
        }}
        component={Sessions}
      />
    </Stack.Navigator>
  );
};

export default FindStack;
