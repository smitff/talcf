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
  ScrollView,
} from 'react-native';
import * as actions from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Signup({navigation}) {
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [ConfirmPassword, setConfirmPassword] = React.useState('');
  const [checked, setChecked] = React.useState('first');

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => ({
    isLoading: state.authReducers.isLoading,
  }));
  const onRegister = () => dispatch(actions.register({name, email, password}));

  return (
    <ImageBackground
      source={require('../image/background.png')}
      style={{flex: 1, backgroundColor: '#612C58'}}>
      <>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../image/arrow.png')}
                style={{height: 18, width: 18, marginTop: 15}}
              />
            </TouchableOpacity>

            <View style={{marginTop: 50}}>
              <Text
                style={{fontSize: 26, color: '#FFFFFF', fontWeight: 'bold'}}>
                Create an Account
              </Text>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Text style={{fontSize: 14, color: '#E8DEE6'}}>
                  Have an account ?{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{fontSize: 14, color: '#F97762'}}> Login</Text>
                </TouchableOpacity>
              </View>
              <Text style={{fontSize: 14, color: '#E8DEE6', marginTop: 30}}>
                Name
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{marginLeft: 10}}
                  onChangeText={e => setname(e)}
                  value={name}
                  placeholder=""
                  keyboardType="name-phone-pad"
                />
              </View>
              <Text style={{fontSize: 14, color: '#E8DEE6', marginTop: 15}}>
                Email
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{marginLeft: 10}}
                  onChangeText={e => setemail(e)}
                  value={email}
                  placeholder=""
                  keyboardType="name-phone-pad"
                />
              </View>
              <Text style={{fontSize: 14, color: '#E8DEE6', marginTop: 15}}>
                Password
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{marginLeft: 10}}
                  onChangeText={e => setpassword(e)}
                  value={password}
                  placeholder=""
                  secureTextEntry={true}
                />
              </View>
              <Text style={{fontSize: 14, color: '#E8DEE6', marginTop: 15}}>
                Confirm Password
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TextInput
                  style={{marginLeft: 10}}
                  onChangeText={e => setConfirmPassword(e)}
                  value={ConfirmPassword}
                  placeholder=""
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 25,
                }}>
                <TouchableOpacity
                  onPress={onRegister}
                  style={{
                    backgroundColor: '#F97762',
                    width: '100%',
                    height: 48,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      marginTop: 12,
                    }}>
                    Create My Account
                  </Text>
                </TouchableOpacity>
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

// import React, {useEffect, Component, useState} from 'react';
// import {RadioButton, CheckBox} from 'react-native-paper';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   Image,
//   ScrollView,
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// export default function Singup({navigation}) {
//   const [text, onChangeText] = React.useState(null);

//   return (
//     <ImageBackground
//       source={require('../image/background.png')}
//       style={{flex: 1, justifyContent: 'center', backgroundColor: '#612C58'}}>
//       <ScrollView>
//         <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
//           <View
//             style={{
//               marginHorizontal: 12,
//               marginTop: 30,
//               justifyContent: 'center',
//               alignSelf: 'center',
//             }}>
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//               <Image
//                 source={require('../image/arrow.png')}
//                 style={{height: 20, width: 20, marginTop: 30}}
//               />
//             </TouchableOpacity>
//             <View style={{marginTop: 40}}>
//               <Text
//                 style={{fontSize: 26, color: '#FFFFFF', fontWeight: 'bold'}}>
//                 Create an Account
//               </Text>
//               <View style={{flexDirection: 'row', marginTop: 15}}>
//                 <Text style={{fontSize: 14, color: '#E8DEE6'}}>
//                   Have an account ?{' '}
//                 </Text>
//                 <Text style={{fontSize: 14, color: '#F97762'}}> Login</Text>
//               </View>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#E8DEE6',
//                   marginTop: 40,
//                   marginBottom: 20,
//                 }}>
//                 Name
//               </Text>
//               <View
//                 style={{
//                   width: 335,
//                   height: 48,
//                   borderRadius: 10,
//                   backgroundColor: '#ffff',
//                   justifyContent: 'center',
//                 }}>
//                 <TextInput
//                   onChangeText={onChangeText}
//                   value={text}
//                   placeholder=""
//                 />
//               </View>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#E8DEE6',
//                   marginTop: 15,
//                   marginBottom: 20,
//                 }}>
//                 Email
//               </Text>
//               <View
//                 style={{
//                   width: 335,
//                   height: 48,
//                   borderRadius: 10,
//                   backgroundColor: '#ffff',
//                   justifyContent: 'center',
//                 }}>
//                 <TextInput
//                   onChangeText={onChangeText}
//                   value={text}
//                   placeholder=""
//                 />
//               </View>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#E8DEE6',
//                   marginTop: 15,
//                   marginBottom: 20,
//                 }}>
//                 Password
//               </Text>
//               <View
//                 style={{
//                   width: 335,
//                   height: 48,
//                   borderRadius: 10,
//                   backgroundColor: '#ffff',
//                   justifyContent: 'center',
//                 }}>
//                 <TextInput
//                   onChangeText={onChangeText}
//                   value={text}
//                   placeholder=""
//                 />
//               </View>
//               <Text
//                 style={{
//                   fontSize: 14,
//                   color: '#E8DEE6',
//                   marginTop: 15,
//                   marginBottom: 20,
//                 }}>
//                 Confirm Password
//               </Text>
//               <View
//                 style={{
//                   width: 335,
//                   height: 48,
//                   borderRadius: 10,
//                   backgroundColor: '#ffff',
//                   justifyContent: 'center',
//                 }}>
//                 <TextInput
//                   onChangeText={onChangeText}
//                   value={text}
//                   placeholder=""
//                 />
//               </View>
//             </View>
//             <View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   marginTop: 25,
//                   marginBottom: 30,
//                 }}>
//                 <View
//                   style={{
//                     backgroundColor: '#F97762',
//                     width: 335,
//                     height: 48,
//                     borderRadius: 10,
//                     marginBottom: 140,
//                   }}>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('CompleteYourProfile')}>
//                     <Text
//                       style={{
//                         color: 'white',
//                         textAlign: 'center',
//                         marginTop: 12,
//                       }}>
//                       Create My Account
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
// });
