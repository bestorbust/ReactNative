import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer:{
    borderColor:'#ccc',
    borderBottomWidth:1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: isTablet ? 40 : 20,
  },
  searchBar: {
    flex: 1,
    padding: 15,
  },
  micButton: {
    padding: 10,
  },
  categoriesList: {
    paddingBottom: 80
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: isTablet ? 40 : 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    alignSelf: 'flex-start',
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  categoryDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },
  detailsContainer: {
    flexShrink: 1
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginVertical: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: isTablet ? '30%' : '40%'
  },
  discountedPriceText: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  discountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1c444a',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1c444a',
  },
  quantityButtonText: {
    fontSize: 30,
    color: '#1c444a',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  outOfStockText: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
  cartButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#1c444a',
    width: '40%'
  },
  cartButtonText: {
    color: '#1c444a',
    fontSize: 14,
    fontWeight: 'bold'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#777',
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalQuantityText: {
    fontSize: 16,
    color: '#929292',
  },
  viewCartButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1c444a',
    borderRadius: 14,
  },
  viewCartButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
