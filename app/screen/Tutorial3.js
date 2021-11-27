import React, {useEffect, Component, useState} from 'react';
import {RadioButton, CheckBox} from 'react-native-paper';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native';

export default function Tutorial3({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [checked, setChecked] = React.useState('first');

  return (
    
    <ImageBackground
      source={require('../image/background.png')}
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#612C58'}}>
      <>
      
      
      
        <View style={{flex: 1,marginTop:70,marginHorizontal:20}}>
          <Image
            source={require('../image/yes.png')}
            style={{
              width: 310,
              height: 310,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 30,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 40,
            }}>
            Explore our Store
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              textAlign: 'center',
              marginTop: 20,
            }}>
            Lorem Ipsum is simply dummy text of the printing{'\n'} and
            typesetting industry. the industry’s standard{'\n'} dummy text ever
            since.
          </Text>


          <View style={{flexDirection: 'row', justifyContent:"space-between", alignItems:"center", position:'absolute', bottom: 60, width:"100%", }}>
            <View style={{flexDirection: 'row', }}>
              <Image
                source={require('../image/live2.png')}
                style={{width: 10, height: 10, marginLeft: 10}}
              />
              <Image
                source={require('../image/live2.png')}
                style={{width: 10, height: 10, marginLeft: 10}}
              />
              <Image
                source={require('../image/live1.png')}
                style={{width: 10, height: 10, marginLeft: 10}}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: '#F97762',
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius: 10,
              
                }}>
                <Text style={{color:'white',}}>Next</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
