import React, {useEffect, Component, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

export default function Checkout({navigation, route}) {
  const [userId, setUserId] = useState('');

  const {data} = route.params;
  console.log('route.params', data);
  const {item} = route.params;
  console.log('🚀 ~ file: Checkout.js ~ line 21 ~ Checkout ~ item', item);

  useEffect(async () => {
    const _userId = await AsyncStorage.getItem('user_id');
    setUserId(_userId);
  }, []);

  const getFormattedDate = () => {
    return moment(data.date, 'DD.MM.YYYY').format('YYYY-MM-DD');
  };

  const url =
    'http://talc.ubicoapps.in/payment?user_id=' +
    userId +
    '&order_total=' +
    item.item.price +
    '&payment_for=course&data={"course_id":' +
    item.item.id +
    ',"course_date":' +
    getFormattedDate() +
    ',"start_time":' +
    moment(data.time, ['h:mm A']).format('HH:mm') +
    '}';

  console.log('🚀 ~ file: Checkout.js ~ line 43 ~ Checkout ~ url', url);
  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F5F5F5',
            justifyContent: 'center',
            alignSelf: 'center',
            paddingHorizontal: 20,
          }}>
          <Image
            source={require('../image/session.png')}
            style={{
              width: 345,
              height: 160,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <View style={{marginHorizontal: 7, marginTop: 20}}>
            <Text style={{marginBottom: 12, fontWeight: 'bold'}}>
              Initial Consultation
            </Text>
            <Text
              style={{marginBottom: 12, fontWeight: 'bold', color: '#04A768'}}>
              Free
            </Text>
            <Text style={{marginBottom: 12, fontWeight: 'bold'}}>
              Date & Time
            </Text>
            <View
              style={{
                width: '100%',
                height: 80,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                marginBottom: 20,
              }}>
              <View style={{}}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign
                    name="calendar"
                    size={18}
                    style={{marginTop: 15, marginLeft: 10}}
                    color="#F97762"
                  />
                  <Text
                    style={{
                      color: '#6B6B7B',
                      marginEnd: 11,
                      fontSize: 12,
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    {data.day}
                    {data.date}`
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <MaterialIcons
                    name="access-time"
                    size={20}
                    style={{marginTop: 15, marginLeft: 10}}
                    color="#F97762"
                  />
                  <Text
                    style={{
                      color: '#6B6B7B',
                      marginEnd: 11,
                      fontSize: 12,
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    {data.time}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{marginLeft: 5, marginBottom: 12, fontWeight: 'bold'}}>
              Payment Details
            </Text>
            <View
              style={{
                marginTop: 12,
                backgroundColor: '#FFFFFF',
                width: '100%',
                height: 130,
                padding: 10,
                borderRadius: 10,
              }}>
              <View style={{height: 20, width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    height: 20,
                    width: '50%',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#6B6B7B',
                      fontSize: 12,
                      marginLeft: 12,
                    }}>
                    Sub Total
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: '50%',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text style={{position: 'absolute', right: 10}}>$0</Text>
                </View>
              </View>

              <View
                style={{
                  height: 20,
                  width: '100%',
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <View
                  style={{height: 20, width: '50%', justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: '#6B6B7B',

                      fontSize: 12,

                      marginLeft: 12,
                    }}>
                    Tax
                  </Text>
                </View>
                <View
                  style={{height: 20, width: '50%', justifyContent: 'center'}}>
                  <Text
                    style={{
                      position: 'absolute',
                      right: 10,
                      color: '#17212A',
                      fontSize: 12,
                      marginLeft: 12,
                    }}>
                    $0
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#0000000F',
                  marginTop: 15,
                }}></View>
              <View style={{height: 20, width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    height: 20,
                    width: '50%',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#F97762',
                      fontSize: 12,
                      marginLeft: 12,
                    }}>
                    Total
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: '50%',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{position: 'absolute', right: 10, color: '#F97762'}}>
                    $0
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
          onPress={() => navigation.navigate('Payments', {url: url})}
          style={{
            marginBottom: 10,
            height: 50,
            backgroundColor: '#F97762',
            width: '90%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Pay$0
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
