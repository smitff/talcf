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
  FlatList,
  TouchableOpacityBase,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../redux/action/actions';

export default function ChooseAddAddress({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchAddressList());
  }, []);

  const {addressList = []} = useSelector(state => ({
    addressList: state.dashboardReducer.addressList,
  }));

  useEffect(() => {
    
    console.log('Store -> addressList', addressList);
  }, [addressList]);

  const _renderItem = (item, index) => {
    console.log('_renderItem -> item', item);
    return (
      <View
        style={{
          width: "100%",
          height: 128,
          backgroundColor: '#FFF',
          borderRadius: 10,
          padding:10,
          marginTop: index !== 0 ? 20 : 0,
        }}>
        <View style={{marginLeft: 15}}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text
              style={{
                color: '#17212A',
                marginBottom: 6,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Payment', { abc: item })}
              style={{
                width: 18,
                height: 18,
                borderColor: '#F97762',
                borderRadius: 10,
                borderWidth: 3,
                position:"absolute",
                right:5
                
              }}></TouchableOpacity>
          </View>
            <Text style={{color: '#666F76', marginBottom: 22}}>{item.number}</Text>
          <Text style={{color: '#666F76'}}>
            {`${item.address_line}, ${item.city} \n ${item.state}, ${item.country}`}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex:1,
          backgroundColor: '#F5F5F5',
          padding:20,
        }}>
          <FlatList
            data={addressList}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => _renderItem(item)}
          />
      </View>
      <View 
      style={{height:90,width:"100%",backgroundColor:"#FFFFFF",}}>
      <TouchableOpacity
        style={{backgroundColor: '#F97762',
        width: "90%%",
        height: 48,
        borderRadius: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
        
        
      }}
        onPress={() => navigation.navigate('AddNewAddressSave')}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: 12,
            fontSize: 14,
          }}>
          Add New Address
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
