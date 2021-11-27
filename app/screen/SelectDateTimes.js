import React, { useEffect, Component, useState } from 'react';
import { RadioButton, CheckBox } from 'react-native-paper';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import { combineReducers } from 'redux';


export default function SelectDateTimes({ navigation, route }) {
  const { item } = route.params
  const [text, onChangeText] = React.useState(null);
  const [data, setData] = React.useState({ date: null, time: null ,day:null})
  const selectdate = (date) => {
    let services = moment(date)
    setData({ date: services.format("DD.MM.YYYY"), day: services.format("dddd") })
  }
  
  useEffect(() => {
    console.log('SELECTED data111 >>>>>>>>>>>>>>>>>>>>>>>>>>>>', data)
  }, [data])
  
  return (
    <>
    <CalendarStrip
          scrollable
          style={{ width: "100%", height: 117, }}
          calendarColor={'#FFFFFF'}
          calendarHeaderStyle={{ color: '',marginTop:20, }}
          dateNumberStyle={{ color: 'black' }}
          dateNameStyle={{ color: 'black' }}
          highlightDateNumberStyle={{ backgroundColor: '#F97762', color: "#fff", width: 38, paddingBottom: 4}}
          highlightDateNameStyle={{ backgroundColor: '#F97762', color: 'white', width: 38, paddingBottom: 8, paddingTop: 4}}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={(date) => selectdate(date)}
        />
      <View style={{ flex: 1, backgroundColor: '#E9EDF0', paddingHorizontal: 15, }}>



        <View style={{ marginHorizontal: 1, backgroundColor: "#E9EDF0", justifyContent: "center", alignSelf: "center" }}>
          <Text style={{ fontSize: 14, color: "#17212A", marginTop: 15, marginBottom: 10, fontWeight: "bold" }}>Morning</Text>
          <View style={{ width: "100%", height: 96, backgroundColor: "#fff", borderRadius: 10 }}>
            <View style={{ flexDirection: "row" }}>
 
              <TouchableOpacity onPress={() => setData({ ...data, time: '09:00 AM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '09:00 AM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5,color:data.time === '09:00 AM' ? "white" : "black" }}>09:00 AM</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setData({ ...data, time: '10:00 AM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '10:00 AM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '10:00 AM' ? "white" : "black"}}>10:00 AM</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setData({ ...data, time: '11:00 AM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '11:00 AM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, marginRight:10,borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '11:00 AM' ? "white" : "black"}}>11:00 AM</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setData({ ...data, time: '12:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '12:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
              <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '12:00 AM' ? "white" : "black"}}>12:00 PM</Text>
            </TouchableOpacity>
          </View>



          <Text style={{ fontSize: 14, color: "#17212A", marginTop: 15, marginBottom: 10, fontWeight: "bold" }}>After Noon</Text>
          <View style={{ width: 338, height: 96, backgroundColor: "#fff", borderRadius: 10 }}>
            <View style={{ flexDirection: "row" }}>
              
              <TouchableOpacity onPress={() => setData({ ...data, time: '01:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '01:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '01:00 PM' ? "white" : "black"}}>01:00 PM</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setData({ ...data, time: '02:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '02:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5,color:data.time === '02:00 PM' ? "white" : "black"}}>02:00 PM</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setData({ ...data, time: '03:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '03:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '03:00 PM' ? "white" : "black"}}>03:00 PM</Text>
              </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => setData({ ...data, time: '04:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '04:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
              <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '04:00 PM' ? "white" : "black"}}>04:00 PM</Text>
            </TouchableOpacity>
          </View>


          <Text style={{ fontSize: 14, color: "#17212A", marginTop: 15, marginBottom: 10, fontWeight: "bold" }}>Evening</Text>
          <View style={{ width: 338, height: 96, backgroundColor: "#fff", borderRadius: 10 }}>
            <View style={{ flexDirection: "row" }}>

              <TouchableOpacity onPress={() => setData({ ...data, time: '05:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '05:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '05:00 PM' ? "white" : "black"}}>05:00 PM</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setData({ ...data, time: '06:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '06:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '06:00 PM' ? "white" : "black"}}>06:00 PM</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setData({ ...data, time: '07:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '07:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '07:00 PM' ? "white" : "black"}}>07:00 PM</Text>
              </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setData({ ...data, time: '08:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '08:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '08:00 PM' ? "white" : "black"}}>08:00 PM</Text>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => setData({ ...data, time: '09:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '09:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5,color:data.time === '09:00 PM' ? "white" : "black" }}>09:00 PM</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setData({ ...data, time: '10:00 PM' })} style={{ width: 99, height: 30, backgroundColor: data.time === '10:00 PM' ? "#F97762" : "#E9EDF0", marginTop: 10, marginLeft: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", marginTop: 5 ,color:data.time === '10:00 PM' ? "white" : "black"}}>10:00 PM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
       
      </View>

      <View
        style={{ backgroundColor: "white",
            height:90,
            width: "100%",
            position:"absolute",
            bottom:0,
            marginTop:16,
            // marginLeft:20,
            justifyContent:"center",
            alignItems:"center"
            }}>
        <TouchableOpacity
        activeOpacity={0.6}
          onPress={() => navigation.navigate('Checkout', { data: data, item: item })}
          // onPress={()=>navigation.navigate('Checkout')}
          style={{ marginBottom:10,height: 50, backgroundColor: "#F97762", width: "90%", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>Checkout</Text>
        </TouchableOpacity>
      </View>

     
      
    </>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

});


