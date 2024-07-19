import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/HomeScreen';
import MedFlatList from './Screens/MedFlatList';
import CartScreen from './Screens/CartScreen';
import DetailsScreen from './Screens/DetailsScreen';
import Filter from './Svg/Filter'

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" >
        <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false}} />
        <Stack.Screen
        name="MedFlatList"
        component={MedFlatList}
        options={{
          title: "Natural Medicine",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Filter style={{ marginRight: 10 }}/>
          ),
        }}
      />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
          title:"Details",
          headerTitleAlign:'center',
          headerStyle:{
            borderColor:'#ccc',
            borderBottomWidth:1,
          },
          headerTitleStyle:{
            fontWeight:'bold',
          }}
          }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
