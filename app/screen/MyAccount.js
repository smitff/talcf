import React, { useEffect, Component, useState } from 'react';
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
    ScrollView
} from 'react-native';
 
export default function MyAccount({ navigation }) {
    return (
        <>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#F5F5F5', justifyContent: "center", alignSelf: "center" }}>
                    <View style={{ marginHorizontal: 7, marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddNewAddress')}>
                            <View style={{ width: 345, height: 140, backgroundColor: "#FFFFFF", borderRadius: 20 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image
                                        source={require('../image/card1.png')}
                                        style={{ width: 80, height: 80, justifyContent: "center", alignSelf: "center", marginTop: 30, marginLeft: 15 }}
                                    />
                                    <Text style={{ color: "#17212A", marginEnd: 11, fontSize: 14, marginLeft: 14, marginTop: 30, fontWeight: "bold" }}>Building The Business Brain</Text>
                                </View>
                                <Text style={{ color: "#F97762", marginEnd: 11, fontSize: 12, marginLeft: 110, marginTop: -50 }}>$4.99</Text>
                            </View>
                            <Text style={{ color: "#F97762", marginEnd: 11, fontSize: 14, marginLeft: 110, marginTop: -50, marginBottom: 20, color: "#04A768", fontWeight: "bold" }}>Order Confirmed</Text>
                        </TouchableOpacity>
                        <View style={{ width: 345, height: 140, backgroundColor: "#FFFFFF", borderRadius: 20, marginTop: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={require('../image/card.png')}
                                    style={{ width: 80, height: 80, justifyContent: "center", alignSelf: "center", marginTop: 30, marginLeft: 15 }}
                                />
                                <Text style={{ color: "#17212A", marginEnd: 11, fontSize: 14, marginLeft: 14, marginTop: 30, fontWeight: "bold" }}>Reinventing Yourself</Text>
                            </View>
                            <Text style={{ color: "#F97762", marginEnd: 11, fontSize: 12, marginLeft: 110, marginTop: -50 }}>$4.99</Text>
                        </View>
                        <Text style={{ color: "#F97762", marginEnd: 11, fontSize: 14, marginLeft: 110, marginTop: -55, marginBottom: 20, color: "#DDA81B", fontWeight: "bold" }}>On the way</Text>
                        <View style={{ width: 345, height: 140, backgroundColor: "#FFFFFF", borderRadius: 20, marginTop: 30 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={require('../image/card.png')}
                                    style={{ width: 80, height: 80, justifyContent: "center", alignSelf: "center", marginTop: 30, marginLeft: 15 }}
                                />
                                <Text style={{ color: "#17212A", marginEnd: 11, fontSize: 14, marginLeft: 12, marginTop: 30, fontWeight: "bold" }}>Reinventing Yourself</Text>
                            </View>
                            <Text style={{ color: "#F97762", marginEnd: 11, fontSize: 12, marginLeft: 110, marginTop: -50 }}>$4.99</Text>
                        </View>
                        <Text style={{ color: "#F97762", marginEnd: 11, fontSize: 14, marginLeft: 110, marginTop: -55, marginBottom: 20, color: "#666F76", fontWeight: "bold" }}>Delivered</Text>
                    </View>
                </View>
            </ScrollView>
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
//     StyleSheet,
//     View,
//     Text,
//     TouchableOpacity,
//     TextInput,
//     ImageBackground,
//     Image
// } from 'react-native';




// export default function Login({ navigation }) {
//     const [text, onChangeText] = React.useState(null);


//     return (
//         <>
//             <View style={{ flex: 1, backgroundColor: '#F5F5F5',justifyContent:"center" }}>
//                 <View style={{ marginHorizontal: 12 }}>
//                     <View style={{ flexDirection: "row" }}>
//                         <Image
//                             source={require('../image/order.png')}
//                             style={{ width: 430, height: 130, marginTop: 8, marginLeft: -46 }}
//                         />
//                     </View>
//                     <View style={{ flexDirection: "row" }}>
//                         <Image
//                             source={require('../image/order.png')}
//                             style={{ width: 430, height: 130, marginLeft: -46 }}
//                         />
//                     </View>
//                     <View style={{ flexDirection: "row" }}>
//                         <Image
//                             source={require('../image/order.png')}
//                             style={{ width: 430, height: 130, marginLeft: -46 }}
//                         />
//                     </View>
//                     <TouchableOpacity onPress={() => navigation.navigate('Package')}>
//                         <View style={{ width: 134, height: 5, backgroundColor: "#E3E2E3", borderRadius: 10, marginTop: 240, justifyContent: "center", alignSelf: "center" }}></View>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     checkboxContainer: {
//         flexDirection: "row",
//         marginBottom: 20,
//     },

// });

