import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/DetailsScreenStyles';

interface Props {
  item: {
    name: string;
    description: string;
    price: number;
    discountedPrice?: number;
    discount?: string;
    stock: string;
  };
}

const NameDetailWithPrice: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.nameDetailContainer}>
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
        {item.stock === 'In Stock' ? (
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.outOfStockText}>Sorry, this item is out of stock</Text>
        )}
      </View>
    </View>
  );
};

export default NameDetailWithPrice;
