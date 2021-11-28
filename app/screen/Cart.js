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
import {navigationRef} from '../navigations/navigationref';

export default function Cart({navigation, route}) {
  const [array, setArray] = useState([
    {
      name: 'Reinventing Yourself',
      Price: '$4.99',
      image: require('../image/card.png'),
      id: 1,
      quantity: 1,
    },
    {
      name: 'Building The Business Brain',
      Price: '$4.99',
      image: require('../image/card1.png'),
      id: 2,
      quantity: 2,
    },
  ]);

  const filterCard = idx => {
    const filterArray = array.filter((item, index) => {
      if (index != idx) {
        return item;
      }
    });
    setArray(filterArray);
  };

  const cartArray = () => {
    return array.map((item, index) => {
      return {
        product_id: item.id,
        quantity: item.quantity,
      };
    });
  };
  console.log(
    '🚀 ~ file: Cart.js ~ line 53 ~ cartArray ~ cartArray',
    cartArray(),
  );

  const user_id = 39;
  const total = 20;
  // const url = "http://talc.ubicoapps.in/payment?user_id="+user_id +"&order_total="+total+"&payment_for=store&data={cart:"+cartArray()+"}"
  const url =
    'http://talc.ubicoapps.in/payment?user_id=2&order_total=34.45&payment_for=store&data={"cart":[{"product_id":1,"quantity":2}]}';

  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={{paddingHorizontal: 20}}>
        {array.map((item, index) => {
          return (
            <View
              style={{
                marginTop: 20,
                backgroundColor: '#FFFFFF',
                width: '100%',
                height: 120,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={item.image} style={{marginLeft: 20}} />
              <View
                style={{
                  height: 50,
                  width: 200,
                  backgroundColor: '#FFFFFF',
                  marginLeft: 15,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: '#17212A',

                    fontSize: 14,

                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
                <View style={{height: 50, width: 50, marginTop: 10}}>
                  <Text
                    style={{
                      color: '#F97762',

                      fontSize: 14,
                    }}>
                    {item.Price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: '#F9FAFC',
                  marginTop: 36,
                  position: 'absolute',
                  right: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => filterCard(index)}>
                  <Image
                    source={require('../image/carddelete.png')}
                    style={{
                      width: 15,
                      height: 19,
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        {array?.length > 0 && (
          <>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 15,
              }}>
              Payment Details
            </Text>

            <View
              style={{
                marginTop: 15,
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
                  <Text style={{position: 'absolute', right: 10}}>$10.00</Text>
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
                    $2.00
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
                    $12.00
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </View>

      {array?.length > 0 && (
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
              width: '80%',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              Pay$12
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
