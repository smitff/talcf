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

import {ScrollView} from 'react-native-gesture-handler';
import * as actions from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

export default function Profile({navigation}) {
  const [profileImg, setProfileImg] = useState('');

  useFocusEffect(async () => {
    const img = await AsyncStorage.getItem('profileImage');
    console.log('profileprofile', img);
    setProfileImg(img);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('profileData -> useEffect');
    dispatch(actions.getUserProfile());
  }, []);

  const {profileData, profileLoader} = useSelector(state => ({
    profileData: state.dashboardReducer.profileData,
    profileLoader: state.dashboardReducer.profileLoader,
  }));

  useEffect(() => {
    console.log('profileData -> profileData', profileData);
  }, [profileData, profileLoader]);

  const performLogout = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F5F5',
          // justifyContent: 'center',
          // alignItems:"center",
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            width: '100%',
            height: 140,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            marginTop: 20,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row', marginTop: -30}}>
            <TouchableOpacity>
              {profileImg && profileImg !== '' ? (
                <Image
                  source={{uri: profileImg}}
                  style={{
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 30,
                    marginLeft: 15,
                  }}
                />
              ) : (
                <Image
                  source={require('../image/edit.png')}
                  style={{
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 30,
                    marginLeft: 15,
                  }}
                />
              )}
            </TouchableOpacity>
            <Text
              style={{
                color: '#17212A',
                marginEnd: 11,
                fontSize: 18,
                marginLeft: 14,
                marginTop: 40,
                fontWeight: 'bold',
              }}>
              {profileData.name}
            </Text>
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row', marginLeft: 110, marginTop: -40}}
            onPress={() =>
              navigation.navigate('EditProfile', {profileData: profileData})
            }>
            <Text
              style={{
                color: '#F97762',
                marginEnd: 11,
                fontSize: 12,
              }}>
              Edit Profile
            </Text>
            <Image
              source={require('../image/left.png')}
              style={{
                width: 10,
                height: 15,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 400,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            marginTop: 20,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View style={{}}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('MyOrders')}>
              <View style={{flexDirection: 'row'}}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('MyOrders')}> */}
                <Text style={{marginLeft: 10}}>My Orders</Text>
                {/* </TouchableOpacity> */}
                <Image
                  source={require('../image/left.png')}
                  style={{
                    width: 10,
                    height: 15,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>
            </TouchableOpacity>

            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#DEE5EB',
                borderRadius: 20,
                marginTop: 20,
                justifyContent: 'center',
                alignSelf: 'center',
              }}></View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('Choose/Add Address')}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{marginLeft: 10}}>My Address</Text>

                <Image
                  source={require('../image/left.png')}
                  style={{
                    width: 10,
                    height: 15,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#DEE5EB',
                borderRadius: 20,
                marginTop: 20,
                justifyContent: 'center',
                alignSelf: 'center',
              }}></View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('ChangePassword')}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{marginLeft: 10}}>Change Password</Text>
                <Image
                  source={require('../image/left.png')}
                  style={{
                    width: 10,
                    height: 15,
                    // justifyContent: 'center',
                    // alignSelf: 'center',
                    // marginLeft: 170,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#DEE5EB',
                borderRadius: 20,
                marginTop: 20,
                // justifyContent: 'center',
                // alignSelf: 'center',
              }}></View>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={{marginLeft: 10}}>About App</Text>
                </TouchableOpacity>
                <Image
                  source={require('../image/left.png')}
                  style={{
                    width: 10,
                    height: 15,
                    // justifyContent: 'center',
                    // alignSelf: 'center',
                    // marginLeft: 220,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#DEE5EB',
                borderRadius: 20,
                marginTop: 20,
                // justifyContent: 'center',
                // alignSelf: 'center',
              }}></View>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{marginLeft: 10}}>Terms & Conditions</Text>

                <Image
                  source={require('../image/left.png')}
                  style={{
                    width: 10,
                    height: 15,
                    // justifyContent: 'center',
                    // alignSelf: 'center',
                    // marginLeft: 162,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#DEE5EB',
                borderRadius: 20,
                marginTop: 20,
                justifyContent: 'center',
                alignSelf: 'center',
              }}></View>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{marginLeft: 10}}>Privacy Policy</Text>

                <Image
                  source={require('../image/left.png')}
                  style={{
                    width: 10,
                    height: 15,
                    // justifyContent: 'center',
                    // alignSelf: 'center',
                    // marginLeft: 195,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#DEE5EB',
                borderRadius: 20,
                marginTop: 20,
                // justifyContent: 'center',
                // alignSelf: 'center',
              }}></View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => performLogout()}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{color: '#F25F5F', marginLeft: 10}}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
