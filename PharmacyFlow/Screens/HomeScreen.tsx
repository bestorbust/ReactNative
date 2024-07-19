import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, Pressable } from 'react-native';
import data from '../data/pharmacydata.json';
import Header from './Components/HomeHeader';
import SearchBar from './Components/HomeSearchBar';
import Card from './Components/HomeCard';
import CategoryList from './Components/HomeCategoryList';
import ChangeAddressModal from './Components/ChangeAddressMOdal';
import styles from '../styles/PharmacyStyles';
import CovidEssentials from '../Svg/Pharmacy/CovidEssentials';
import ColdFlu from '../Svg/Pharmacy/ColdFlu';
import Cosmetics from '../Svg/Pharmacy/Cosmetics';
import DiabetesCare from '../Svg/Pharmacy/DiabetesCare';
import Homeopathy from '../Svg/Pharmacy/Homeopathy';
import Supplement from '../Svg/Pharmacy/Supplement';
import BabyCare from '../Svg/Pharmacy/BabyCare';

const svgComponents = {
  ColdFlu,
  BabyCare,
  Cosmetics,
  CovidEssentials,
  DiabetesCare,
  Homeopathy,
  Supplement,
};

interface Props {
  navigation: any;
}

const Pharmacy: React.FC<Props> = ({ navigation }) => {
  const [address, setAddress] = useState(data.deliveryAddress);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const addressShrink = (addr: string, maxLength: number) => {
    return addr.length > maxLength ? addr.substring(0, maxLength) + '...' : addr;
  };

  const handleMicClick = () => {
    console.log('clicked the mic');
  };

  const filteredCategories = data.categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { width } = Dimensions.get('window');
  const isTablet = width >= 768;

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveAddress = (newAddress: string) => {
    setAddress(newAddress);
  };

  return (
    <View style={styles.container}>
      <Header
        storeName={data.storeName}
        address={address}
        addressShrink={addressShrink}
        handleOpenModal={handleOpenModal}
      />
      <ScrollView>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleMicClick={handleMicClick} />
        {!searchQuery && <Card/>}
        {!searchQuery && <Text style={styles.allCategoriesText}>ALL CATEGORIES</Text>}
        <CategoryList categories={filteredCategories} svgComponents={svgComponents} isTablet={isTablet} navigation={navigation} />
      </ScrollView>
      <ChangeAddressModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveAddress}
      />
    </View>
  );
};

export default Pharmacy;