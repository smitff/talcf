import React, {useEffect, Component, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

export default function SessionDetails({navigation, route}) {
  const {item} = route.params;
  console.log(
    '🚀 ~ file: SessionDetails.js ~ line 23 ~ SessionDetails ~ item',
    item,
  );

  const dispatch = useDispatch();

  const {isLoading, dashboard} = useSelector(state => ({
    isLoading: state.authReducers.isLoading,
    dashboard: state.authReducers.dashboard,
  }));

  console.log('Dashborad IN seeion page', dashboard);

  const user_id = 39;
  // const total = 20
  // const url = 'http://talc.ubicoapps.in/payment?user_id=39&order_total=34.45&payment_for=course&data={"course_id":3,"course_date":"2021-09-26","start_time":"11:00"}'

  const url =
    'http://ec2-3-144-21-115.us-east-2.compute.amazonaws.com/payment?user_id=39&order_total=34.45&payment_for=course&data={"course_id":3,"course_date":"2021-09-26","start_time":"11:00"}';

  return (
    <>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <TouchableOpacity style={{}} onPress={() => null}>
              <Image
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 20,
                  marginTop: 20,
                }}
                source={{uri: `http://talc.ubicoapps.in/${item.item.image}`}}
              />
            </TouchableOpacity>
            <View style={{}}>
              <Text style={{marginTop: 12, fontWeight: 'bold'}}>
                {item.item.title}
              </Text>
              <Text
                style={{marginTop: 12, fontWeight: 'bold', color: '#04A768'}}>
                {item.item.price}
              </Text>

              <Text style={{marginTop: 12, fontWeight: 'bold'}}>
                {item.item.description}
              </Text>

              <View
                style={{
                  width: '100%',
                  height: 107,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  marginTop: 12,
                }}>
                <View style={{marginTop: 15}}>
                  <Text
                    style={{
                      color: '#6B6B7B',
                      marginEnd: 11,
                      fontSize: 13,
                      marginHorizontal: 10,
                    }}>
                    The main goal of the first coaching session is to create a
                    plan for all of the sessions that will follow. This will
                    establish a form of contract between coach and client. This
                    will also be the intake session to lean about one{'\n'}{' '}
                    another and also gather information.
                  </Text>
                </View>
              </View>
              <Text style={{marginBottom: 12, fontWeight: 'bold'}}>
                Location & Contact Details
              </Text>
              <View
                style={{
                  width: 345,
                  height: 130,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                }}>
                <View style={{marginLeft: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <EvilIcons
                      name="location"
                      size={25}
                      style={{marginTop: 15}}
                      color="#F97762"
                    />
                    <Text
                      style={{
                        color: '#6B6B7B',
                        marginEnd: 11,
                        fontSize: 13,
                        marginTop: 15,
                        marginLeft: 4,
                      }}>
                      {item.item.address}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Feather
                      name="phone"
                      size={18}
                      style={{marginTop: 15, marginLeft: 5}}
                      color="#F97762"
                    />
                    <Text
                      style={{
                        color: '#6B6B7B',
                        marginEnd: 11,
                        fontSize: 12,
                        marginTop: 15,
                        marginLeft: 13,
                      }}>
                      {item.item.contact_number}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      style={{marginTop: 15, marginLeft: 5}}
                      color="#F97762"
                    />
                    <Text
                      style={{
                        color: '#6B6B7B',
                        marginEnd: 11,
                        fontSize: 12,
                        marginTop: 15,
                        marginLeft: 13,
                      }}>
                      {item.item.contact_email}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                    <View style={{ backgroundColor: "#F97762", width: "80%", height: 50, borderRadius: 10, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('SelectDateTimes')}>
                            <Text style={{ color: 'white', textAlign: "center", marginTop: 12 }}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
      </ScrollView>

      <View
        style={{
          backgroundColor: 'white',
          height: 90,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          marginTop: 16,
          // marginLeft:20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('SelectDateTimes', {item: item})}
          //   onPress={() => navigation.navigate('Payments', {url: url})}
          style={{
            marginBottom: 10,
            height: 50,
            backgroundColor: '#F97762',
            width: '80%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </TouchableOpacity>
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
