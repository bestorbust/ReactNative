import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: isTablet ? 400 : 300,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: isTablet ? 50 : 25,
    marginTop: isTablet ? 40 : 20,
    marginBottom: isTablet ? 60 : 45,
  },
  paginationStyle: {
    bottom:isTablet?20:10,
  },
  activeDot:{
    backgroundColor:'#025660',
    width:isTablet?10:8,
    height:isTablet?10:8,
    borderRadius:isTablet?5:4,
    marginHorizontal:3,
  },
  inactiveDot:{
    backgroundColor:'#dcdcdc',
    width:isTablet?10:8,
    height:isTablet?10:8,
    borderRadius:isTablet?5:4,
    marginHorizontal:3,
  },
  image: {
    width: isTablet ? 200 : 150,
    height: isTablet ? 200 : 150,
  },
  name: {
    fontSize: isTablet ? 32 : 24,
    fontWeight: 'bold',
    marginBottom: 8,
    margin: 20,
  },
  description: {
    fontSize: isTablet ? 20 : 16,
    color: '#777',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  priceDetails: {
    flex: 1,
  },
  price: {
    fontSize: isTablet ? 24 : 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#025660',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice: {
    fontSize: isTablet ? 18 : 14,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    color: '#999',
    marginRight: 8,
  },
  discount: {
    fontSize: isTablet ? 18 : 16,
    fontWeight:'bold',
    color: '#025660',
  },
  cartButton: {
    paddingVertical: isTablet ? 12 : 10,
    paddingHorizontal: isTablet ? 25 : 20,
    backgroundColor: '#025660',
    borderRadius: 10,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: isTablet ? 18 : 16,
  },
  infoContainer: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  infoTitle: {
    fontSize: isTablet ? 20 : 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: isTablet ? 18 : 16,
    color: '#555',
    width: isTablet ? 160 : 130,
  },
  infoText: {
    fontSize: isTablet ? 18 : 16,
    color: '#555',
    flex: 1,
  },
  readMoreText: {
    fontSize: isTablet ? 18 : 16,
    color: '#025660',
    fontWeight: 'bold',
  },
});

export default styles;
