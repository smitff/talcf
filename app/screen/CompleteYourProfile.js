import React, { useEffect, Component, useState } from 'react';
import { RadioButton, CheckBox } from 'react-native-paper';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
  TouchableWithoutFeedback,

  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/action/actions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import moment from 'moment'
import ImagePicker from 'react-native-image-crop-picker';


export default function CompleteYourProfile({ navigation }) {
  const dispatch = useDispatch()
  const [imageSource, setImageSource] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')
  const [show, setShow] = React.useState("");
  const [show1, setShow1] = React.useState("");
  const [show2, setShow2] = React.useState("");

  const [maleSelected, setMaleSelected] = useState(true)

  const { profileData } = useSelector((state) => ({
    profileData: state.dashboardReducer.profileData
  }));

  useEffect(() => {
    setName(profileData?.name)
    setEmail(profileData?.email)
    setMobile(profileData?.mobile)
    setDOB(profileData?.dob)
  }, [profileData])



  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date, setDate] = useState('MM/DD/YYYY');

  const toggleDatePicker = () => {
    setIsDatePickerVisible(value => !value);
  };
  const handleConfirm = date => {
    let newdate = moment(date).format('MM/DD/YYYY');
    setDate(newdate);
    toggleDatePicker();
  };

  // const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => ({
  //     isLoading: state.dashboReducers.isLoading
  // }));

  const onUpdateUser = () =>
    dispatch(actions.updateuser({  name: name, mobile: mobile, dob: date, gender: "Male", profile: "Email" }));


  useEffect(async () => {
    const img = await AsyncStorage.getItem('profileImage');
    setImageSource(img);
  }, []);
  let options = {
    title: 'You can choose one image',
    maxWidth: 256,
    maxHeight: 256,
    storageOptions: {
      skipBackup: true,
    },
  };
  const requestPermission = () => {
    request(PERMISSIONS.IOS.CAMERA).then(result => {
      console.log('requestPermission -> result', result);
      if (result === 'granted') openCamera();
    });
  };
  const openImageLibrary = () => {
    // launchImageLibrary(options, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled photo picker');
    //     Alert.alert('You did not select any image');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     console.log(response.assets[0].uri);
    //     setImageSource(response.assets[0].uri);
    //     AsyncStorage.setItem('profileImage', response.assets[0].uri);
    //   }
    //   setShowPopup(false);
    // });
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
        setImageSource(image.path);
        AsyncStorage.setItem('profileImage', image.path);
        setShowPopup(false);
    });
  };

  const openCamera = () => {
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response);
        setImageSource(response);
        AsyncStorage.setItem('profileImage', response);
      }
      setShowPopup(false);
    });
  };

  const showSelectionPopup = () => (
    <TouchableOpacity
      onPress={() => setShowPopup(false)}
      style={{
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 10,
        height: '100%',
        width: '100%',
      }}>
      <View
        style={{
          height: 150,
          width: 300,
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={requestPermission}
          style={{
            height: 70,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Open Camera</Text>
        </TouchableOpacity>
        <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }} />
        <TouchableOpacity
          onPress={openImageLibrary}
          style={{
            height: 70,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Open Image Library</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // const saveProfileData = () => {
  //   dispatch(actions.saveUserProfile({
  //     // user_id: 39,
  //     name: name,
  //     mobile: mobile,
  //     dob: dob,
  //     gender: 'male'
  //   }));
  // }


  const nameValidate = (text) => {
    setName(text)
    console.log("eee", name)
    let reg = /^[a-zA-Z\d]{2,12}$/i;
    if (reg.test(name) === true)
      setShow("");
    else
      setShow("Name  is not correct");
  }

  const mobileValidate = (text) => {
    console.log("eee", mobile)
    // let reg = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    let reg = /^\d{10}$/
    if (reg.test(mobile) === true)
      setShow1("");
    else
      setShow1("Number  is not correct");
  }

  useEffect(() => {
    mobileValidate();
  }, [mobile])

  const validateEmail = (text) => {
    setEmail(text)
    console.log("eee", email)
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    if (reg.test(email) === true)
      setShow2("");
    else
      setShow2("Email  is not correct");

  }

  const DOBValidate = (dob) => {
    let reg = /^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    if (reg.test(dob) === false)
      return "Please Enter Valid DOB";
    else
      return
  }


  return (
    <ImageBackground
      source={require('../image/background.png')}
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#612C58' }}>

      <ScrollView>
        {showPopup && showSelectionPopup()}

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>

          <View style={{ flexDirection: 'row', marginTop: 48, width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../image/arrow.png')}
                style={{ height: 18, width: 18 }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
                fontWeight: 'bold',
                marginLeft: 12
              }}>
              Complete Your Profile
            </Text>

            <View
              style={{
                width: 70,
                height: 36,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    justifyContent: 'center',
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{ width: 100, height: 100, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: "white", marginTop: 25 }}
            onPress={() => setShowPopup(true)}>
            <Image
              source={{ uri: imageSource }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'grey',
              }}
            />
          </TouchableOpacity>
          <View style={{ width: '100%' }}>
            <Text
              style={{
                fontSize: 14,
                color: '#E8DEE6',
                marginTop: 20,
                
              }}>
              Name
            </Text>
            
            <View
              style={{
                width: '100%',
                height: 48,
                borderRadius: 10,
                backgroundColor: '#ffff',
                justifyContent: 'center',
                marginTop: 12,
              }}>
                
              <TextInput
              style={{marginLeft:5}}
                onChangeText={(text) => nameValidate(text)}
                value={name}
                placeholder=""
                
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#E8DEE6',
                // marginTop: 30,
                
              }}>
              {show}
            </Text>
            
            <Text
              style={{
                fontSize: 14,
                color: '#E8DEE6',
                marginTop: 12,
                // marginBottom: 20,
              }}>
              Mobile
            </Text>
            <View
              style={{
                width: '100%',
                height: 48,
                borderRadius: 10,
                backgroundColor: '#ffff',
                justifyContent: 'center',
                marginTop: 12
              }}>
              <TextInput
               style={{marginLeft:5}}
                onChangeText={(text) => setMobile(text)}
                value={mobile}
                placeholder=""
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#E8DEE6',
                // marginTop: 30,
                
              }}>
              {show1}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#E8DEE6',
                marginTop: 12,

              }}>
              Email
            </Text>
            <View
              style={{
                width: '100%',
                height: 48,
                borderRadius: 10,
                backgroundColor: '#ffff',
                justifyContent: 'center',
                marginTop: 12
              }}>
              <TextInput
                 style={{marginLeft:5}}
                onChangeText={(text) => validateEmail(text)}
                value={email}
                placeholder=""
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#E8DEE6',
                // marginTop: 30,
                
              }}>
              {show2}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#E8DEE6',
                marginTop: 12,

              }}>
              Date of birth
            </Text>

            <TouchableWithoutFeedback onPress={toggleDatePicker}>
              <View style={{ width: "100%", height: 48, borderRadius: 10, backgroundColor: "#ffff", marginTop: 12 }}>
                <View
                  style={[
                    {
                      height: 30,
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                      // marginLeft: -20

                    },
                  ]}>
                  <TextInput
                   style={{marginLeft:5}}
                    onChangeText={(e) => setdob(e)}
                    value={dob}
                    placeholder=""
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      // fontFamily: 'Montserrat-SemiBold',
                      color: '#999999',

                    }}>
                    {date}
                  </Text>
                  <AntDesignIcon
                    name="calendar"
                    style={{ position: "absolute", right: 5, }}
                    size={20}
                    color="#999999"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>

            {/* <View
                  style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 10,
                    backgroundColor: '#ffff',
                    justifyContent: 'center',
                    marginTop:12
                  }}>
                  <TextInput
                    onChangeText={(text)=>dobValidate(text)}
                    value={dob}
                    placeholder=""
                  />
                </View> */}
          </View>

          <Text
            style={{
              fontSize: 14,
              color: '#E8DEE6',
              marginTop: 15,
              width: '100%'
            }}>
            Gender
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 90,
                borderWidth: maleSelected ? 2 : 0.1,
                borderColor: maleSelected ? '#F97762' : '#F5F5F5',
              }}>
              <TouchableOpacity
                onPress={() => setMaleSelected(true)}>
                <Image
                  source={require('../image/male.png')}
                  style={{ width: 92, height: 92, marginTop: 2, marginLeft: 2 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 90,
                borderWidth: maleSelected ? 0.1 : 2,
                borderColor: maleSelected ? '#F5F5F5' : '#F97762',
                marginLeft: 20,
              }}>
              <TouchableOpacity
                onPress={() => setMaleSelected(false)}>
                <Image
                  source={require('../image/female.png')}
                  style={{ width: 92, height: 92, marginLeft: 2, marginTop: 2 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ color: maleSelected ? '#F97762' : '#F5F5F5', marginRight: 40 }}>Male</Text>
            <Text style={{ color: maleSelected ? '#F5F5F5' : '#F97762', marginLeft: 40 }}>Female</Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,

              }}>
              <View
                style={{
                  backgroundColor: '#F97762',
                  width: '100%',
                  height: 48,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <TouchableOpacity

                  onPress={onUpdateUser}>
                  <Text
                    style={{
                      color: 'white',
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={toggleDatePicker}
        maximumDate={new Date()}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});












