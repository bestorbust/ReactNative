import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: "#0111111a",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    margin: isTablet ? 40 : 20,
    marginVertical: 5
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
    fontSize: 7,
    alignSelf: 'flex-start',
  },
  deliveryAddress: {
    alignSelf: "flex-end",
    color: '#555',
    fontSize: width <= 360 ? 9 : 11,
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
    margin: isTablet ? 40 : 20,
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
    paddingTop: 16,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    paddingRight: 0,
    margin: isTablet ? 40 : 20,
  },
  uploadButton: {
    backgroundColor: '#025660',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    top: 10,
    bottom: 24,
    alignItems: 'flex-start',
    maxWidth: isTablet ? '28%' : '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: width <= 360 ? 13 : 14,
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
    margin: isTablet ? 40 : 20,
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
  flower1: {
    overflow: 'hidden',
    width: '50%',
    alignContent: "center",
    alignItems: 'center',
    position: "absolute",
    top: isTablet ? -80 : -45,
    left: 100
  },
  flower2: {
    overflow: 'hidden',
    width: '50%',
    alignContent: "center",
    alignItems: 'center',
    position: "absolute",
    top: 0,
    left: isTablet ? 340 : 163,
  },
});

export default styles;