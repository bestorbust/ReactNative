// import React, { Component } from 'react'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, Image, View } from 'react-native';
// import Swiper from 'react-native-swiper'
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <SwiperComponent></SwiperComponent>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// class SwiperComponent extends Component {
//   render() {
//     return (
//       <Swiper style={styles.wrapper} showsButtons={false}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Welcome to our application!</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>We want you to have a great experience</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>That is why we created this elegant intro</Text>
//         </View>
//         <View style={styles.slide4}>
//           <Text style={styles.text}>We hope that you enjoy your day</Text>
//         </View>
//         <View style={styles.slide5}>
//           <Text style={styles.text}>Cheers!</Text>
//           <Image style={styles.image} source={require('../assets/images/favicon.png')} />
//         </View>
//       </Swiper>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'orange'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue'
//   },
//   slide4: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'blue'
//   },
//   slide5: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightgreen'
//   },
//   image: {
//     width: 50,
//     height: 50,
//     margin: 20
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// });