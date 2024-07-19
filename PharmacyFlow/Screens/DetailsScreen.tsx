import React from 'react';
import { ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Images from './Components/DetailsImage';
import NameDetailWithPrice from './Components/DetailsProduct';
import Information from './Components/DetailsInfo';
import { Category } from '../data/types'; 
import styles from '../styles/DetailsScreenStyles';
import CovidEssentials from '../Svg/CovidEssentials';

const svgComponents: { [key: string]: React.ComponentType<any> } = {
  CovidEssentials,
};

type RouteParams = {
  params: Category;
};

const DetailsScreen: React.FC = () => {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const item = route.params;

  return (
    <ScrollView style={styles.container}>
      <Images svgComponents={svgComponents} item={item} />
      <NameDetailWithPrice item={item} />
      <Information item={item} />
    </ScrollView>
  );
};

export default DetailsScreen;
