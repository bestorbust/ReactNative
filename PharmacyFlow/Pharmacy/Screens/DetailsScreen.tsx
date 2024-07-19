// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
// import { useRoute, RouteProp } from '@react-navigation/native';
// import Swiper from 'react-native-swiper';
// import CovidEssentials from '../Svg/CovidEssentials';

// interface Category {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountedPrice?: number;
//   discount?: string;
//   stock: string;
//   image?: string;
//   contains?: string;
//   manufacturer?: string;
//   countryOfOrigin?: string;
//   storage?: string;
// }

// const svgComponents: { [key: string]: React.ComponentType<any> } = {
//   CovidEssentials,
// };

// type RouteParams = {
//   params: Category;
// };

// const DetailsScreen: React.FC = () => {
//   const route = useRoute<RouteProp<RouteParams, 'params'>>();
//   const item = route.params;

//   const SvgComponent = item.image ? svgComponents[item.image] : null;

//   const [showFullStorage, setShowFullStorage] = useState(false);

//   const handleReadMore = () => {
//     setShowFullStorage(!showFullStorage);
//   };

//   const renderStorageText = (storage?: string) => {
//     if (!storage) return null;
//     if (showFullStorage || storage.length <= 100) {
//       return (
//         <Text style={styles.infoText}>
//           {storage}
//         </Text>
//       );
//     } else {
//       return (
//         <Text style={styles.infoText}>
//           {`${storage.substring(0, 264)}... `}
//           <Text style={styles.readMoreText} onPress={handleReadMore}>
//             Read More
//           </Text>
//         </Text>
//       );
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Swiper style={styles.wrapper} loop paginationStyle={styles.paginationStyle}>
//           {item.image ? (
//             [0, 1, 2].map((_, index) => (
//               <View key={index} style={styles.slide}>
//                 {SvgComponent ? (
//                   <SvgComponent width={150} height={150} />
//                 ) : (
//                   <Image
//                     source={{ uri: item.image }} 
//                     style={styles.image}
//                   />
//                 )}
//               </View>
//             ))
//           ) : (
//             <View style={styles.slide}>
//               <Image
//                 source={require('../assets/images/no-image.png')}
//                 style={styles.image}
//               />
//             </View>
//           )}
//         </Swiper>
//       </View>
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <View style={styles.priceContainer}>
//         <View style={styles.priceDetails}>
//           <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//           <View style={styles.discountContainer}>
//             {item.discountedPrice && (
//               <Text style={styles.discountedPrice}>${item.discountedPrice.toFixed(2)}</Text>
//             )}
//             {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
//           </View>
//         </View>
//         <TouchableOpacity style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Add To Cart</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoTitle}>Information</Text>
//         <View style={styles.infoRow}>
//           <Text style={styles.infoLabel}>Contains</Text>
//           <Text style={styles.infoText}>{item.contains}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <Text style={styles.infoLabel}>Manufacturer</Text>
//           <Text style={styles.infoText}>{item.manufacturer}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <Text style={styles.infoLabel}>Country of origin</Text>
//           <Text style={styles.infoText}>{item.countryOfOrigin}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <Text style={styles.infoLabel}>Storage</Text>
//           {renderStorageText(item.storage)}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default DetailsScreen;


