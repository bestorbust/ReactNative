import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/MedFlatListStyles';

interface FooterProps {
  totalPrice: number;
  totalQuantity: number;
  navigation: any;
  cart: any[];
}

const Footer: React.FC<FooterProps> = ({ totalPrice, totalQuantity, navigation, cart }) => (
  <View style={styles.footer}>
    <View>
      <Text style={styles.totalText}>${totalPrice.toFixed(2)}</Text>
      <Text style={styles.totalQuantityText}>{totalQuantity} Item{totalQuantity !== 1 ? 's' : ''}</Text>
    </View>
    <TouchableOpacity style={styles.viewCartButton} onPress={() => navigation.navigate('CartScreen', { cart })}>
      <Text style={styles.viewCartButtonText}>View Cart</Text>
    </TouchableOpacity>
  </View>
);

export default Footer;
