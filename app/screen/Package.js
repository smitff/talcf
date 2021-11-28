import React, {useEffect, Component, useState} from 'react';
import {RadioButton, CheckBox} from 'react-native-paper';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import * as actions from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Package({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [userId, setUserId] = React.useState('');

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(actions.getPlanList());
    const _userId = await AsyncStorage.getItem('user_id');
    setUserId(_userId);
  }, []);
  const {planList, planListLoader} = useSelector(state => ({
    planList: state.dashboardReducer.planList,
    planListLoader: state.dashboardReducer.planListLoader,
  }));

  useEffect(() => {
    console.log('planList -> planList', planList);
  }, [planList, planListLoader]);

  const getPaymentURL = index => {
    return `http://ec2-3-144-21-115.us-east-2.compute.amazonaws.com/payment?user_id=${userId}&order_total=${planList[index].price}&payment_for=challenge&data={"challenge_id":${planList[index].id}}`;
  };

  const _renderItem = (item, index) => {
    console.log('Package indexindex', index);

    // const user_id =  39;

    // const url = `http://talc.ubicoapps.in/payment?user_id=39&order_total=34.45&payment_for=challenge&data={"challenge_id":3}`

    return (
      <View
        style={{
          width: '100%',
          height: 250,
          backgroundColor: '#fff',

          borderRadius: 10,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            width: 70,
            height: 24,
            backgroundColor: '#19CE88',
            marginLeft: 9,
            borderRadius: 5,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 10,
              marginLeft: 14,
              color: '#FFFFFF',
              fontSize: 10,
            }}>
            {item.cycle} WEEK
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: '#17212A',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#F97762',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 32,
          }}>
          ${item.price}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#666F76',
            fontWeight: 'bold',
            fontSize: 12,
            marginTop: 5,
          }}>
          Every week
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                width: 150,
                height: 38,
                backgroundColor: '#9B9BA8',
                marginRight: 10,
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 8}}>
                View Details
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              navigation.navigate('Payments', {
                url: getPaymentURL(index),
                amount: planList[index].price,
              })
            }>
            <View
              style={{
                width: 150,
                height: 38,
                backgroundColor: '#F97762',
                marginLeft: 9,
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 8}}>
                Buy Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F5F5F5',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View style={{marginHorizontal: 12, marginTop: 25}}>
            <FlatList
              data={planList}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => _renderItem(item, index)}
            />
            {/* <View
              style={{
                width: 330,
                height: 270,
                backgroundColor: '#fff',
                marginLeft: 4,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <View
                style={{
                  width: 70,
                  height: 24,
                  backgroundColor: '#19CE88',
                  marginLeft: 9,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 10, marginLeft: 14}}>6 MONTH</Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#17212A',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                TALC Gold Membership
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#F97762',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 32,
                }}>
                $75
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#666F76',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Every week
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#666F76',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Perfect for beginners looking for weekly meetings
              </Text>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 150,
                      height: 38,
                      backgroundColor: '#9B9BA8',
                      marginLeft: 9,
                      borderRadius: 10,
                    }}>
                    <Text style={{textAlign: 'center', marginTop: 8}}>
                      View Details
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 150,
                      height: 38,
                      backgroundColor: '#F97762',
                      marginLeft: 9,
                      borderRadius: 10,
                    }}>
                    <Text style={{textAlign: 'center', marginTop: 8}}>
                      Buy Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
             <View
              style={{
                width: 330,
                height: 250,
                backgroundColor: '#fff',
                marginLeft: 4,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <View
                style={{
                  width: 70,
                  height: 24,
                  backgroundColor: '#19CE88',
                  marginLeft: 9,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 10, marginLeft: 14}}>6 MONTH</Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#17212A',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                TALC Silver Plan
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#F97762',
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 32,
                }}>
                $35
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#666F76',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Every week
              </Text>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 150,
                      height: 38,
                      backgroundColor: '#9B9BA8',
                      marginLeft: 9,
                      borderRadius: 10,
                    }}>
                    <Text style={{textAlign: 'center', marginTop: 8}}>
                      View Details
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 150,
                      height: 38,
                      backgroundColor: '#F97762',
                      marginLeft: 9,
                      borderRadius: 10,
                    }}>
                    <Text style={{textAlign: 'center', marginTop: 8}}>
                      Buy Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </View>
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
