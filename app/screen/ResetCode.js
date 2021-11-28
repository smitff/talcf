import React, {useEffect, Component, useState} from 'react';

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
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ResetCode({navigation, route}) {
  // const { email } = route.params

  const [text, onChangeText] = React.useState(null);
  const [checked, setChecked] = React.useState('first');
  const [name, setname] = React.useState('');
  const [name1, setname1] = React.useState('');
  const [name2, setname2] = React.useState('');
  const [name3, setname3] = React.useState('');
  const [name4, setname4] = React.useState('');
  const [name5, setname5] = React.useState('');

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => ({
    isLoading: state.authReducers.isLoading,
  }));

  const onComplete = res => {
    console.log(res);
  };
  const onResetCode = () => {
    // var formdata = new FormData();
    // formdata.append("email", email);
    // formdata.append("verification_code", text)
    let body = {email: 'abc@abc.com', verification_code: '12345'};
    dispatch(actions.verifyOtp({body, onComplete}));
  };

  return (
    <ImageBackground
      source={require('../image/background.png')}
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#612C58'}}>
      <>
        <View style={{flex: 1}}>
          <View style={{marginHorizontal: 20}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../image/arrow.png')}
                style={{height: 18, width: 18, marginTop: 58}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 26,
                color: '#FFFFFF',
                fontWeight: 'bold',
                marginTop: 50,
              }}>
              Password Reset Code
            </Text>
            <Text style={{fontSize: 12, color: '#FFFFFF', marginTop: 15}}>
              Enter your 6 digit code below. Sent to your email id
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#FFFFFF',
                marginTop: 30,
                marginBottom: 15,
              }}>
              Code
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={e => setname(e)}
                  value={name}
                  placeholder="4"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={e => setname1(e)}
                  value={name1}
                  placeholder="2"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={e => setname2(e)}
                  value={name2}
                  placeholder="2"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={e => setname3(e)}
                  value={name3}
                  placeholder="2"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={e => setname4(e)}
                  value={name4}
                  placeholder="7"
                  style={{textAlign: 'center'}}
                />
              </View>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  backgroundColor: '#ffff',
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  onChangeText={e => setname5(e)}
                  value={name5}
                  placeholder="7"
                  style={{textAlign: 'center'}}
                />
              </View>
            </View>

            <View>
              <View style={{flexDirection: 'row', marginTop: 25}}>
                <View
                  style={{
                    backgroundColor: '#F97762',
                    width: '100%',
                    height: 48,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('CreatePassword')}> */}
                  <TouchableOpacity onPress={onResetCode}>
                    <Text style={{color: 'white'}}>Verify Code</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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

// import React, { useEffect, Component, useState } from 'react';
// import { RadioButton, CheckBox } from 'react-native-paper';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   Image
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// export default function ResetCode({ navigation }) {

//   const [text, onChangeText] = React.useState(null);
//   const [checked, setChecked] = React.useState('first');

//   return (
//     <ImageBackground source={require('../image/background.png')} style={{ flex: 1, justifyContent: 'center', backgroundColor: "#612C58" }}>
//         <View style={{ flex: 1,}}>
//         <TouchableOpacity
//           style={{marginTop: 58, marginLeft: 20}}
//           onPress={()=>navigation.goBack()}>
//             <Image source={require('../image/arrow.png')}
//               style={{height:18,width:18, }}/>
//         </TouchableOpacity>

//           <View style={{ marginHorizontal: 20 }}>
//               <Text style={{ fontSize: 26, color: "#FFFFFF", fontWeight: "bold" ,marginTop:50}}>Password Reset Code</Text>
//               <Text style={{ fontSize: 12, color: "#FFFFFF" ,marginTop:14}}>Enter your 6 digit code below. Sent to your email id</Text>
//               <Text style={{ fontSize: 14, color: "#FFFFFF", marginTop:30 }}>Code</Text>
//               <View style={{ flexDirection: "row" }}>
//                 <View style={{ width: 48, height: 48, borderRadius: 10, marginTop:12,backgroundColor: "#ffff" ,justifyContent:"center"}}>
//                   <TextInput
//                     onChangeText={onChangeText}
//                     value={text}
//                     placeholder="4"
//                     style={{ textAlign: "center" }}
//                   />
//                 </View>
//                 <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: "#ffff", marginTop:12,marginLeft: 10,justifyContent:"center" }}>
//                   <TextInput
//                     onChangeText={onChangeText}
//                     value={text}
//                     placeholder="2"
//                     style={{ textAlign: "center" }}
//                   />
//                 </View>
//                 <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: "#ffff", marginTop:12,marginLeft: 10 ,justifyContent:"center"}}>
//                   <TextInput
//                     onChangeText={onChangeText}
//                     value={text}
//                     placeholder="2"
//                     style={{ textAlign: "center" }}
//                   />
//                 </View>
//                 <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: "#ffff", marginTop:12,marginLeft: 10 ,justifyContent:"center"}}>
//                   <TextInput
//                     onChangeText={onChangeText}
//                     value={text}
//                     placeholder="2"
//                     style={{ textAlign: "center" }}
//                   />
//                 </View>
//                 <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: "#ffff", marginTop:12,marginLeft: 10 ,justifyContent:"center"}}>
//                   <TextInput
//                     onChangeText={onChangeText}
//                     value={text}
//                     placeholder="7"
//                     style={{ textAlign: "center" }}
//                   />
//                 </View>
//                 <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: "#ffff",marginTop:12, marginLeft: 10 ,justifyContent:"center"}}>
//                   <TextInput
//                     onChangeText={onChangeText}
//                     value={text}
//                     placeholder="7"
//                     style={{ textAlign: "center" }}
//                   />
//                 </View>
//               </View>

//             <View>
//               <View style={{ flexDirection: "row", marginTop: 25 }}>
//                 <View style={{ backgroundColor: "#F97762", width: "100%", height: 48, borderRadius: 10 ,justifyContent:"center",alignItems:"center"}}>
//                   <TouchableOpacity onPress={() => navigation.navigate('CreatePassword')}>
//                     <Text style={{ color: 'white', }}>Verify Code</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },

// });
