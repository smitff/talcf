import React, {useEffect, Component, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
import {BASE_URL} from '../helper/Const';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetails({route, navigation}) {
  const dispatch = useDispatch();

  const [paymentURL, setPaymentURL] = useState('');

  const {storeId} = route.params;
  console.log('>>>>>>>>>>> ', route.params);

  useEffect(() => {
    dispatch(
      actions.fetchStoreDetails({
        store_id: storeId,
      }),
    );
  }, []);

  const {storeDetails, storeDetailsLoading} = useSelector(state => ({
    storeDetails: state.dashboardReducer.storeDetails,
    storeDetailsLoading: state.dashboardReducer.storeDetailsLoading,
  }));

  useEffect(async () => {
    console.log('storeDetails ', storeDetails);
    const userId = await AsyncStorage.getItem('user_id');
    const url =
      await `http://ec2-3-144-21-115.us-east-2.compute.amazonaws.com/payment?user_id=${userId}&order_total=${storeDetails?.price}&payment_for=store&data={"cart":[{"product_id":${storeDetails?.id},"quantity":${storeDetails?.quantity}}]}`;
    setPaymentURL(url);
  }, [storeDetails]);

  const getPaymentURL = async () => {
    const userId = await AsyncStorage.getItem('user_id');
    const url =
      await `http://ec2-3-144-21-115.us-east-2.compute.amazonaws.com/payment?user_id=${userId}&order_total=${storeDetails?.price}&payment_for=store&data={"cart":[{"product_id":${storeDetails?.id},"quantity":${storeDetails?.quantity}}]}`;
    console.log(
      '🚀 ~ file: ProductDetails.js ~ line 54 ~ getPaymentURL ~ url',
      url,
    );
    return url;
  };

  return (
    <>
      <View style={{flex: 1}}>
        {storeDetailsLoading ? (
          <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 24}}>
            Loading...
          </Text>
        ) : (
          <>
            <View
              style={{
                flex: 1,
                backgroundColor: '#f5f5f5',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  width: '100%',
                  height: 213,
                  backgroundColor: '#fff',

                  marginTop: 20,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../image/products.png')}
                  style={{height: 213, width: 345}}
                  // source={{uri: BASE_URL+storeDetails.image }}
                  // source={{uri: "http://talc.ubicoapps.in/storage/product/1626544992.jpg" }}
                />
              </View>
              <View style={{}}>
                <Text
                  style={{
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  {storeDetails && storeDetails.name}
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    color: '#F97762',
                  }}>
                  ${storeDetails && storeDetails.price}
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  Product Details
                </Text>
                <ScrollView
                  style={{
                    width: '100%',
                    height: 185,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 10,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: '#6B6B7B',
                      paddingHorizontal: 20,
                      fontSize: 12,
                    }}>
                    {storeDetails && storeDetails.subtitle}
                  </Text>
                  <Text
                    style={{
                      color: '#6B6B7B',
                      fontSize: 12,
                      marginTop: 15,
                    }}>
                    {storeDetails && storeDetails.description}
                  </Text>
                </ScrollView>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: 100,
                width: '100%',
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: '#F97762',
                  width: 165,
                  height: 48,
                  borderRadius: 10,
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
                onPress={() => navigation.navigate('Cart')}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Add to cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: '#04A768',
                  width: 165,
                  height: 48,
                  borderRadius: 10,
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
                onPress={() =>
                  navigation.navigate('Payments', {
                    url: paymentURL,
                    amount: storeDetails?.price,
                  })
                }>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
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
