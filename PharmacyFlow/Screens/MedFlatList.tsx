import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import data from '../data/medicinedata.json';
import CovidEssentials from '../Svg/CovidEssentials';
import Header from './Components/MedHeader';
import Footer from './Components/MedFooter';
import MedFlatListContent from './Components/MedFlatlistComp';
import styles from '../styles/MedFlatListStyles';

const svgComponents: { [key: string]: React.ComponentType<any> } = {
  CovidEssentials,
};

const MedFlatList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce((total, cartItem) => {
      return total + (cartItem.price * (cartItem.quantity || 0));
    }, 0);
    setTotalPrice(newTotalPrice);

    const newTotalQuantity = cart.reduce((total, cartItem) => {
      return total + (cartItem.quantity || 0);
    }, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const handleAddToCart = (item: any) => {
    const quantity = quantities[item.id] || 1;
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);

    if (itemInCart) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: (cartItem.quantity || 0) + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }

    setQuantities(prev => ({
      ...prev,
      [item.id]: quantity,
    }));

    item.addedToCart = true;

    Alert.alert('Success', `${item.name} has been added to the cart`);
  };

  const handleIncrementQuantity = (itemId: string) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));

    setCart(prevCart => {
      const updatedCart = prevCart.map(cartItem => {
        if (cartItem.id === itemId) {
          return { ...cartItem, quantity: (cartItem.quantity || 0) + 1 };
        }
        return cartItem;
      });
      return updatedCart;
    });
  };

  const handleDecrementQuantity = (itemId: string) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) > 0 ? prev[itemId] - 1 : 0
    }));

    setCart(prevCart => {
      const updatedCart = prevCart.map(cartItem => {
        if (cartItem.id === itemId) {
          return { ...cartItem, quantity: (cartItem.quantity || 0) > 0 ? (cartItem.quantity || 0) - 1 : 0 };
        }
        return cartItem;
      });
      return updatedCart;
    });
  };

  const filteredCategories = data.categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <MedFlatListContent
        data={filteredCategories}
        svgComponents={svgComponents}
        quantities={quantities}
        onAddToCart={handleAddToCart}
        onIncrementQuantity={handleIncrementQuantity}
        onDecrementQuantity={handleDecrementQuantity}
        navigation={navigation}
      />
      <Footer totalPrice={totalPrice} totalQuantity={totalQuantity} navigation={navigation} cart={cart} />
    </View>
  );
};

export default MedFlatList;
