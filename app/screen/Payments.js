

import React, { useEffect, Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Image,
    Modal,
    Alert,
    ActivityIndicator
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import * as actions from '../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL1 } from "../helper/Const";
import { WebView } from 'react-native-webview';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Login({ navigation, route }) {
    const { price, course_id, date, time, dataSend } = route.params;

    console.log('GOT DATA IN PAYMENT', price, course_id, date, time)

    const [isLoading, setIsLoading] = useState(true);
    const [paymentLink, setPaymentLink] = useState(null);
    const [userDetels, setUserDetels] = useState({})


    const { user } = useSelector(state => ({
        user: state.authReducers,
    }));
    console.log(user)

    const [State, setState] = React.useState({ showModal: false, status: "Pending" })
    handleResponse = data => {
        if (data.title === "success") {
            setState({ showModal: false, status: "Complete" });

            Alert.alert(
                "Payment Status",
                "  Complete  ",
                [
                    {
                        text: "Go To Home",
                        onPress: () => navigation.navigate('Dashboard'),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );

        } else if (data.title === "cancel") {
            setState({ showModal: false, status: "Cancelled" });
            Alert.alert(
                "Payment Status",
                "  Cancelled  ",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else {
            return;
        }
    };
    console.log(State)

    const getUserData = async () => {
        let getUserDetels = await AsyncStorage.getItem('userDetels');
        console.log('userDetels', getUserDetels);
        setUserDetels(JSON.parse(getUserDetels));
    }

    useEffect(() => {
        getUserData();
        // console.log('dataSend', dataSend);
        // let newdate = moment(date).format("YYYY-MM-DD"); //date;
        // let url = `http://talc.ubicoapps.in/payment?user_id=${2}&order_total=${price}&payment_for=course&data={"course_id":${course_id},"course_date":"${date}","start_time":"${time?.slice(0, 5)}"}`;
        // console.log('url', url)
        // setPaymentLink(url);
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])


    const payModal = () => {
        let url = `http://ec2-3-144-21-115.us-east-2.compute.amazonaws.com/payment?user_id=${userDetels.id}&order_total=${price}&payment_for=course&data={"course_id":${course_id},"course_date":"${date}","start_time":"${time?.slice(0, 5)}"}`;
        console.log('url', url)
        setPaymentLink(url);
        setState({ showModal: true })
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }

    return (
            <>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#F5F5F5',
                        justifyContent: "center",
                        alignSelf: "center",
                        width:widthPercentageToDP('100%'),
                        height:heightPercentageToDP('100%')
                    }}>

                    <Modal
                        visible={State.showModal}
                        onRequestClose={() => setState({ showModal: false })}
                    >
                        <WebView
                            source={
                                { uri: paymentLink }}
                            onNavigationStateChange={data =>
                                handleResponse(data)
                            }
                            injectedJavaScript={`document.f1.submit()`}
                        />
                    </Modal>


                    <Text style={{
                        marginLeft: 20,
                        marginTop: 20,
                        color: "#000",
                        fontWeight: "bold"
                    }}>
                        Select Payment Method
                    </Text>
                    <View style={{
                        width: 320,
                        height: 48,
                        backgroundColor: "#FFFFFF",
                        marginTop: 20,
                        marginLeft: 20,
                        borderRadius: 10
                    }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('../image/paypal.png')}
                                style={{
                                    width: 21.21,
                                    height: 21,
                                    marginTop: 13,
                                    marginLeft: 15
                                }}
                            />
                            <Text style={{
                                marginTop: 14,
                                marginLeft: 20
                            }}>
                                Paypal
                            </Text>
                            <TouchableOpacity>
                                <View style={{
                                    width: 18,
                                    height: 18,
                                    backgroundColor: "#F97762",
                                    borderRadius: 10,
                                    marginTop: 14,
                                    marginLeft: 190
                                }}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        width: 375,
                        height: 86,
                        backgroundColor: "#FFFFFF",
                        marginTop: 460
                    }}>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 20
                        }}>
                            <View style={{ marginLeft: 20,}}>
                            <Text style={{
                               
                                fontWeight: "bold",
                                color: "#6B6B7B"
                            }}>
                                Payable Amount 
                            </Text>
                            <Text style={{alignSelf: 'center',
                            marginTop:heightPercentageToDP('0.5'),
                            marginRight:heightPercentageToDP('20%')}}>${price}</Text>
                            </View>
                            <View style={{
                                backgroundColor: "#F97762",
                                width: 140,
                                height: 48,
                                borderRadius: 10,
                               
                            }}>
                                <TouchableOpacity onPress={() => payModal()}>
                                    <Text style={{
                                        color: 'white',
                                        textAlign: "center",
                                        marginTop: 12,
                                    }}>Pay ${price}</Text>
                                </TouchableOpacity>
                                {/* <Text>Payment Status: {State.status}</Text> */}
                            </View>
                        </View>
                    </View>
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



// import React, { useEffect, Component, useState } from 'react';
// import { RadioButton, CheckBox } from 'react-native-paper';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   Image,
// } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import SelectDateTimes from './SelectDateTimes';  

// export default function Payments({ navigation, route }) {
//   console.log("🚀 ~ file: Payments.js ~ line 17 ~ Payments ~ route", route)
//   let paypalSelected = true, amazonSelected = false

//   // const url = ''

//   const { url,amount } = route.params
//   console.log("ABC ~ file: Payments.js ~ line 20 ~ Payments ~ url", url)
//   console.log('abcabc',amount)

//   const paymentSelected = (method) => {
//     if (method === 'paypal') {
//       // debitSelected = false
//       paypalSelected = true
//       // amazonSelected = false
//     }
//   }

// return (

//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#F5F5F5',


//           paddingHorizontal: 20
//         }}>
//         <Text
//           style={{

//             marginTop: 20,
//             color: '#000',
//             fontWeight: 'bold',
//           }}>
//           Select Payment Method
//         </Text>
//         {/* <View
//           style={styles.selectionView}>
//           <View style={{ flexDirection: 'row' }}>
//             <Image
//               source={require('../image/debitcard.png')}
//               style={{ width: 20, height: 15, marginLeft: 8 }}
//             />
//             <Text style={{ marginLeft: 30 }}>
//               Debit or Credit Card
//             </Text>
//             <TouchableOpacity
//               onPress={()=>paymentSelected('debit')}
//               style={[styles.selection,{borderColor: debitSelected  ? '#EA8C12' : '#43484d'}]}></TouchableOpacity>
//           </View>
//         </View> */}

//         <View
//           style={styles.selectionView}>
//           <View style={{ flexDirection: 'row' }}>
//             <Image
//               source={require('../image/paypal.png')}
//               style={{ width: 21, height: 21, marginLeft: 8 }}
//             />
//             <Text style={{ marginLeft: 30 }}>Paypal</Text>
//             <View
//               style={[styles.selection, { borderColor: paypalSelected ? '#EA8C12' : '#43484d' }]}></View>
//           </View>
//         </View>
//         {/* <View
//           style={styles.selectionView}>
//           <View style={{ flexDirection: 'row' }}>
//             <Image
//               source={require('../image/ImageAmazon.png')}
//               style={{ width: 26, height: 17, marginLeft: 8 }}
//             />
//             <Text style={{ marginLeft: 30 }}>Amazon</Text>
//             <TouchableOpacity
//               onPress={()=>paymentSelected('amazon')}
//               style={[styles.selection,{borderColor: amazonSelected  ? '#EA8C12' : '#43484d'}]}></TouchableOpacity>
//           </View>
//         </View> */}
//       </View>
//       <View
//         style={{
//           width: "100%",
//           height: 86,
//           backgroundColor: '#FFFFFF',
//           position: 'absolute', bottom: 0,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//         <View style={{ flexDirection: 'row', }}>
//           <View>
//           <Text
//             style={{ fontWeight: 'bold', color: '#6B6B7B', marginRight: 30 }}>
//             Payable Amount
//           </Text>
//           <Text
//             style={{ fontWeight: 'bold', color: '#6B6B7B', marginRight: 30 }}>
//             {amount}
//           </Text>
//           </View>
//           <View
//             style={{
//               backgroundColor: '#F97762',
//               width: 140,
//               height: 48,
//               borderRadius: 10,
//               marginLeft: 30,
//               justifyContent: "center",
//               alignItems: "center",
//               marginBottom: 10


//             }}>
//             <TouchableOpacity
//              onPress={()=>navigation.navigate('CustomWebView', {url: url })}>
//               <Text
//                 style={{
//                   color: 'white',
//                   textAlign: 'center',
//                 }}>
//                 Pay Now
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </>

//   );
// }

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   selectionView: {
//     width: "100%",
//     height: 48,
//     backgroundColor: '#FFFFFF',
//     marginTop: 20,
//     borderRadius: 10,
//     justifyContent: "center"
//   },
//   selection: {
//     width: 18,
//     height: 18,
//     borderColor: '#43484d',
//     borderRadius: 10,
//     borderWidth: 3,
//     position: 'absolute',
//     right: 20
//   }
// });
