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
  ScrollView,
  FlatList
} from 'react-native';
import * as actions from '../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function MyOrders({ navigation }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getOrder());
  }, [])

  const { getOrderLoader, getOrderList } = useSelector((state) => ({
    getOrderList: state.authReducers.getOrderList,
    getOrderLoader: state.authReducers.getOrderLoader
  }));
  console.log(getOrderList)

  useEffect(() => {
    console.log("Store -> getOrderList", getOrderList)
  }, [getOrderList, getOrderLoader])

  const _renderItem = (item, index) => {
    console.log("itemitem", item.billing_address)

    return (

      <View style={{
        flexDirection: 'row',
        width: 345,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: index !== 0 ? 20 : 0,
        marginTop: 20,
      }}>

        {getOrderList?.user_plan.map((item, index) => <View style={{ flexDirection: "row" }} key={index}>
          <View style={{ backgroundColor: "white", height: 110, width: "30%", justifyContent: "center", alignItems: "center" }}>
             <Image
            source={require('../image/card1.png')}
            style={{
              width: 70,
              height: 80,
              borderRadius: 6,
              borderBottomColor: "grey",
              borderBottomWidth: 2
            }}
          />
          </View>
          <View style={{ backgroundColor: "whiote", height: 110, width: "70%", justifyContent: "center", }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text
                style={{
                  color: '#17212A',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop: 10
                }}>
                {item.plan.title}
              </Text>
              <Text
                style={{
                  color: '#F97762',
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 10
                }}>
                ${item.plan.price}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#F97762',
                fontSize: 14,
                color: '#04A768',
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 10
              }}>
              {item.plan.status}
            </Text>
          </View>
        </View>)}
      </View>
    )
  }

 

  const _renderStorePlanItem = (item, index) => {
    console.log("itemitem", item.billing_address)

    return (

      <View style={{
        flexDirection: 'row',
        width: 345,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: index !== 0 ? 20 : 0,
        marginTop: 20,
      }}>

        {getOrderList?.user_course.map((item, index) => <View style={{ flexDirection: "row" }} key={index}>
          <View style={{ backgroundColor: "white", height: 110, width: "30%", justifyContent: "center", alignItems: "center" }}>
             {/* <Image
            source={require('../image/card1.png')}
            style={{
              width: 70,
              height: 80,
              borderRadius: 6,
              borderBottomColor: "grey",
              borderBottomWidth: 2
            }}
          /> */}
          </View>

          
           {Array(3).fill(3).map((item)=>
            <View style={{ backgroundColor: "whiote", height: 110, width: "70%", justifyContent: "center", }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text
                style={{
                  color: '#17212A',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop: 10
                }}>
                {"item.course.title"}
              </Text>
              <Text
                style={{
                  color: '#F97762',
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 10
                }}>
                ${"item.course.price"}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#F97762',
                fontSize: 14,
                color: '#04A768',
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 10
              }}>
              {"item.course.id"}
            </Text>
          </View>)}
        </View>)}
      </View>
    )
  }





  const _renderStorePlan1Item = (item, index) => {
    console.log("itemitem", item.billing_address)

    return (

      <View style={{
        flexDirection: 'row',
        width: 345,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: index !== 0 ? 20 : 0,
        marginTop: 20,
      }}>

        {getOrderList?.user_store.map((item, index) => <View style={{ flexDirection: "row" }} key={index}>
          <View style={{ backgroundColor: "white", height: 110, width: "30%", justifyContent: "center", alignItems: "center" }}>
             <Image
            source={require('../image/card1.png')}
            style={{
              width: 70,
              height: 80,
              borderRadius: 6,
              borderBottomColor: "grey",
              borderBottomWidth: 2
            }}
          />
          </View>
          <View style={{ backgroundColor: "whiote", height: 110, width: "70%", justifyContent: "center", }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text
                style={{
                  color: '#17212A',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop: 10
                }}>
                ${item.discount}
              </Text>
              <Text
                style={{
                  color: '#F97762',
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 10
                }}>
                ${item.total}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#F97762',
                fontSize: 14,
                color: '#04A768',
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 10
              }}>
              {item.status}
            </Text>
          </View>
        </View>)}
      </View>
    )
  }





  return (
    <ScrollView>
    <>
      <Text style={{ fontSize: 22,textAlign:"center",marginTop:20,fontWeight:"bold"}}>Plan</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F5F5',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 20
        }}>
        <FlatList
          data={getOrderList?.user_store}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => _renderItem(item)}
        />
      </View>
      <Text style={{ fontSize: 22,textAlign:"center",marginTop:20,fontWeight:"bold"}}>course</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F5F5',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 20
        }}>
        <FlatList
          data={getOrderList?.user_store}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => _renderStorePlanItem(item)}
        />
      </View>
      <Text style={{ fontSize: 22,textAlign:"center",marginTop:20,fontWeight:"bold"}}>store</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F5F5F5',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 20
        }}>
        <FlatList
          data={getOrderList?.user_store}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => _renderStorePlan1Item(item)}
        />
      </View>
    </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});











































