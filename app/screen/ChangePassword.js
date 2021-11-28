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
import * as actions from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function ChangePassword({navigation}) {
  const [Oldpassword, setoldpassword] = React.useState('');
  const [Newpassword, setNewpassword] = React.useState('');
  const [ConfirmNewPassword, setConfirmNewpassword] = React.useState('');

  const dispatch = useDispatch();

  const passwordChange = () =>
    dispatch(
      actions.changePassword({
        Oldpassword: Oldpassword,
        Newpassword: Newpassword,
        ConfirmNewPassword: ConfirmNewPassword,
      }),
    );

  return (
    <>
      <View
        style={{
          height: '50%',
          width: '100%',
          backgroundColor: '#ffffff',

          alignSelf: 'center',
        }}>
        <View style={{marginHorizontal: 28}}>
          <Text
            style={{
              fontSize: 14,
              color: '#666F76',
              marginTop: 15,
              marginBottom: 10,
            }}>
            Old Password
          </Text>
          <View
            style={{
              width: '100%',
              height: 48,
              borderRadius: 10,
              backgroundColor: '#F2F4F7',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{marginLeft: 10}}
              onChangeText={text => setoldpassword(text)}
              value={Oldpassword}
              placeholder=""
              secureTextEntry={true}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: '#666F76',
              marginTop: 15,
              marginBottom: 10,
            }}>
            New Password
          </Text>
          <View
            style={{
              width: '100%',
              height: 48,
              borderRadius: 10,
              backgroundColor: '#F2F4F7',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{marginLeft: 10}}
              onChangeText={text => setNewpassword(text)}
              value={Newpassword}
              placeholder=""
              secureTextEntry={true}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: '#666F76',
              marginTop: 15,
              marginBottom: 10,
            }}>
            Confirm New Password
          </Text>
          <View
            style={{
              width: '100%',
              height: 48,
              borderRadius: 10,
              backgroundColor: '#F2F4F7',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{marginLeft: 10}}
              onChangeText={text => setConfirmNewpassword(text)}
              value={ConfirmNewPassword}
              placeholder=""
              secureTextEntry={true}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row', marginTop: 35}}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => passwordChange()}
                style={{
                  backgroundColor: '#F97762',
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    // textAlign: 'center',
                    // marginTop: 12,
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
