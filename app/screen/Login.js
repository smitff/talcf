import React, {useEffect, Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import * as actions from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [checked, setChecked] = React.useState('first');

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => ({
    isLoading: state.authReducers.isLoading,
  }));

  const onLogin = () => dispatch(actions.login({email, password}));

  const performSkip = async() => {
     const loginStatus = await AsyncStorage.getItem('isLoggedIn') 
     if (loginStatus === "true") {
       navigation.navigate('BottomNavi')
     } 
  }

  
  return (
    <ImageBackground
      source={require('../image/background.png')}
      style={{flex: 1,backgroundColor: '#612C58'}}>
      <>
          <View style={{flex:1,marginHorizontal: 20}}>
            <SafeAreaView>
            <View style={{flexDirection: 'row', justifyContent:"space-between",marginTop:15}}>
              <Image
                source={require('../image/logo.png')}
                style={{width: 142.22, height: 60, }}
              />
              <TouchableOpacity
                onPress={() => performSkip()}
                style={{
                  width: 70,
                  height: 36,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: 10,
                  marginTop: 12,
                  justifyContent:"center"
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>
            </View>

              <Image
                source={require('../image/login1.png')}
                style={{width: 150, height: 83,marginTop: 60}}
              />
              <View
                style={{flexDirection: 'row', marginTop: 25, }}>
                <Text style={{fontSize: 14, color: '#E8DEE6'}}>
                  If you are new?
                </Text>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Singup")}>
                <Text style={{fontSize: 14, color: '#F97762',fontWeight:"bold"}}>
                  {' '}
                  Create an Account
                </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: '#E8DEE6',
                  marginTop: 60,
                
                }}>
                Email
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  justifyContent:"center",
                  marginTop:20,
                  
                }}>
                <TextInput
                style={{marginLeft:10}}
                  onChangeText={e => setemail(e)}
                  value={email}
                  placeholder=""
                  
                />
              </View>
               <Text
                style={{
                  fontSize: 14,
                  color: '#E8DEE6',
                  marginTop: 15,
                  marginBottom: 20,
                }}>
                Password
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  justifyContent:"center",
                   
                }}>
                <TextInput
                style={{marginLeft:10}}
                  onChangeText={e => setpassword(e)}
                  value={password}
                  placeholder=""
                   secureTextEntry={true}
                />
              </View> 
            <View>
              <View style={{flexDirection: 'row', marginTop: 35,justifyContent:"space-between"}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Forgot Password')}>
                  <Text
                    style={{ color: '#FFFFFF', marginTop: 15}}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  
                  }}>
                    <TouchableOpacity onPress={onLogin}
                    activeOpacity={0.4}
                    style={{
                      backgroundColor: '#F97762',
                      width: 116,
                      height: 48,
                      borderRadius: 10,
                      justifyContent:'center',
                      alignItems:"center",
                    }}>
                      <Text
                        style={{
                          color: 'white',
                        }}>
                        Login
                      </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            </SafeAreaView>
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
