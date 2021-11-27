import React from 'react';
import { Text, Image } from 'react-native';
import Sessions from '../screen/Sessions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import Store from "../screen/Store"
import Package from "../screen/Package"

const Tab = createBottomTabNavigator();
const BottomNavi = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#F97762'
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? require('../image/Path2.png') : require('../image/Home_Deselected.png')}
              style={{ width: 22, height: 22 }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color: color }}>Home</Text>
          )
        }}
      />
      <Tab.Screen
        name="Sessions"
        component={Sessions}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            // <Ionicons name="play-circle-outline" size={23} color={color} />
            <Image
              source={focused ? require('../image/play1.png') : require('../image/play.png')}
              style={{ width: 22, height: 22 }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color: color }}>Sessions</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            // <Ionicons name="storefront-outline" size={23} color={color} />
            <Image
              source={focused ? require('../image/shop.png') : require('../image/shop-2.png')}
              style={{ width: 22, height: 22 }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color: color }}>Store</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Package"
        component={Package}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            // <Ionicons name="gift-outline" size={23} color={color} />
            <Image
              source={focused ? require('../image/dollar1.png') : require('../image/dollar.png')}
              style={{ width: 22, height: 22 }}
            />

          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color: color }}>Package</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavi;
