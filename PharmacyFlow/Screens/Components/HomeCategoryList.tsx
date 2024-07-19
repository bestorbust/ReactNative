import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import styles from '../../styles/PharmacyStyles';

interface CategoryListProps {
  categories: { name: string; image: string }[];
  svgComponents: { [key: string]: React.ComponentType<SvgProps> };
  isTablet: boolean;
  navigation: any;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, svgComponents, isTablet, navigation }) => {
  return (
    <FlatList
      data={categories}
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
  );
};

export default CategoryList;