// import React, { useEffect, Component, useState } from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   Image,
//   ScrollView,
//   FlatList
// } from 'react-native';
// import * as actions from '../redux/action/actions';
// import { useDispatch, useSelector } from 'react-redux';

// export default function MyOrders({ navigation }) {

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(actions.getOrder());
//   }, [])

//   const { getOrderLoader, getOrderList } = useSelector((state) => ({
//     getOrderList: state.authReducers.getOrderList,
//     getOrderLoader: state.authReducers.getOrderLoader
//   }));
//   console.log(getOrderList)

//   useEffect(() => {
//     console.log("Store -> getOrderList", getOrderList)
//   }, [getOrderList, getOrderLoader])

//   const _renderItem = (item, index) => {
//     console.log("itemitem", item.billing_address)

//     return (

//       <View style={{
//         flexDirection: 'row',
//         width: 345,
//         height: 110,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         marginTop: index !== 0 ? 20 : 0,
//         marginTop: 20,
//       }}>

//         {getOrderList?.user_plan.map((item, index) => <View style={{ flexDirection: "row" }} key={index}>
//           <View style={{ backgroundColor: "white", height: 110, width: "30%", justifyContent: "center", alignItems: "center" }}>
//              <Image
//             source={require('../image/card1.png')}
//             style={{
//               width: 70,
//               height: 80,
//               borderRadius: 6,
//               borderBottomColor: "grey",
//               borderBottomWidth: 2
//             }}
//           />
//           </View>
//           <View style={{ backgroundColor: "whiote", height: 110, width: "70%", justifyContent: "center", }}>
//             <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//               <Text
//                 style={{
//                   color: '#17212A',
//                   fontSize: 14,
//                   fontWeight: 'bold',
//                   marginLeft: 10,
//                   marginTop: 10
//                 }}>
//                 {item.plan.title}
//               </Text>
//               <Text
//                 style={{
//                   color: '#F97762',
//                   fontSize: 12,
//                   marginLeft: 10,
//                   marginTop: 10
//                 }}>
//                 ${item.plan.price}
//               </Text>
//             </TouchableOpacity>
//             <Text
//               style={{
//                 color: '#F97762',
//                 fontSize: 14,
//                 color: '#04A768',
//                 fontWeight: 'bold',
//                 marginTop: 10,
//                 marginLeft: 10
//               }}>
//               {item.plan.status}
//             </Text>
//           </View>
//         </View>)}
//       </View>
//     )
//   }

  
//   const _renderStorePlanItem = (item, index) => {
//     console.log("itemitem", item.billing_address)

//     return (

//       <View style={{
//         flexDirection: 'row',
//         width: 345,
//         height: 110,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         marginTop: index !== 0 ? 20 : 0,
//         marginTop: 20,
//       }}>

//         {getOrderList?.user_course.map((item, index) => <View style={{ flexDirection: "row" }} key={index}>
//           <View style={{ backgroundColor: "white", height: 110, width: "30%", justifyContent: "center", alignItems: "center" }}>
//              <Image
//             source={require('../image/card1.png')}
//             style={{
//               width: 70,
//               height: 80,
//               borderRadius: 6,
//               borderBottomColor: "grey",
//               borderBottomWidth: 2
//             }}
//           />
//           </View>
//           <View style={{ backgroundColor: "whiote", height: 110, width: "70%", justifyContent: "center", }}>
//             <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//               <Text
//                 style={{
//                   color: '#17212A',
//                   fontSize: 14,
//                   fontWeight: 'bold',
//                   marginLeft: 10,
//                   marginTop: 10
//                 }}>
//                 {item.course.title}
//               </Text>
//               <Text
//                 style={{
//                   color: '#F97762',
//                   fontSize: 12,
//                   marginLeft: 10,
//                   marginTop: 10
//                 }}>
//                 ${item.course.price}
//               </Text>
//             </TouchableOpacity>
//             <Text
//               style={{
//                 color: '#F97762',
//                 fontSize: 14,
//                 color: '#04A768',
//                 fontWeight: 'bold',
//                 marginTop: 10,
//                 marginLeft: 10
//               }}>
//               {item.course.status}
//             </Text>
//           </View>
//         </View>)}
//       </View>
//     )
//   }

//   return (
//     <>
//       <Text style={{ fontSize: 22,textAlign:"center",marginTop:20,fontWeight:"bold"}}>Plan</Text>
      
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#F5F5F5',
//           justifyContent: 'center',
//           alignSelf: 'center',
//           paddingHorizontal: 20
//         }}>
//         <FlatList
//           data={getOrderList?.user_store}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item, index }) => _renderItem(item)}
//         />
//       </View>

