import React, { useEffect, Component, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,

} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Slick from 'react-native-slick';
import { SliderBox } from 'react-native-image-slider-box';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import CircularProgress from "react-native-circular-progress-indicator"
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/action/actions';
import { navigationRef } from '../navigations/navigationref';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [sessionCompleted, setSessionCompleted] = useState(10)
  const [totalSession, setTotalSession] = useState(40)
  const [courseDuration, setCourseDuration] = useState(0)
  const [coursefee, setCoursefee] = useState(0)
  const dispatch = useDispatch();
  const [profileImg, setProfileImg] = useState('');


  const [name, setName] = useState('')

  const { profileData } = useSelector((state) => ({
    profileData: state.dashboardReducer.profileData
  }));

  const { isLoading, dashboard } = useSelector((state) => ({
    isLoading: state.authReducers.isLoading,
    dashboard: state.authReducers.dashboard
  }));
  console.log("🚀 ~ file: Dashboard.js ~ line 32 ~ const{isLoading,dashboard}=useSelector ~ dashboard", dashboard)

  const onDashboard = () =>
    dispatch(actions.dashboard());


  useEffect(() => {
    dispatch(actions.getOrder());
  }, [])

  const {  getOrderList } = useSelector((state) => ({
    getOrderList: state.dashboardReducer.getOrderList,
  }));

  useEffect(()=>{
    console.log('getOrderlist',getOrderList?.user_course?.[0]?.duration)
  },[getOrderList])


  useEffect(() => {
    dispatch(actions.getUserProfile());
    onDashboard()
  }, [])

  // useFocusEffect(async () => {
  //   const img = await AsyncStorage.getItem('profileImage');
  //   console.log('profileprofile', img);
  //   setProfileImg(img);
  // })

  useEffect(() => {
    console.log("profileData", profileData)
  }, [profileData]
  )

  // When the variable inside the array changes
  useEffect(() => {
    const challenge = dashboard?.challenge?.[0] ?? {}
    setCoursefee(challenge.price ?? 0)
    setCourseDuration(challenge?.duration ?? 0)
    console.log("🚀 ~ file: Dashboard.js ~ line 47 ~ useEffect ~ challenge", challenge)
  }, [dashboard])

  const _renderItem = ({ item }) => {
    console.log("item", item)

    return (
      <View style={{ height: 200, marginHorizontal: 10 }}>
        <Image style={{ width: 200, height: 123, borderRadius: 10 }}
          source={{ uri: `http://talc.ubicoapps.in/${item.image}` }}
        />
        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>{item.title}</Text>
        <Text style={{ fontSize: 12, marginTop: 5, color: "red" }}>${item.price}</Text>

      </View>
    );
  };

  const _keyExtractor = (item, index) => item.key;



  const _renderItem1 = ({ item }) => {
    console.log("item", item)
    return (
      <View style={{ height: 200, marginHorizontal: 10 }}>
        <Image style={{ width: 200, height: 123, borderRadius: 10 }}
          source={{ uri: `http://talc.ubicoapps.in/${item.image}` }}
        />
        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>{item.name}</Text>
        <Text style={{ fontSize: 12, marginTop: 5, color: "red" }}>${item.price}</Text>

      </View>
    );
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: '#0000001F' }}>
        <SafeAreaView>
          <View style={{ padding: 20 }}>
            <View
              style={{ height: 50, width: "100%", marginTop: 20, flexDirection: "row", justifyContent: "center" }}>
              <View style={{ height: 50, width: "70%", justifyContent: "center", flexDirection: "row", marginTop: 10 }}>

                <Text
                  style={{
                    fontSize: 24,
                    color: 'Black',
                    fontWeight: 'bold',
                    marginLeft: 20,
                  }}>
                  Hello,
                </Text>

                <View style={{ height: 50, width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#F97762',
                      fontWeight: 'bold',
                      // marginTop: 50,
                      marginLeft: 5,
                    }}>
                    {profileData?.name}
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", width: "30%", height: 50, marginLeft: 10, justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    width: "40%",
                    height: 40,
                    backgroundColor: "white",
                    borderRadius: 10,
                    // marginTop: 10,
                    // marginLeft: 10,
                    // marginTop: 45,
                    // justifyContent: 'center',
                    justifyContent: "center", alignItems: "center"
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Notification")}>
                    <Image
                      source={require('../image/dashboard.png')}
                      style={{ width: 18, height: 19, }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: "50%", height: 50,
                    justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 5
                  }}>


                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}>
                    {profileImg && profileImg !== '' ? (
                      <Image
                        source={{ uri: profileImg }}
                        style={{ width: 38, height: 38, }}
                      />
                    ) : (
                      <Image
                        source={require('../image/edit.png')}
                        style={{ width: 38, height: 38, }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                width: 335,
                height: 180,
                backgroundColor: '#fff',
                borderRadius: 15,
                marginTop: 20,
                marginHorizontal: 8
              }}>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'center',
                }}>

                <Text style={{ color: '#9B9BA8' }}>Course Duration</Text>
                <Text style={{ marginLeft: 10, color: '#9B9BA8' }}>
                  Session Left
                </Text>
                <Text style={{ marginLeft: 10, color: '#9B9BA8' }}>
                  Course Fee
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>

                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 1,
                  }}>
                  {getOrderList?.user_course?.[0]?.duration}
                </Text>

                <Text
                  style={{
                    marginLeft: 10,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 40,
                  }}>
                  {sessionCompleted}/{totalSession}
                </Text>

                <Text
                  style={{
                    marginLeft: 10,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 60,
                  }}>
                  {coursefee}
                </Text>

              </View>

              <View
                style={{
                  width: 335,
                  height: 1,
                  backgroundColor: '#0000000F',
                  marginTop: 20,
                  marginBottom: 20,
                }}>

                </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#F97762',
                    marginLeft: 50,
                    marginBottom: 6,
                  }}>
                  My Life Group 1
                </Text>
                <View style={{ marginLeft: 80, marginTop: -10 }}>

                  <CircularProgress value={totalSession === 0 ? 0 : parseInt(sessionCompleted * 100 / totalSession)}
                    strokeWidth={90}
                    radius={40}
                    duration={2000}
                    activeStrokeColor={'#F97762'}
                    inActiveStrokeColor={'grey'}
                    inActiveStrokeOpacity={0.2}
                    textColor={'black'}
                    valueSuffix={'%'}
                    fontSize={14}
                    onAnimationComplete={() => { console.log('callback') }}
                    textStyle={{ fontWeight: 'bold', color: 'yellow' }}
                  />

                </View>

              </View>
              <Text
                style={{
                  fontSize: 12,
                  color: '#9B9BA8',
                  marginLeft: 50,
                  marginTop: -30,
                }}>
                Brief introduction of courses
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Text
                style={{
                  color: '#1C1F21',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Popular Sessions
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Sessions")}>
                <Text
                  style={{
                    color: '#F97762',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginLeft: 130,
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal
              style={{ marginTop: 10 }}
              nestedScrollEnabled
              data={dashboard?.course}
              showsVerticalScrollIndicator={false}
              keyExtractor={_keyExtractor}
              renderItem={_renderItem}
              showsHorizontalScrollIndicator={false}
            />

            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  marginTop: 10,
                  marginLeft: 10,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Store
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Store")}>

                <Text
                  style={{
                    fontSize: 14,
                    color: '#F97762',
                    marginTop: 10,
                    marginLeft: 10,
                    fontWeight: 'bold',
                    marginLeft: 225,
                  }}>

                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              style={{ marginTop: 10 }}
              nestedScrollEnabled
              data={dashboard?.store}
              showsVerticalScrollIndicator={false}
              keyExtractor={_keyExtractor}
              renderItem={_renderItem1}
              showsHorizontalScrollIndicator={false}
            />

          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});


















