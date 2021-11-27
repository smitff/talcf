import React, {useEffect, Component, useState} from 'react';
import {RadioButton, CheckBox} from 'react-native-paper';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';     

import {SafeAreaView} from 'react-native-safe-area-context';
import {launchImageLibrary, launchCamera,} from 'react-native-image-picker';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { useDispatch, useSelector } from 'react-redux';
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment'
import ImagePicker from 'react-native-image-crop-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as actions from '../redux/action/actions';
export default function EditProfile({navigation}) {

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

  const dispatch = useDispatch()
  const [text, onChangeText] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')
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
    console.log('openImageLibrary');
    // launchImageLibrary(options, response => {
    //   console.log('responseresponse', response);
    //   if (response.didCancel) {
    //     console.log('User cancelled photo picker');
    //     Alert.alert('You did not select any image');
    //   } else if (response.error) { 
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     console.log('else', response.assets[0].uri);
    //     setImageSource(response.assets[0].uri);
    //     AsyncStorage.setItem('profileImage', response.assets[0].uri);
    //   }
    //   setShowPopup(false);
    // });

    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //     setImageSource(image.path);
    //     AsyncStorage.setItem('profileImage', image.path);
    //     setShowPopup(false);
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
        <View style={{height: 1, width: '100%', backgroundColor: 'grey'}} />
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

  const saveProfileData = () => {
    dispatch(actions.saveUserProfile({
      user_id:55,
      name: name,
      mobile: mobile,
      dob: dob,
      gender: 'male'
    }));
  }

  return (
    <ScrollView>
      <>
        {showPopup && showSelectionPopup()}
        <SafeAreaView
          style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center',}}>
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../image/left-arrow.png')}
                  style={{
                    height: 20,
                    width: 20,
                    color: 'black',
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  color: '#172347',
                  fontWeight: 'bold',
                  marginTop: 15,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginLeft: 100,
                }}>
                Edit Profile
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: '#cbd2d9',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
              <View style={{paddingHorizontal:20}}>
            <TouchableOpacity
              style={{alignSelf: 'center', marginTop: 20}}
              // onPress={() => setShowPopup(true)}
              onPress={() => openCamera()}
              >
              <Image
                source={{uri: imageSource}}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  backgroundColor: 'grey',
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 14,
                color: '#666F76',
                marginTop: 20,
                // marginBottom: 20,
              }}>
              Name
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderRadius: 10,
                backgroundColor: '#F2F4F7',
                justifyContent: 'center',
                marginTop:12
              }}>
              <TextInput
                style={{marginLeft:10}}
                onChangeText={setName}
                value={name}
                placeholder=""
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#666F76',
                marginTop: 12,
                // marginBottom: 20,
              }}>
              Mobile
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderRadius: 10,
                backgroundColor: '#F2F4F7',
                justifyContent: 'center',
                marginTop: 12,

              }}>
              <TextInput
                style={{marginLeft:10}}
                onChangeText={setMobile}
                value={mobile}
                placeholder=""
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#666F76',
                marginTop: 12,
                // marginBottom: 20,
              }}>
              Email
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderRadius: 10,
                backgroundColor: '#F2F4F7',
                justifyContent: 'center',
                marginTop: 12,

              }}>
              <TextInput
                style={{marginLeft:10}}
                onChangeText={setEmail}
                value={email}
                placeholder=""
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#666F76',
                marginTop: 15,
                marginBottom: 20,
              }}>
              Date of birth
            </Text>


            <TouchableWithoutFeedback onPress={toggleDatePicker}>
              <View style={{ width: "100%", height: 48, borderRadius: 10, backgroundColor: "#F2F4F7",}}>
                <View
                  style={[
                    {
                      height: 30,
                      // justifyContent: 'flex-start',
                      flexDirection: 'row',
                      alignItems: 'center',
                      // marginTop: 10,
                      // marginLeft: -20
                        alignItems:"center"
                    },
                  ]}>
                  <TextInput
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
                width: "100%",
                height: 48,
                borderRadius: 10,
                backgroundColor: '#F2F4F7',
                justifyContent: 'center',
              }}>
              <TextInput
                style={{marginLeft:10}}
                onChangeText={setDOB}
                value={dob}
                placeholder=""
              />
            </View> */}
          </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: '#666F76',
              marginTop: 15,
              marginBottom: 20,
              marginLeft: 20,
            }}>
            Gender
          </Text>
          <View style={{paddingHorizontal:20}}>
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
                borderWidth: maleSelected ? 2: 0.8,
                borderColor: maleSelected ? '#F97762' : '#F5F5F5',
              }}>
              <TouchableOpacity
                onPress={()=> setMaleSelected(true)}>
                <Image
                  source={require('../image/male.png')}
                  style={{width: 92, height: 92, marginTop: 4}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 90,
                borderWidth: maleSelected ? 0.8:2,
                borderColor: maleSelected ? '#F5F5F5' : '#F97762',
                marginLeft: 20,
              }}>
              <TouchableOpacity
                onPress={()=> setMaleSelected(false)}>
                <Image
                  source={require('../image/female.png')}
                  style={{width: 93, height: 92, marginTop: 4}}
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{color: maleSelected ? '#F97762' : '#17212A', marginLeft: 100}}>Male</Text>
            <Text style={{color: maleSelected ?  '#17212A': '#F97762', marginLeft: 80}}>Female</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 25,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
              
              <TouchableOpacity 
              activeOpacity={0.6}
              onPress={() => saveProfileData()}
              style={{
                backgroundColor: '#F97762',
                width: "100%",
                height: 48,
                borderRadius: 10,
                justifyContent:"center",
                alignItems:"center"
              }}>
            
                <Text
                  style={{color: 'white', }}>
                  Save Changes
                </Text>
              </TouchableOpacity>
          
            </View>
            </View>
        
        </SafeAreaView>
      </>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={toggleDatePicker}
        maximumDate={new Date()}
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});


