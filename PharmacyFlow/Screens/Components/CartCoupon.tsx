import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Coupon from '../../Svg/Cart/Coupon';
import Arrow from '../../Svg/Cart/Arrow';
import styles from '../../styles/CartScreenStyles';

const CouponComponent: React.FC = () => {
  return (
    <TouchableOpacity style={styles.couponButton}>
      <View style={styles.couponStyle}>
        <Coupon />
        <Text style={styles.couponButtonText}>Apply My Coupons</Text>
      </View>
      <View>
        <Arrow/>
      </View>
    </TouchableOpacity>
  );
};

export default CouponComponent;
