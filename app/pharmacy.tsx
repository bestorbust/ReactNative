import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, ScrollView, SafeAreaView, FlatList } from "react-native";
import data from '../data/pharmacydata.json';

import CovidEssentials from '../components/Pharmacy/CovidEssentials';
import ColdFlu from '../components/Pharmacy/ColdFlu';
import Cosmetics from '../components/Pharmacy/Cosmetics';
import DiabetesCare from '../components/Pharmacy/DiabetesCare';
import Homeopathy from '../components/Pharmacy/Homeopathy';
import Supplement from '../components/Pharmacy/Supplement';
import HeaderImage from '../components/Pharmacy/HeaderImage';
import Mic from '../components/Pharmacy/Mic';
import Upload from '../components/Pharmacy/Upload';
import CardImage from '../components/Pharmacy/CardImage';
import BabyCare from '../components/Pharmacy/BabyCare';
import Flower from '../components/Pharmacy/Flower';
import Flower1 from '../components/Pharmacy/Flower1'


const svgComponents: { [key: string]: React.ElementType } = {
  ColdFlu,
  BabyCare,
  Cosmetics,
  CovidEssentials,
  DiabetesCare,
  Homeopathy,
  Supplement,
};


const Pharmacy = () => {
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

  const { width, height } = Dimensions.get('window');
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      {/* header */}
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
        { !searchQuery?
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
            <Flower/>
          </View>
          <View style={styles.flower2}>
            <Flower1/>
          </View>
          <View style={styles.cardImage}>
            <CardImage />
          </View>
        </View>: <View></View>}

        {/* all categories */}
        {!searchQuery?
        <Text style={styles.allCategoriesText}>ALL CATEGORIES</Text>:
        <View></View>}

          <FlatList
            data={filteredCategories}
            keyExtractor={item => item.name}
            numColumns={3}
            renderItem={({ item }) => {
              const SvgComponent = svgComponents[item.image];
              return (
                <View style={styles.categoryContainer}>
                  <View style={styles.categoriesImage}>
                    {isTablet ?
                      <SvgComponent width={100} height={100} /> :
                      <SvgComponent width={50} height={50} />
                    }
                  </View>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </View>
              );
            }}
            contentContainerStyle={styles.categoriesList}
          />

      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');
const isTablet = width >= 768;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: isTablet ? 40 : 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#0111111a",
    paddingVertical: 20,
    margin:isTablet?40:20,
  },
  headerImage: {
    alignSelf: "flex-start",
    top: 5
  },
  headerLeft: {
    flex: 1,
    alignSelf: 'flex-start',
    marginHorizontal: 5,
    justifyContent: 'space-between'
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  address: {
    flexDirection: 'row',
    paddingVertical: 0,
    fontSize:7,
    alignSelf: 'flex-start',

  },
  deliveryAddress: {
    alignSelf: "flex-end",
    color: '#555',
    fontSize: width<=360?9:11,
    bottom: 1
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  changeButton: {
    backgroundColor: '#eff9fa',
    padding: 12,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  changeButtonText: {
    fontSize: 16,
    color: '#025660',
    fontWeight: 'bold'
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin:isTablet?40:20,

  },
  searchBar: {
    flex: 1,
    padding: 15,
  },
  micButton: {
    padding: 10,
  },
  uploadContainer: {
    height: isTablet ? 225 : 150,
    backgroundColor: '#f7ebc3',
    padding: 30,
    paddingTop:16,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    paddingRight: 0,
    margin:isTablet?40:20,
  },
  uploadButton: {
    backgroundColor: '#025660',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    top: 10,
    bottom:24,
    // marginVertical: 8,
    alignItems: 'flex-start',
    maxWidth: isTablet ? '28%' : '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: width<=360?13:14,
    textAlign: 'left',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#025660"
  },
  cardImage: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
  },
  allCategoriesText: {
    color: '#555',
    marginVertical: 20,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  categoriesList: {
    marginTop: 16,
    margin:isTablet?40:20,

  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
    margin: isTablet ? 15 : 10,
    maxWidth: '32%',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  categoriesImage: {
    padding: 10,
    backgroundColor: '#F1EDDF80',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2DBC2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 1,
    maxHeight: isTablet ? 180 : 110,
  },
  flower1:{
    overflow:'hidden',
    width:'50%',
    alignContent:"center",
    alignItems:'center',
    position:"absolute",
    top:isTablet?-80:-45,
    left:100
  },
  flower2:{
    overflow:'hidden',
    width:'50%',
    alignContent:"center",
    alignItems:'center',
    position:"absolute",
    top:0,
    left:isTablet?340:163,
  },
});

export default Pharmacy;
