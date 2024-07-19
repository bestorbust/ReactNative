import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    deliveryOptions: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#f3f3f3',
    },
    optionButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 16,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      borderColor: '#00575e',
      borderWidth: 1,
      left:-50
    },
    activeOption: {
      backgroundColor: '#dbeeea',
    },
    optionText: {
      fontSize: 16,
      color: '#011111',
    },
    addressContainer: {
      borderRadius: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      overflow: 'hidden',
      paddingBottom: 15,
      margin:20,
    },
    addressTitle:{
      flexDirection:'row',
      padding: 15,
      flex:1,
      justifyContent:'space-between',
    },
    addressTitleText: {
      fontSize: 14,
      color: '#777',
      marginLeft:10,
    },
    cottageImage:{
      flexDirection:'row',
    },
    homeHealth:{
      flexDirection:'row',
    },
    address: {
      fontSize: 18,
      fontWeight:'bold',
      marginHorizontal:16,
      paddingBottom:20,
    },
    dateTimeContainer:{
      borderStyle:'dashed',
      borderTopWidth:1,
      borderColor:'#ccc',
      paddingTop:20,
      marginHorizontal:20,
    },
    dateTimeLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom:10,
    },
    preferredDeliveryDate: {
      fontSize: 20,
      color: '#333',
      marginVertical: 5,
      fontWeight:'bold',    
    },
    preferredDeliveryDateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth:1,
      paddingVertical:15,
      paddingHorizontal:20,
      borderRadius:16,
      borderColor:'#ccc',
      fontWeight:'bold',
    },
    pickerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    cartItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      borderTopWidth:1,
      borderTopColor: '#eee',
      paddingVertical:20,
    },
    categoryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderTopWidth:1,
      borderColor:'#ccc'
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
    },
    categoryDescription: {
      marginTop: 5,
      fontSize: 14,
      color: '#777',
    },
    detailsContainer:{
      paddingBottom:0,
      flexShrink:1
    },
    quantityControl: {
      flexDirection: 'row',
      alignSelf:'flex-start',
    },
    quantityContainer:{
      flexDirection: 'row',
      justifyContent:"space-between",
      marginTop:10,
    },
    quantityButton: {
      fontSize: 20,
      paddingHorizontal: 10,
      color: '#025660',
      paddingVertical: 0,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#1c444a',
    },
    quantity: {
      fontSize: 18,
      marginHorizontal: 10,
      fontWeight:'bold',
    },
    itemPrice: {
      fontSize: 20,
      fontWeight:'bold',
      textAlign:'left'
    },
    couponButton: {
      padding: 20,
      backgroundColor: '#f1eedf',
      borderRadius: 10,
      alignItems: 'center',
      marginVertical: 16,
      margin:20,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    couponStyle:{
      flexDirection:'row',
    },
    couponButtonText: {
      fontSize: 18,
      color: '#025660',
      marginLeft:10
    },
    summaryText:{
      fontWeight:'bold',
      color:'#626a6c',
      paddingBottom:10,
    },
    texts:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    totalTexts:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:20,
      borderStyle:'dashed',
      borderTopWidth:1,
      borderColor:'#ccc'
    },
    paymentSummary: {
      marginBottom: 16,
      backgroundColor:'#f3f3f3',
      padding:20,
    },
    paymentSummaryText: {
      fontSize: 16,
      marginVertical: 4,
      color:'#bbb',
      fontWeight:'bold',
    },
    paymentSummaryTextPrice:{
      fontSize: 16,
      marginVertical: 4,
      fontWeight:'bold'
    },
    paymentSummaryTextDiscount:{
      fontSize: 16,
      marginVertical: 4,
      color:'#025660',
      fontWeight:'bold'
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 8,
      color:'#aab0b0'
    },
    notesInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 16,
      marginBottom: 16,
      height:150,
      margin:20,
      textAlignVertical: 'top'
    },
    payButton: {
      paddingVertical: 16,
      backgroundColor: '#025660',
      borderRadius: 10,
      alignItems: 'center',
      margin:20
    },
    payButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;