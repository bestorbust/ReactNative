import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/CartScreenStyles';

type FooterProps = {
  getTotal: () => string;
};

const FooterComponent: React.FC<FooterProps> = ({ getTotal }) => {
  return (
    <TouchableOpacity style={styles.payButton}>
      <Text style={styles.payButtonText}>Pay ${(parseFloat(getTotal()) - 28.80).toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

export default FooterComponent;