// const { width } = Dimensions.get('window');
// const isTablet = width >= 768;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     height: isTablet ? 400 : 300,
//   },
//   wrapper: {},
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: 'grey',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginHorizontal: isTablet ? 50 : 25,
//     marginTop: isTablet ? 40 : 20,
//     marginBottom: isTablet ? 60 : 45,
//   },
//   paginationStyle: {},
//   image: {
//     width: isTablet ? 200 : 150,
//     height: isTablet ? 200 : 150,
//   },
//   name: {
//     fontSize: isTablet ? 32 : 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     margin: 20,
//   },
//   description: {
//     fontSize: isTablet ? 20 : 16,
//     color: '#777',
//     marginBottom: 16,
//     marginHorizontal: 20,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 16,
//     backgroundColor: '#f8f8f8',
//     padding: 15,
//     borderRadius: 10,
//     marginHorizontal: 20,
//   },
//   priceDetails: {
//     flex: 1,
//   },
//   price: {
//     fontSize: isTablet ? 24 : 20,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: "#025660",
//   },
//   discountContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   discountedPrice: {
//     fontSize: isTablet ? 18 : 14,
//     fontWeight: 'bold',
//     textDecorationLine: 'line-through',
//     color: '#ddd',
//     marginRight: 8,
//   },
//   discount: {
//     fontSize: isTablet ? 18 : 16,
//     color: 'green',
//   },
//   cartButton: {
//     paddingVertical: isTablet ? 12 : 10,
//     paddingHorizontal: isTablet ? 25 : 20,
//     backgroundColor: '#025660',
//     borderRadius: 5,
//   },
//   cartButtonText: {
//     color: '#fff',
//     fontSize: isTablet ? 18 : 16,
//   },
//   infoContainer: {
//     marginTop: 16,
//     marginHorizontal: 20,
//   },
//   infoTitle: {
//     fontSize: isTablet ? 20 : 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   infoLabel: {
//     fontSize: isTablet ? 18 : 16,
//     color: '#555',
//     width: isTablet ? 160 : 130,
//   },
//   infoText: {
//     fontSize: isTablet ? 18 : 16,
//     color: '#555',
//     flex: 1,
//   },
//   readMoreText: {
//     fontSize: isTablet ? 18 : 16,
//     color: '#025660',
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import CovidEssentials from '../Svg/CovidEssentials';
import styles from '../styles/DetailsScreenStyles';

interface Category {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  discount?: string;
  stock: string;
  image?: string;
  contains?: string;
  manufacturer?: string;
  countryOfOrigin?: string;
  storage?: string;
}

const svgComponents: { [key: string]: React.ComponentType<any> } = {
  CovidEssentials,
};

type RouteParams = {
  params: Category;
};

const DetailsScreen: React.FC = () => {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const item = route.params;

  const SvgComponent = item.image ? svgComponents[item.image] : null;

  const [showFullStorage, setShowFullStorage] = useState(false);

  const handleReadMore = () => {
    setShowFullStorage(!showFullStorage);
  };

  const renderStorageText = (storage?: string) => {
    if (!storage) return null;
    return (
      <Text style={styles.infoText}>
        {showFullStorage || storage.length <= 100 ? storage : `${storage.substring(0, 264)}... `}
        {!showFullStorage && storage.length > 100 && (
          <Text style={styles.readMoreText} onPress={handleReadMore}>
            Read More
          </Text>
        )}
      </Text>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Swiper
         style={styles.wrapper}
         loop 
         paginationStyle={styles.paginationStyle}
         dot={<View style={styles.inactiveDot}/>}
         activeDot={<View style={styles.activeDot}/>}
         >
          {item.image ? (
            [0, 1, 2].map((_, index) => (
              <View key={index} style={styles.slide}>
                {SvgComponent ? (
                  <SvgComponent width={150} height={150} />
                ) : (
                  <Image source={{ uri: item.image }} style={styles.image} />
                )}
              </View>
            ))
          ) : (
            <View style={styles.slide}>
              <Image source={require('../assets/images/no-image.png')} style={styles.image} />
            </View>
          )}
        </Swiper>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.priceContainer}>
        <View style={styles.priceDetails}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <View style={styles.discountContainer}>
            {item.discountedPrice && (
              <Text style={styles.discountedPrice}>${item.discountedPrice.toFixed(2)}</Text>
            )}
            {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
          </View>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Contains</Text>
          <Text style={styles.infoText}>{item.contains}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Manufacturer</Text>
          <Text style={styles.infoText}>{item.manufacturer}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Country of origin</Text>
          <Text style={styles.infoText}>{item.countryOfOrigin}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Storage</Text>
          {renderStorageText(item.storage)}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;



