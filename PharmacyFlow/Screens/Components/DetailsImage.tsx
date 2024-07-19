import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../styles/DetailsScreenStyles';

interface Props {
  svgComponents: { [key: string]: React.ComponentType<any> }; // Define props interface
  item: {
    image?: string;
  };
}

const Images: React.FC<Props> = ({ svgComponents, item }) => { // Receive svgComponents as prop
  const renderImages = () => {
    const SvgComponent = item.image ? svgComponents[item.image] : null;
    return item.image ? (
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
        <Image source={require('../../assets/images/no-image.png')} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.imageContainer}>
      <Swiper
        style={styles.wrapper}
        loop
        paginationStyle={styles.paginationStyle}
        dot={<View style={styles.inactiveDot}/>}
        activeDot={<View style={styles.activeDot}/>}
      >
        {renderImages()}
      </Swiper>
    </View>
  );
};

export default Images;
