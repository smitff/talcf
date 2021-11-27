import React, { useEffect, Component, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import * as actions from '../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function CreatePassword({ navigation }) {

  const [text, onChangeText] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [cPassword, setCPassword] = React.useState(null);
  const [checked, setChecked] = React.useState('first');


  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => ({
    isLoading: state.authReducers.isLoading
  }));

  const onComplete = (res) => {
    console.log(res)
  }
  const onCreatePassword = () => {
    dispatch(actions.CreatePassword());
  }


  return (
    <ImageBackground source={require('../image/background.png')} style={{ flex: 1, justifyContent: 'center', backgroundColor: "#612C58" }}>
      <>
        <View style={{ flex: 1, marginHorizontal:20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../image/arrow.png')}
                style={{height: 18, width: 18,marginTop:58, }}
              />
            </TouchableOpacity>
          <View style={{ }}>
            <View style={{ marginTop: 40, }}>
              <Text style={{ fontSize: 26, color: "#FFFFFF", marginTop:15, fontWeight: "bold" }}>Create New Password</Text>
              <Text style={{ fontSize: 12, color: "#FFFFFF", marginTop: 15, }}>Enter your new password</Text>
              <Text style={{ fontSize: 14, color: "#E8DEE6", marginTop: 30, }}>Password</Text>
              <View style={{ width: "100%", height: 48, borderRadius: 10, backgroundColor: "#ffff" ,justifyContent:"center",marginTop:15}}>
                <TextInput
                style={{marginLeft:10}}

                  onChangeText={setPassword}
                  value={password}
                  placeholder=""
                   secureTextEntry={true}
                />
              </View>
              <Text style={{ fontSize: 14, color: "#E8DEE6", marginTop: 15, marginBottom: 10 }}>Confirm Password</Text>
              <View style={{ width: "100%", height: 48, borderRadius: 10, backgroundColor: "#ffff",justifyContent:"center" }}>
                <TextInput
                style={{marginLeft:10}}

                  onChangeText={setCPassword}
                  value={cPassword}
                  placeholder=""
                   secureTextEntry={true}
                />
              </View>
            </View>
            
            <View>
              <View style={{ flexDirection: "row", marginTop: 35 }}>
                <View style={{ backgroundColor: "#F97762", width: "100%", height: 48, borderRadius: 10 ,justifyContent:"center",alignItems:'center'}}>
                  <TouchableOpacity onPress={onCreatePassword}>
                    <Text style={{ color: 'white',}}>Create Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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








// import React, { useEffect, Component, useState } from 'react';

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

// export default function CreatePassword({ navigation }) {

//   const [text, onChangeText] = React.useState(null);
//   const [checked, setChecked] = React.useState('first');

//   return (
//     <ImageBackground source={require('../image/background.png')} style={{ flex: 1, justifyContent: 'center', backgroundColor: "#612C58" }}>
//         <View style={{ flex: 1}}>
//             <TouchableOpacity
//               onPress={() => navigation.goBack()}>
//                 <Image source={require('../image/arrow.png')}
//                   style={{ height: 18, width: 18, marginTop: 58, marginLeft: 15 }} />
//             </TouchableOpacity>

//           <View style={{ marginHorizontal: 15, justifyContent: "center" }}>

//             <View style={{ marginTop: 50 }}>
//               <Text style={{ fontSize: 26, color: "#FFFFFF", marginBottom: 20, fontWeight: "bold" }}>Create New Password</Text>
//               <Text style={{ fontSize: 12, color: "#FFFFFF" }}>Enter your new password</Text>
//               <Text style={{ fontSize: 14, color: "#E8DEE6", marginTop: 15, marginBottom: 10 }}>Password</Text>
//               <View style={{ width: 335, height: 48, borderRadius: 10, backgroundColor: "#ffff", justifyContent: "center" }}>
//                 <TextInput
//                   onChangeText={onChangeText}
//                   value={text}
//                   placeholder=""
//                 />
//               </View>
//               <Text style={{ fontSize: 14, color: "#E8DEE6", marginTop: 15, marginBottom: 10 }}>Confirm Password</Text>
//               <View style={{ width: 335, height: 48, borderRadius: 10, backgroundColor: "#ffff", justifyContent: "center" }}>
//                 <TextInput
//                   onChangeText={onChangeText}
//                   value={text}
//                   placeholder=""
//                 />
//               </View>
//             </View>
//             <View>
//               <View style={{ flexDirection: "row", marginTop: 25 }}>
                
//                   <TouchableOpacity 
//                   style={{ backgroundColor: "#F97762", width: 335, height: 48, borderRadius: 10 ,alignItems:"center",justifyContent:"center"}}
//                   onPress={() => navigation.navigate('CompleteYourProfile')}>
//                     <Text style={{ color: 'white',  }}>Create Password</Text>
//                   </TouchableOpacity>
              
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

