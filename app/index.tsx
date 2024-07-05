import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable ,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';
import Mcb from '../components/Mcb';
import Tdb from '../components/Tdb';
import Opb from '../components/Opb';
import Pdb from '../components/Pdb';
import Slidercardimage from '../components/Slidercard';
import Top from '../components/Top';

interface Slide {
  id: number;
  bannerText: string[];
  buttonText: string;
}

const App: React.FC = () => {

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headerLeftView}>
          <Image source={require('../assets/logo.png')} style={styles.headerImage} />
          <Text style={styles.headerSubheader}>Doctors anywhere within minutes, 24/7.</Text>
        </View>
        <View style={styles.headerRightView}>
          <View style={styles.profileLogoContainer}>
            <Image source={require('../assets/icon.jpg')} style={styles.profileLogo} />
            <View style={styles.halfCircle} />
          </View>
        </View>
      </View>

      <ScrollView>
        {/* Swipable Top banner */}
        <View style={styles.swiperContainer1}>
          <Swiper
            style={styles.swiper}
            autoplay={false}
            paginationStyle={styles.paginationStyle}
            dotStyle={styles.paginationDot}
            activeDotStyle={styles.paginationDotActive}
          >
            {slidesData.slice(0, 3).map(slide => (
              <View style={styles.topBanner} key={slide.id}>
                {slide.bannerText.map((item, index) => (
                  <Text key={index} style={[item.style]}>
                    {item.text}
                  </Text>
                ))}
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>{slide.buttonText}</Text>
                </Pressable>
                <View style={styles.bannerimg}>
                  <Top></Top>
                </View>

              </View>
            ))}
          </Swiper>

        </View>

        {/* Cards */}
        <View style={styles.cardContainers}>
          <View style={styles.Cards}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>TELEHEALTH</Text>
              <Text style={styles.cardTitle}>DOCTORS</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>FROM $35.00</Text>
              </View>
              <View style={styles.cardsimage}>
                <Tdb></Tdb>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>MEDICAL</Text>
              <Text style={styles.cardTitle}>CERTIFICATE</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>FROM $15.90</Text>
              </View>
              <View style={styles.cardsimage}>
                <Mcb></Mcb>
              </View>
            </View>
          </View>
          <View style={styles.Cards}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>ONLINE</Text>
              <Text style={styles.cardTitle}>PRESCRIPTION</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>FROM $17.90</Text>
              </View>
              <View style={styles.cardsimage}>
                <Opb></Opb>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>PHARMACY</Text>
              <Text style={styles.cardTitle}>DELIVERY</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>FROM $4.99</Text>
              </View>
              <View style={styles.cardsimage}>
                <Pdb></Pdb>
              </View>
            </View>
          </View>
        </View>

        {/* Swipable Slider card */}
        <Swiper
          style={styles.swiper}
          autoplay={false}
          showsPagination={false}
        >
          {slidesData.slice(3).map(slide => (
            <View style={styles.swiperCard} key={slide.id}>
              {slide.bannerText.map((item, index) => (
                // <RainbowText key={index} text={item.text}/>
                <Text key={index} style={[item.style]}>
                  {item.text}
                </Text>
              ))}
              <Pressable style={styles.slidebutton}>
                <Text style={styles.sliderButton}>{slide.buttonText}</Text>
              </Pressable>
              <View style={styles.sliderimg}>
                <Slidercardimage></Slidercardimage>
              </View>
            </View>
          ))}
        </Swiper>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText1}>Making healthcare</Text>
          <Text style={styles.bottomText}>more</Text>
          <Text style={styles.bottomText}>accessible &</Text>
          <Text style={styles.bottomText}>affordable</Text>
          <Text style={styles.bottomText1}>Made with 💚 by Hola health</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const isTablet = width >= 768;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor:'#F0F0F0',
    padding:20,
    paddingTop:30,
    flexDirection: 'row',
    paddingVertical: isTablet ? 20 : 18,
    paddingHorizontal: isTablet ? 20 : 17,
    justifyContent: 'space-between',

  },
  headerLeftView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  profileLogoContainer: {
    position: 'relative',
  },
  profileLogo: {
    width: isTablet ? 50 : 40,
    height: isTablet ? 50 : 40,
    borderRadius: isTablet ? 25 : 20,
  },
  halfCircle: {
    position: 'absolute',
    right: -1,
    bottom: 0,
    width: isTablet ? 30 : 25,
    height: isTablet ? 50 : 40,
    borderTopRightRadius: isTablet ? 25 : 20,
    borderBottomRightRadius: isTablet ? 25 : 20,
    borderWidth: 2,
    borderColor: '#008080',
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  headerSubheader: {
    fontSize: isTablet ? 18 : 12,
    marginLeft: 2,
    fontWeight: '500',
  },
  headerImage: {
    width: isTablet ? 80 : 70,
    height: isTablet ? 40 : 30,
    // resizeMode: 'contain',
  },
  swiperContainer1: {
    height:isTablet?290:250,
    position: 'relative',
    marginVertical:-10,
    backgroundColor:'#F0F0F0',
    paddingVertical:20,
    justifyContent:'space-between',
  },
  swiperContainer: {
    position: 'relative',
  },
  swiper: {
    width:'auto',
    height: isTablet?240:200,
  },
  topBanner: {
    height:isTablet?215:'auto',
    backgroundColor: '#FFF087',
    padding: 20,
    justifyContent: 'flex-start',
    borderRadius: 16,
    margin: 20,
    overflow:'hidden',
    position:'relative'
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width:isTablet?'20%':'40%',
  },
  buttonText: {
    fontSize:isTablet?20:16,
    color: '#005760',
    fontWeight: 'bold',
  },
  cardContainers: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
    paddingVertical:15,
    paddingBottom:50,
    backgroundColor:'#F0F0F0'
  },
  Cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    paddingHorizontal: 10,
    paddingTop:10,
    marginVertical: 10,
    height: isTablet?350:215,
    width: '46%',
    overflow:'hidden',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#0111111A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    position:'relative'
  },
  cardTitle: {
    fontSize:isTablet?30: 16,
    fontWeight: 'bold',
  },
  priceContainer: {
    backgroundColor: '#FFF087',
    borderRadius: 8,
    padding: 5,
    justifyContent: 'flex-start',
    width: isTablet?'50%':'75%',
    top: 5,
  },
  priceText: {
    fontSize: isTablet?20:14,
    fontWeight: 'bold',
  },
  cardsimage:{
    position:'absolute',
    bottom:0,
    right:0,
    flex: 1,
  },
  swiperCard: {
    top:25,
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#0111111A',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 5,
    marginHorizontal: 20,
    overflow: 'hidden',
    padding: 20,
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between', 
    position: 'relative',
    width:'auto',
    height: isTablet?215:170,

  },
  sliderimg:{
    position: 'absolute',
    alignSelf:'flex-end',
    right:0,
    bottom:0,
    top:0,
  },
  bannerimg:{
    position: 'absolute',
    alignSelf:'flex-end',
    bottom:0,
  },
  paginationStyle:{
    position: 'absolute',
    bottom: -3,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 95,
    height: 3,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#01111166', 
  },
  paginationDotActive: {
    width: 95,
    height: 3,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#005760', 
  },
  bottomTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical:25,
    marginBottom:40,
  },
  bottomText1: {
    fontSize: isTablet ? 20 : 16,
    color: '#01111166',
    fontWeight: '500',
    textAlign: 'left',
  },
  bottomText:{
    color: '#01111166',
    fontSize: isTablet ? 34 : 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  bannerTextStyle1:{
    fontSize: isTablet ? 35 : 24,
    fontWeight: 'bold',
  },
  bannerTextStyle2:{
    fontSize: isTablet ? 25 : 15,
  },
  bannerTextStyle3:{
    fontSize: isTablet ? 25 : 18,
    fontWeight: 'bold',
  },
  bannerTextStyle4:{
    fontSize: isTablet ? 25 : 18,
    fontWeight: 'bold',
  },
  slidebutton:{
    marginVertical:20,
  },
  sliderTextStyle:{
    fontSize:isTablet?20:15,
    fontWeight: 'bold',
  },
  sliderButton:{
    fontSize:isTablet?20:15,
    color: '#008080',
    fontWeight: 'bold',
  },
});

