import React, { useEffect, Component, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  SafeAreaView
} from 'react-native';
import * as actions from '../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { URL } from '../helper/Const';


export default function Login({ navigation }) {

  const [email, setemail] = React.useState(null);
  const [checked, setChecked] = React.useState('first');
  const dispatch = useDispatch();

  const forgot = () =>
    dispatch(actions.forgotPassword());

  return (
    <ImageBackground source={require('../image/background.png')} style={{ flex: 1, justifyContent: 'center', backgroundColor: "#612C58" }}>
      <>
        <View style={{ flex: 1, }}>
          <SafeAreaView>
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../image/arrow.png')}
                style={{ height: 18, width: 18, marginTop: 12, }}
              />
            </TouchableOpacity>

            <Text style={{ fontSize: 26, color: "#FFFFFF", marginBottom: 20, fontWeight: "bold", marginTop: 50, }}>Forgot Password</Text>
            <Text style={{ fontSize: 13, color: "#FFFFFF" }}>Enter your email id to below. We will send a password{'\n'}reset code to your email id</Text>
            <Text style={{ fontSize: 14, color: "#E8DEE6", marginTop: 20, marginBottom: 20 }}>Email</Text>
            <View style={{ width: "100%", height: 48, borderRadius: 10, backgroundColor: "#ffff" ,justifyContent:"center"}}>
              <TextInput
                style={{marginLeft:10}}

                onChangeText={(e) => setemail(e)}
                value={email}
                placeholder=""
                keyboardType="name-phone-pad"
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <View style={{ backgroundColor: "#F97762", width: "100%", height: 48, borderRadius: 10 ,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity onPress={forgot}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('ResetCode')}> */}
                  <Text style={{ color: 'white', }}>Send Code</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
          </SafeAreaView>
        </View>
      </>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

});















//   return (
//     <ImageBackground
//       source={require('../image/background.png')}
//       style={{flex: 1,  backgroundColor: '#612C58'}}>
//       <>
//         <View
//           style={{
//             flex: 1,
//             marginHorizontal:20
//           }}>
//           <View style={{}}>
            // <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image
            //     source={require('../image/arrow.png')}
            //     style={{height: 18, width: 18,marginTop:58, }}
            //   />
            // </TouchableOpacity>

//             <Text
//               style={{
//                 fontSize: 26,
//                 color: '#FFFFFF',
//                 marginTop:50,
//                 fontWeight: 'bold',

//               }}>
//               Forgot Password
//             </Text>
//             <Text style={{fontSize: 13, color: '#FFFFFF',marginTop:14,}}>
//               Enter your email id to below. We will send a password{'\n'}reset
//               code to your email id
//             </Text>

//             <Text
//               style={{
//                 fontSize: 14,
//                 color: '#E8DEE6',
//                 marginTop: 14,


//               }}>
//               Email
//             </Text>
//             <View
//               style={{
//                 width: "100%",
//                 height: 48,
//                 borderRadius: 10,
//                 backgroundColor: '#ffff',
//                 justifyContent: 'center',

//                 marginTop:12

//               }}>
//               <TextInput
//                 onChangeText={onChangeText}
//                 value={text}
//                 placeholder=""
//               />
//             </View>
//             <View>
//               <View style={{flexDirection: 'row', marginTop: 25}}>
//                 <View
//                   style={{
//                     backgroundColor: '#F97762',
//                     width: "100%",
//                     height: 48,
//                     borderRadius: 10,
//                     justifyContent:"center",
//                     alignItems:"center"


//                   }}>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('ResetCode')}>
//                     <Text
//                       style={{
//                         color: 'white',
//                         // textAlign: 'center',
//                         // marginTop: 12,
//                       }}>
//                       Send Code
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
// });
