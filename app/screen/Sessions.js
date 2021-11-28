import React, {useEffect, Component, useState} from 'react';
import {ScrollView} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Text,
  TouchableOpacityBase,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../redux/action/actions';
export default function Sessions({navigation}) {
  const [button1, setButton1] = useState('Gender');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const {isLoading, dashboard} = useSelector(state => ({
    isLoading: state.authReducers.isLoading,
    dashboard: state.authReducers.dashboard,
  }));
  const onSessions = () => dispatch(actions.sessions());
  useEffect(() => {
    onSessions();
  }, []);
  const renderItem = item => {
    console.log('🚀 ~ file: Sessions.js ~ line 29 ~ renderItem ~ item', item);

    return (
      <ScrollView>
        <View style={{flex: 1, padding: 16}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                width: '100%',
                height: 160,
                borderRadius: 10,
                backgroundColor: 'red',
              }}
              source={require('../image/session1.png')}
              // source={{ uri: `http://talc.ubicoapps.in/${item.image}` }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              padding: 6,
              marginTop: 15,
              width: '100%',
              backgroundColor: '#F5F5F5',
            }}>
            <View>
              <Text style={{color: '#17212A', marginTop: 5}}>
                {item?.item?.title}{' '}
              </Text>
              <Text style={{marginTop: 4}}>{item?.item?.price}</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                position: 'absolute',
                right: 10,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SessionsDetails', {item: item})
                }
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 80,
                  alignSelf: 'flex-end',
                  backgroundColor: '#F97762',
                  borderRadius: 6,
                  marginTop: 15,
                }}>
                <Text style={{color: 'white'}}> Book Now</Text>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity>
          <View
          style={{height:30,width:90,backgroundColor:"#F97762",justifyContent:"center",alignItems:"center",position:"absolute",right:5}}>
            <Text
            style={{
              color: 'white',   
            }}
            ></Text>
          </View>
          </TouchableOpacity> */}

            {/* <TouchableOpacity
            style={{ position: "absolute", right: 5, justifyContent: "center", alignItems: "center",height:40, }}
            onPress={() => navigation.navigate('Sessions')}>
            <Text style={{
              color: 'white', textAlign: "center",
              backgroundColor: "#F97762",
              
            }}>
              Book Now
            </Text>
          </TouchableOpacity> */}

            <View style={{flexDirection: 'row', alignItems: 'center'}}></View>
          </View>
          <Text
            style={{color: '#04A768', fontWeight: 'bold', marginLeft: -310}}>
            Free
          </Text>
        </View>
      </ScrollView>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
      <View style={{flexDirection: 'row', marginBottom: 20}}></View>
      <FlatList
        data={dashboard?.course}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