//       <Text style={{ fontSize: 22,textAlign:"center",marginTop:20,fontWeight:"bold"}}>course</Text>
      
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#F5F5F5',
//           justifyContent: 'center',
//           alignSelf: 'center',
//           paddingHorizontal: 20
//         }}>
//         <FlatList
//           data={getOrderList?.user_store}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item, index }) => _renderStorePlanItem(item)}
//         />
//       </View>



//     </>
//   );
// }

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
// });
















// harish


// import React, { useEffect, Component, useState } from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   Image,
//   ScrollView,
//   FlatList
// } from 'react-native';
// import * as actions from '../redux/action/actions';
// import { useDispatch, useSelector } from 'react-redux';

// export default function MyOrders({ navigation }) {

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(actions.getOrder());
//   }, [])

//   const { getOrderLoader, getOrderList } = useSelector((state) => ({
//     getOrderList: state.dashboardReducer.getOrderList,
//     getOrderLoader: state.dashboardReducer.getOrderLoader
//   }));

//   useEffect(() => {
//     console.log("Store -> getOrderList", getOrderList)
//   }, [getOrderList, getOrderLoader])

//   const _renderItem = (item, index) => {
//     console.log("itemitem", item)
//     return (

//       <View style={{
//         flexDirection: 'row',
//         width: 345,
//         height: 110,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         marginTop: index !== 0 ? 20 : 0,
//         marginTop: 20,
//       }}>
//         <View style={{ backgroundColor: "white", height: 110, width: "30%", justifyContent: "center", alignItems: "center" }}>
//           <Image
//             source={require('../image/card1.png')}
//             style={{
//               width: 70,
//               height: 80,
//               borderRadius: 6,
//               borderBottomColor: "grey",
//               borderBottomWidth: 2
//             }}
//           />
//         </View>

//         <View style={{ backgroundColor: "whiote", height: 110, width: "70%", justifyContent: "center", }}>

//           <Text
//             style={{
//               color: '#17212A',
//               fontSize: 14,
//               fontWeight: 'bold',
//               marginLeft: 10,
//               marginTop: 10
//             }}>
//             Building The Business Brainn
//           </Text>

//           <Text
//             style={{
//               color: '#F97762',
//               fontSize: 12,
//               marginLeft: 10,
//               marginTop: 10
//             }}>
//             ${item.price}
//           </Text>

//           <Text
//             style={{
//               color: '#F97762',
//               fontSize: 14,
//               color: '#04A768',
//               fontWeight: 'bold',
//               marginTop: 10,
//               marginLeft: 10
//             }}>
//             Order Confirmed
//           </Text>

//         </View>
//       </View>

//     )
//   }

//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#F5F5F5',
//           justifyContent: 'center',
//           alignSelf: 'center',
//           paddingHorizontal: 20
//         }}>
//         <FlatList
//           data={getOrderList?.user_store}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item, index }) => _renderItem(item)}
//         />
//         {/* <FlatList
//           data={getOrderList?.user_challenge}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item, index }) => _renderItem(item)}
//         />
//         <FlatList
//           data={getOrderList?.user_course}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item, index }) => _renderItem(item)}
//         /> */}
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
// });

// // import React, { useEffect, Component, useState } from 'react';
// // import { RadioButton, CheckBox } from 'react-native-paper';
// // import {
// //     StyleSheet,
// //     View,
// //     Text,
// //     TouchableOpacity,
// //     TextInput,
// //     ImageBackground,
// //     Image
// // } from 'react-native';

// // export default function Login({ navigation }) {
// //     const [text, onChangeText] = React.useState(null);

// //     return (
// //         <>
// //             <View style={{ flex: 1, backgroundColor: '#F5F5F5',justifyContent:"center" }}>
// //                 <View style={{ marginHorizontal: 12 }}>
// //                     <View style={{ flexDirection: "row" }}>
// //                         <Image
// //                             source={require('../image/order.png')}
// //                             style={{ width: 430, height: 130, marginTop: 8, marginLeft: -46 }}
// //                         />
// //                     </View>
// //                     <View style={{ flexDirection: "row" }}>
// //                         <Image
// //                             source={require('../image/order.png')}
// //                             style={{ width: 430, height: 130, marginLeft: -46 }}
// //                         />
// //                     </View>
// //                     <View style={{ flexDirection: "row" }}>
// //                         <Image
// //                             source={require('../image/order.png')}
// //                             style={{ width: 430, height: 130, marginLeft: -46 }}
// //                         />
// //                     </View>
// //                     <TouchableOpacity onPress={() => navigation.navigate('Package')}>
// //                         <View style={{ width: 134, height: 5, backgroundColor: "#E3E2E3", borderRadius: 10, marginTop: 240, justifyContent: "center", alignSelf: "center" }}></View>
// //                     </TouchableOpacity>
// //                 </View>
// //             </View>
// //         </>
// //     );
// // };
// // const styles = StyleSheet.create({
// //     checkboxContainer: {
// //         flexDirection: "row",
// //         marginBottom: 20,
// //     },
// // });
