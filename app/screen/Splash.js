import React, {useEffect, Component, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    console.log('>>>>>>>>>>>>> Splash loaded');
    setTimeout(function () {
      navigation.navigate('Tutorial1');
    }, 3000);
  }, []);

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff', flex: 1}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../image/spash.png')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

// Network
// MyAccount
