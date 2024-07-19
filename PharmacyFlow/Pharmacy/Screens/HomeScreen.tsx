import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, Pressable, ScrollView, FlatList } from "react-native";
import { SvgProps } from 'react-native-svg';
import data from '../data/pharmacydata.json';
import CovidEssentials from '../Svg/Pharmacy/CovidEssentials';
import ColdFlu from '../Svg/Pharmacy/ColdFlu';
import Cosmetics from '../Svg/Pharmacy/Cosmetics';
import DiabetesCare from '../Svg/Pharmacy/DiabetesCare';
import Homeopathy from '../Svg/Pharmacy/Homeopathy';
import Supplement from '../Svg/Pharmacy/Supplement';
import HeaderImage from '../Svg/Pharmacy/HeaderImage';
import Mic from '../Svg/Pharmacy/Mic';
import Upload from '../Svg/Pharmacy/Upload';
import CardImage from '../Svg/Pharmacy/CardImage';
import BabyCare from '../Svg/Pharmacy/BabyCare';
import Flower from '../Svg/Pharmacy/Flower';
import Flower1 from '../Svg/Pharmacy/Flower1';
import styles from '../styles/PharmacyStyles';

const svgComponents: { [key: string]: React.ComponentType<SvgProps> } = {
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

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <HeaderImage />
          </View>
          <View style={styles.headerLeft}>
            <Text style={styles.storeName}>{data.storeName}</Text>
            <View style={styles.address}>
              <Text style={styles.deliveryText}>Delivering to </Text>
              <Text style={styles.deliveryAddress}>{addressShrink(address, 24)}</Text>
            </View>
          </View>
          <Pressable style={styles.changeButton} onPress={() => {}}>
            <Text style={styles.changeButtonText}>Change</Text>
          </Pressable>
        </View>
      </View>

      {/* body */}
      <ScrollView>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for item"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Pressable style={styles.micButton} onPress={handleMicClick}>
            <Mic />
          </Pressable>
        </View>

        {/* card */}
        {!searchQuery && (
          <View style={styles.uploadContainer}>
            <View>
              <Text style={styles.cardText}>Upload your Prescription</Text>
              <Text style={styles.cardText}>for delivery</Text>
              <Pressable style={styles.uploadButton}>
                <Upload />
                <Text style={styles.uploadButtonText}>Upload prescription</Text>
              </Pressable>
            </View>
            <View style={styles.flower1}>
              <Flower />
            </View>
            <View style={styles.flower2}>
              <Flower1 />
            </View>
            <View style={styles.cardImage}>
              <CardImage />
            </View>
          </View>
        )}

        {/* all categories */}
        {!searchQuery && <Text style={styles.allCategoriesText}>ALL CATEGORIES</Text>}

        <FlatList
          data={filteredCategories}
          keyExtractor={item => item.name}
          numColumns={3}
          renderItem={({ item }) => {
            const SvgComponent = svgComponents[item.image];
            return (
              <Pressable style={styles.categoryContainer} onPress={() => navigation.navigate('MedFlatList')}>
                <View style={styles.categoriesImage}>
                  <SvgComponent width={isTablet ? 100 : 50} height={isTablet ? 100 : 50} />
                </View>
                <Text style={styles.categoryText}>{item.name}</Text>
              </Pressable>
            );
          }}
          contentContainerStyle={styles.categoriesList}
        />
      </ScrollView>
    </View>
  );
};

export default Pharmacy;


