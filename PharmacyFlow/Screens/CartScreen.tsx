import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { CustomDatePicker, CustomTimePicker } from './CustomDateTimePickers'; 
import CovidEssentials from '../Svg/CovidEssentials';
import Cottage from '../Svg/Cart/cottage';
import EditIcon from '../Svg/Cart/EditIcon';
import DropDown from '../Svg/Cart/DropDown';
import styles from '../styles/CartScreenStyles';
import HomeHealth from '../Svg/Cart/HomeHealth';
import PaymentComponent from './Components/CartPayment';
import NotesComponent from './Components/CartNotes';
import FooterComponent from './Components/CartFooter';
import CouponComponent from './Components/CartCoupon';

type CartItem = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
};

type Props = {
  route: RouteProp<{ Cart: { cart: CartItem[] } }, 'Cart'>;

};


const CartScreen: React.FC<Props> = ({ route }) => {
  const { cart: initialCart } = route.params;
  const [cart, setCart] = useState(initialCart);
  const [deliveryOption, setDeliveryOption] = useState<'Delivery' | 'Click & collect'>('Delivery');
  const [notes, setNotes] = useState('');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showPicker,setShowPicker] = useState(false);

  const svgComponents: { [key: string]: React.ComponentType<any> } = {
    CovidEssentials,
  };

  const getTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const incrementQuantity = (itemId: string) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
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
      [itemId]: (prev[itemId] || 0) > 0 ? prev[itemId] - 1 : 0,
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

  const toggleDeliveryOption = (option: 'Delivery' | 'Click & collect') => {
    setDeliveryOption(option);
  };

 
  
  const formatPreferredDeliveryDate = (date, time) => {
    const dateString = date.toLocaleDateString('en-US', {  month: 'short',day: '2-digit' });
    const timeString = `${time.getHours() % 12 || 12}am - ${time.getHours() % 12 + 3 || 3}am`;
    return `${dateString}, ${timeString}`;
  };


  const renderItem = ({ item }: { item: CartItem }) => {

    const SvgComponent = item.image && svgComponents[item.image];

    return(
      <View style={styles.categoryContainer}>
              <View style={styles.imageContainer}>
              {SvgComponent && <SvgComponent width={60} height={60} />}
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.categoryText} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.categoryDescription}>{item.description}</Text>


          <View style={styles.quantityContainer}>
            <View>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.quantityControl}>
          <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
          </View>
          
        </View>
        
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.deliveryOptions}>
          <TouchableOpacity
            style={[styles.optionButton, deliveryOption === 'Delivery' && styles.activeOption]}
            onPress={() => setDeliveryOption('Delivery')}
          >
            <Text style={styles.optionText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, deliveryOption === 'Click & collect' && styles.activeOption]}
            onPress={() => setDeliveryOption('Click & collect')}
          >
            <Text style={styles.optionText}>Click & collect</Text>
          </TouchableOpacity>
        </View>
          {deliveryOption === 'Delivery' ? 
          <View style={styles.addressTitle}>
            <View style={styles.cottageImage}>
            <Cottage/>            
            <Text style={styles.addressTitleText}>DELIVERY ADDRESS</Text>
            </View>
            <View ><EditIcon/></View>
            </View>
             : 
            
            <View style={styles.addressTitle}>
            <View style={styles.homeHealth}>
            <HomeHealth/>            
            <Text style={styles.addressTitleText}>CLICK & COLLECT PHARMACY ADDRESS</Text>
            </View>
            <View ><EditIcon/></View>
            </View>
              }
        <Text style={styles.address}>
        {deliveryOption === 'Delivery' ? 'NO 184/187 Block B,63 Balonne street, Lakewood,Australia' : 'Central Med Store, No 184/187 Block B, 63 Balonne Street, Lakewood, Australia'}
        </Text>
         {deliveryOption === 'Delivery' ?
        <View style={styles.dateTimeContainer}>
        <Text style={styles.dateTimeLabel}>Preferred Delivery Date</Text>
        <View style={styles.preferredDeliveryDateContainer}>
          <Text style={styles.preferredDeliveryDate}>{formatPreferredDeliveryDate(date, time)}</Text>
          <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
            <DropDown width={20} height={20} />
          </TouchableOpacity>
        </View>
        {showPicker && (
          <View style={styles.pickerRow}>
            <CustomDatePicker date={date} onChange={setDate} />
            <CustomTimePicker time={time} onChange={setTime} />
          </View>
        )}
      </View>:<View></View>}
        </View>
       <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <CouponComponent />
      <PaymentComponent getTotal={getTotal} />
      <NotesComponent notes={notes} setNotes={setNotes} />
      <FooterComponent getTotal={getTotal} />
    </ScrollView>
  );
};

export default CartScreen;
