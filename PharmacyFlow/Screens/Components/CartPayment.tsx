import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/CartScreenStyles';

type PaymentProps = {
  getTotal: () => string;
};

const PaymentComponent: React.FC<PaymentProps> = ({ getTotal }) => {
  return (
    <View style={styles.paymentSummary}>
      <Text style={styles.summaryText}>PAYMENT SUMMARY</Text>
      <View style={styles.texts}>
        <Text style={styles.paymentSummaryText}>Order Total: </Text>
        <Text style={styles.paymentSummaryTextPrice}>${getTotal()}</Text>
      </View>
      <View style={styles.texts}>
        <Text style={styles.paymentSummaryText}>Items Discount: </Text>
        <Text style={styles.paymentSummaryTextDiscount}>$28.80</Text>
      </View>
      <View style={styles.texts}>
        <Text style={styles.paymentSummaryText}>Coupon Discount: </Text>
        <Text style={styles.paymentSummaryTextDiscount}>-$0</Text>
      </View>
      <View style={styles.texts}>
        <Text style={styles.paymentSummaryText}>Shipping: </Text>
        <Text style={styles.paymentSummaryTextPrice}>Free</Text>
      </View>
      <View style={styles.totalTexts}>
        <Text style={styles.totalText}>Total: </Text>
        <Text style={styles.paymentSummaryTextPrice}>${(parseFloat(getTotal()) - 28.80).toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default PaymentComponent;
