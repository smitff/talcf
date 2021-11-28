import React, {useEffect, Component, useState} from 'react';
import {RadioButton, CheckBox} from 'react-native-paper';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Payment({route, navigation}) {
  let paypalSelected = true,
    amazonSelected = false;

  const [selectedAddress, setSelectedAddress] = useState({});

  useEffect(() => {
    setSelectedAddress(route.params.abc);
  }, []);

  const paymentSelected = method => {
    if (method === 'paypal') {
      // debitSelected = false
      paypalSelected = true;
      // amazonSelected = false
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F5F5',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            color: '#17212A',
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Address
        </Text>
        <View
          style={{
            width: '100%',
            height: 144,
            backgroundColor: '#FFFFFF',
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            marginTop: 20,
            padding: 10,
          }}>
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#17212A',
                  marginBottom: 6,
                  fontWeight: 'bold',
                }}>
                {selectedAddress?.name}
              </Text>
            </View>
            <Text style={{color: '#666F76', marginBottom: 30}}>
              {selectedAddress?.number}
            </Text>
            <Text style={{color: '#666F76'}}>
              {selectedAddress?.address_line}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 48,
            backgroundColor: '#F86A394D',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Choose/Add Address')}>
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                color: '#F97762',
              }}>
              Choose/Add Address
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: 20,
            color: '#000',
            fontWeight: 'bold',
          }}>
          Select Payment Method
        </Text>
        {/* <View
          style={{
            width: "100%",
            height: 48,
            backgroundColor: '#FFFFFF',
            marginTop: 20,

            borderRadius: 10,
            justifyContent: "center",
            padding: 10


          }}>
          <View style={{ flexDirection: 'row', }}>
            <Image
              source={require('../image/debitcard.png')}
              style={{ width: 20, height: 15, }}
            />
            <TouchableOpacity>
              <Text style={{ marginLeft: 30 }}>
                Debit Credit Card
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 18,
                height: 18,
                borderColor: '#F97762',
                borderRadius: 10,
                borderWidth: 3,


                position: 'absolute',
                right: 20
              }}></View>
          </View>
        </View> */}

        {/* <View
          style={{
            width: "100%",
            height: 48,
            backgroundColor: '#FFFFFF',
            marginTop: 20,

            borderRadius: 10,
            justifyContent: "center",
            padding: 10
          }}>
          <View style={{ flexDirection: 'row', }}>
            <Image
              source={require('../image/ImageAmazon.png')}
              style={{ width: 26, height: 17, }}
            />
            <TouchableOpacity>
              <Text style={{ marginLeft: 30 }}>Amazon Pay</Text>
            </TouchableOpacity>

            <View
              style={{
                width: 18,
                height: 18,
                backgroundColor: '#E9EDF0',
                borderRadius: 10,


                position: 'absolute',
                right: 20
              }}></View>
          </View>
        </View> */}

        <View
          style={{
            width: '100%',
            height: 48,
            backgroundColor: '#FFFFFF',
            marginTop: 20,

            borderRadius: 10,
            justifyContent: 'center',
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../image/paypal.png')}
              style={{width: 21, height: 21, marginLeft: 8}}
            />

            <Text style={{marginLeft: 30}}>Paypal</Text>

            <View
              style={[
                styles.selection,
                {borderColor: paypalSelected ? '#EA8C12' : '#43484d'},
              ]}></View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 86,
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', color: '#6B6B7B', marginRight: 30}}>
            Payable Amount
          </Text>
          <View
            style={{
              backgroundColor: '#F97762',
              width: 140,
              height: 48,
              borderRadius: 10,
              marginLeft: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                Pay Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  selection: {
    width: 18,
    height: 18,
    borderColor: '#43484d',
    borderRadius: 10,
    borderWidth: 3,
    position: 'absolute',
    right: 20,
  },
});
