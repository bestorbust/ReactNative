import React from 'react';
import { View, Text, Pressable } from 'react-native';
import HeaderImage from '../../Svg/Pharmacy/HeaderImage';
import styles from '../../styles/PharmacyStyles';

interface HeaderProps {
  storeName: string;
  address: string;
  addressShrink: (addr: string, maxLength: number) => string;
  handleOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ storeName, address, addressShrink, handleOpenModal }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <HeaderImage />
        </View>
        <View style={styles.headerLeft}>
          <Text style={styles.storeName}>{storeName}</Text>
          <View style={styles.address}>
            <Text style={styles.deliveryText}>Delivering to </Text>
            <Text style={styles.deliveryAddress} numberOfLines={1}>
              {addressShrink(address, 24)}
            </Text>
          </View>
        </View>
        <Pressable style={styles.changeButton} onPress={handleOpenModal}>
          <Text style={styles.changeButtonText}>Change</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