const slidesData = [
  {
    id: 1,
    bannerText: [
      { text: 'FEELING SICK?', style: styles.bannerTextStyle1 },
      { text: 'Speak to a doctor in', style: styles.bannerTextStyle2 },
      { text: '15 minutes', style: styles.bannerTextStyle3 }
    ],
    buttonText: 'See a doctor',
  },
  {
    id: 2,
    bannerText: [
      { text: 'Another Banner2', style: styles.bannerTextStyle1 },
      { text: 'Content', style: styles.bannerTextStyle2 }
    ],
    buttonText: 'See a doctor',
  },
  {
    id: 3,
    bannerText: [
      { text: 'Another Banner3', style: styles.bannerTextStyle1 },
      { text: 'Content', style: styles.bannerTextStyle2 }
    ],
    buttonText: 'See a doctor'
  },
  {
    id: 4,
    bannerText: [
      { text: 'HOW A MENTAL', style: styles.sliderTextStyle },
      { text: 'HEALTH TREATMENT', style: styles.sliderTextStyle},
      { text: 'PLAN APPOINTMENT', style: styles.sliderTextStyle},
      { text: 'WORKS', style: styles.sliderTextStyle}
    ],
    buttonText: 'Learn More'
  },
  {
    id: 5,
    bannerText: [
      { text: 'Another Slide2', style: styles.sliderTextStyle},
      { text: 'Content', style: styles.sliderTextStyle }
    ],
    buttonText: 'Learn More',
  },
  {
    id: 6,
    bannerText: [
      { text: 'Another Slide3', style: styles.sliderTextStyle },
      { text: 'Content', style: styles.sliderTextStyle }
    ],
    buttonText: 'Learn More',
  },
];

export default App;

