import React, { useEffect, Component, useState } from 'react';
import { RadioButton, CheckBox } from 'react-native-paper';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/action/actions';

export default function AddNewAddressSave({ navigation }) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('DElhi');
  const [items, setItems] = useState([
    { label: 'Alabama', value: 'Alabama' },
    { label: 'Alaska', value: 'Alaska' },
    { label: 'Arizona', value: 'Arizona' },
    { label: 'BANGALORE', value: 'BANGALORE' },
    { label: 'HYDERABAD', value: 'HYDERABAD' },
  ]);

  const [open2, setOpen2] = useState(false);
  const [items2, setItems2] = useState([
    // { label: 'INDIA', value: 'INDIA' },
    { label: 'US', value: 'US' },
  ]);
  const [value2, setValue2] = useState('INDIA');


  const [open3, setOpen3] = useState(false);
  const [items3, setItems3] = useState([
    // { label: 'UP', value: 'Up' },
    // { label: 'UK', value: 'Uk' },
    { label: 'New York', value: 'New York' },
    // { label: 'Bihar', value: 'Bihar' },
  ]);
  const [value3, setValue3] = useState('UP');



  const [button1, setButton1] = useState('Gender');
  const [email, setEmail] = useState('');
  const [text, onChangeText] = React.useState(null);
  const [name, setName] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [pincode, setPinCode] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [country, setCountry] = React.useState('');

  const [addressSaved, setAddressSaved] = useState(false)
  const [isFirstTime, setIsFirstTime] = useState(true)


  const dispatch = useDispatch();

  // useEffect(() => {
  //   setIsFirstTime(false)
  // },[])

  const { addNewAddressSuccess } = useSelector(state => ({
    addNewAddressSuccess: state.dashboardReducer.addNewAddressSuccess,
  }));

  useEffect(() => {
    setIsFirstTime(false)
    if (!isFirstTime) {
      setAddressSaved(true)
      Alert.alert(
        "Address Saved Successfully",
        [
          {
            text: "OK",
            onPress: () => {
              setAddressSaved(false)
              navigation.goBack()
            },
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  }, [addNewAddressSuccess]);

  const saveAddress = () => {
    setAddressSaved(false)
    let ob = {
      user_id: 39,
      name: name,
      pin_code: 'pincode',
      address: 'address',
      city: value,
      state: value3,
      country: value2,
      mobile: 'mobile'
    }
    dispatch(actions.addNewAddress(ob));
  }

  return (


    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ paddingHorizontal:20 }}>
        <Text
          style={{
            fontSize: 14,
            color: '#666F76',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Name
        </Text>
        <View
          style={{
            width: "100%",
            height: 48,
            borderRadius: 10,
            backgroundColor: '#F2F4F7',
            justifyContent: "center"
          }}>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder=""
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: '#666F76',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Mobile
        </Text>
        <View
          style={{
            width: "100%",
            height: 48,
            borderRadius: 10,
            backgroundColor: '#F2F4F7',
            justifyContent: "center"

          }}>
          <TextInput
            onChangeText={setMobile}
            value={mobile}
            placeholder=""
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: '#666F76',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Pincode
        </Text>
        <View
          style={{
            width: "100%",
            height: 48,
            borderRadius: 10,
            backgroundColor: '#F2F4F7',
            justifyContent: "center"

          }}>
          <TextInput
            onChangeText={setPinCode}
            value={pincode}
            placeholder=""
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: '#666F76',
            marginTop: 10,
            marginBottom: 10,
          }}>
          House / Flat / Building
        </Text>
        <View
          style={{
            width: "100%",
            height: 48,
            borderRadius: 10,
            backgroundColor: '#F2F4F7',
            justifyContent: "center"

          }}>
          <TextInput
            onChangeText={setAddress}
            value={address}
            placeholder=""
          />
        </View>
      </View>

      <Text
        style={{
          fontSize: 14,
          color: '#666F76',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20
        }}>
        City
      </Text>

      {/* <View style={{
            flexDirection: "row", marginBottom: 30, justifyContent: "space-between", alignSelf: "center",
            paddingHorizontal: 10, marginTop: 15, paddingTop: 10,
          }}> */}
      <DropDownPicker style={{
        borderRadius: 10, width: "100%",
        height: 48, borderWidth: 1, borderColor: "#F2F4F7", backgroundColor: "#F2F4F7",
      }}
        textStyle={{
          fontSize: 12,
          textAlign: 'center'
        }}
        zIndex={999}
        containerStyle={{
          width: '90%',
          marginLeft: 20,
        }}
        dropDownStyle={{
          height: 10,
          width: 100
        }}
        dropDownMaxHeight={10}
        showTickIcon={false}
        ArrowDownIconComponent={() => <AntDesign name="caretdown" />}
        ArrowUpIconComponent={() => <AntDesign name="caretup" />}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text
        style={{
          fontSize: 14,
          color: '#666F76',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20
        }}>
        State
      </Text>
      <DropDownPicker style={{
        backgroundColor: "#F2F4F7", borderWidth: 0, borderRadius: 10, width: "100%",
        height: 48,
      }}
        textStyle={{
          fontSize: 10,
          textAlign: 'center'
        }}
        zIndex={998}
        containerStyle={{
          width: '90%',
          marginLeft: 20,
        }}
        dropDownStyle={{
          width: 50,
          height: 10
        }}
        dropDownMaxHeight={10}
        showTickIcon={false}
        ArrowDownIconComponent={() => <AntDesign name="caretdown" />}
        ArrowUpIconComponent={() => <AntDesign name="caretup" />}
        open={open3}
        value={value3}
        items={items3}
        setOpen={setOpen3}
        setValue={setValue3}
        setItems={setItems3}
      />
      <Text
        style={{
          fontSize: 14,
          color: '#666F76',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20
        }}>
        Country
      </Text>
      <DropDownPicker style={{
        backgroundColor: "#F2F4F7", borderWidth: 0, borderRadius: 10, width: "100%",
        height: 48,
      }}
        textStyle={{
          fontSize: 10,
          textAlign: 'center'
        }}
        zIndex={997}
        containerStyle={{
          width: '90%',
          marginLeft: 20,
        }}
        dropDownStyle={{
          height: 10
        }}
        dropDownMaxHeight={10}
        showTickIcon={false}
        ArrowDownIconComponent={() => <AntDesign name="caretdown" />}
        ArrowUpIconComponent={() => <AntDesign name="caretup" />}
        open={open2}
        value={value2}
        items={items2}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems2}
      />
      {/* </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: '#F5F5F5',
          height: 50,
          width: "100%"
        }}></View>
      <View
        style={{
          height: 90,
          width: "100%",

          backgroundColor: '#FFFFFF',
          padding: 20,
          position: "absolute",
          bottom: 10,
        }}>
        <View
          style={{ height: 50, width: "100%", backgroundColor: "#F97762", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={() => saveAddress()}>
            <Text
              style={{ color: 'white',fontSize:15, }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
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
