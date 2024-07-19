import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Upload from '../../Svg/Pharmacy/Upload';
import CardImage from '../../Svg/Pharmacy/CardImage';
import Flower from '../../Svg/Pharmacy/Flower';
import Flower1 from '../../Svg/Pharmacy/Flower1';
import styles from '../../styles/PharmacyStyles';

const Card: React.FC = () => {
  return (
    <View style={styles.uploadContainer}>
      <View>
        <Text style={styles.cardText}>Upload your Prescription</Text>
        <Text style={styles.cardText}>for delivery</Text>
        <Pressable style={styles.uploadButton}>
          <Upload />
          <Text style={styles.uploadButtonText}>Upload prescription</Text>
        </Pressable>
      </View>
      <View style={styles.flower1}>
        <Flower />
      </View>
      <View style={styles.flower2}>
        <Flower1 />
      </View>
      <View style={styles.cardImage}>
        <CardImage />
      </View>
    </View>
  );
};

export default Card;
