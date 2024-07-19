import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Alert, ScrollView, Pressable } from "react-native";
import data from '../data/medicinedata.json';
import CovidEssentials from '../Svg/CovidEssentials';
import styles from '../styles/MedFlatListStyles';
import Search from '../Svg/Search'

interface Category {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  discount?: string;
  stock: string;
  image?: string;
  quantity?: number;
  addedToCart?: boolean;
}

const svgComponents: { [key: string]: React.ComponentType<any> } = {
  CovidEssentials,
};

const MedFlatList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [cart, setCart] = useState<Category[]>([]);
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

  const filteredCategories: Category[] = data.categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const incrementQuantity = (itemId: string) => {
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

  const decrementQuantity = (itemId: string) => {
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

  const addToCart = (item: Category) => {
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

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.topContainer}>
      <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for item"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Pressable style={styles.micButton} >
            <Search/>
          </Pressable>
        </View>
        </View>
        <FlatList
          data={filteredCategories}
          keyExtractor={item => item.id}
          numColumns={1}
          renderItem={({ item }) => {
            const SvgComponent = item.image ? svgComponents[item.image] : null;
            const quantity = quantities[item.id] || 0;

            return (

              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsScreen', item)}
                style={styles.categoryContainer}
              >
                <View style={styles.imageContainer}>
                  {SvgComponent ? (
                    <SvgComponent width={80} height={80}  />
                  ) : (
                    <Image
                      source={require('../assets/images/no-image.png')}
                      style={{ width: 80, height: 80 }}
                    />
                  )}
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.categoryText}>{item.name}</Text>
                  <Text style={styles.categoryDescription}>{item.description}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
                    {item.discountedPrice && (
                      <View style={styles.discountContainer}>
                        <Text style={styles.discountedPriceText}>
                          ${item.discountedPrice.toFixed(2)}
                        </Text>
                        <Text style={styles.discountText}>{item.discount}</Text>
                      </View>
                    )}
                  </View>
                  {item.addedToCart ? (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{quantity}</Text>
                      <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    item.stock === "Out of Stock" ? (
                      <Text style={styles.outOfStockText}>Sorry, this item is out of stock</Text>
                    ) : (
                      <TouchableOpacity onPress={() => addToCart(item)} style={styles.cartButton}>
                        <Text style={styles.cartButtonText}>Add To Cart</Text>
                      </TouchableOpacity>
                    )
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={styles.categoriesList}
        />
        
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalText}>${totalPrice.toFixed(2)}</Text>
          <Text style={styles.totalQuantityText}>{totalQuantity} Item{totalQuantity !== 1 ? 's' : ''}</Text>
        </View>
        <TouchableOpacity style={styles.viewCartButton} onPress={() => navigation.navigate('CartScreen', { cart })}>
          <Text style={styles.viewCartButtonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MedFlatList;
