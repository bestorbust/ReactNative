// MedicineItemStyles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#777',
  },
  detailsContainer:{
    flexShrink:1
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  discountedPriceText: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    color: 'red',
  },
  discountText: {
    fontSize: 14,
    color: 'green',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
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
    backgroundColor: 'grey',
    alignItems:'center',
    borderWidth: 1,
    borderRadius: 5,
    width: '45%'
  },
  cartButtonText: {
    color: 'black',
    fontSize: 14,
  },
});
