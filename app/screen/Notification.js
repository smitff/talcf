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
  SafeAreaView,
  FlatList,
} from 'react-native';
import * as actions from '../redux/action/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

export default function Notification({navigation}) {
  const [text, onChangeText] = React.useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getNotificationList({}));
  }, []);
  const {notificationList, notificationLoader} = useSelector(state => ({
    notificationList: state.dashboardReducer.notificationList,
    notificationLoader: state.dashboardReducer.notificationLoader,
  }));

  useEffect(() => {
    console.log('notificationList -> notificationList', notificationList);
  }, [notificationList, notificationLoader]);

  const removeNotificationItem = () => {
    dispatch(
      actions.removeNotification({
        notification_id: item.id,
      }),
    );
  };

  const renderCard = ({item}) => (
    <View
      style={{
        width: 330,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 54,
            height: 54,
            borderWidth: 1,
            borderColor: '#E4EAEF',
            borderRadius: 10,
            marginTop: 17,
            marginLeft: 10,
          }}>
          <Image
            source={require('../image/notification.png')}
            style={{width: 30, height: 32, marginLeft: 12, marginTop: 8}}
          />
        </View>
        <Text
          style={{
            color: '#17212A',
            fontSize: 14,
            marginTop: 15,
            marginLeft: 20,
          }}>
          Reminder
        </Text>
        <TouchableOpacity
          style={{position: 'absolute', right: 10, top: 10}}
          onPress={() => removeNotificationItem()}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: '#666F76',
          fontSize: 12,
          marginLeft: 82,
          marginTop: -25,
        }}>
        Hey, John your session is start next 1 hour
      </Text>
      <Text
        style={{
          color: '#666F76',
          fontSize: 10,
          marginLeft: 82,
          marginTop: 5,
        }}>
        2 MIN AGO
      </Text>
    </View>
  );

  return (
    <SafeAreaView>
      {notificationLoader ? (
        <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 24}}>
          Loading...
        </Text>
      ) : (
        <FlatList
          data={notificationList}
          renderItem={renderCard}
          ListEmptyComponent={() => (
            <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 24}}>
              No Notification Found
            </Text>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
