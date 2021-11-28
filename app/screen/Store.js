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
} from 'react-native';
import * as actions from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL} from '../helper/Const';

export default function Store({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [checked, setChecked] = React.useState('first');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchStoreList());
  }, []);
  const {storeList, storeListLoading} = useSelector(state => ({
    storeList: state.dashboardReducer.storeList,
    storeListLoading: state.dashboardReducer.storeListLoading,
  }));

  useEffect(() => {
    console.log('Store -> storeList', storeList);
  }, [storeList, storeListLoading]);

  const renderCard = ({item, index}) => {
    return (
      <TouchableOpacity style={{marginHorizontal: 10, marginTop: 15}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetails', {storeId: item.id})
          }>
          <Image
            source={require('../image/products.png')}
            style={{height: 200, width: 200, borderRadius: 70}}
            // source={{uri: BASE_URL+storeDetails.image }}
            // source={{uri: "http://talc.ubicoapps.in/storage/product/1626544992.jpg" }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            borderRadius: 5,
            marginLeft: 30,
          }}>
          <Text style={{color: '#17212A', fontWeight: 'bold', maxWidth: 170}}>
            {item.name}
          </Text>
        </View>
        <Text
          style={{
            color: '#F97762',
            justifyContent: 'center',
            marginLeft: 30,
            marginTop: 8,
          }}>
          ${item.price}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        {storeListLoading ? (
          <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 24}}>
            Loading...
          </Text>
        ) : (
          <FlatList
            data={storeList}
            numColumns={2}
            renderItem={renderCard}
            ListEmptyComponent={() => (
              <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 24}}>
                No Store Found
              </Text>
            )}
          />
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
