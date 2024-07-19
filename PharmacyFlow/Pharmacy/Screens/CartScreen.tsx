import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type CartItem = {
  name: string;
  quantity: number;
  price: number;
};

type Props = {
  route: RouteProp<{ Cart: { cart: CartItem[] } }, 'Cart'>;
};

const CartScreen: React.FC<Props> = ({ route }) => {
  const { cart } = route.params;

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>Quantity: {item.quantity}</Text>
            <Text style={styles.itemDetails}>Price: ${item.price.toFixed(2)}</Text>
          </View>
        )}
        ListFooterComponent={
          <Text style={styles.totalText}>Total: ${getTotal()}</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default CartScreen;

