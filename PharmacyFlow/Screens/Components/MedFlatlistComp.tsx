import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/MedFlatListStyles';
import { Category } from '../../data/types';

interface FlatListProps {
  data: Category[];
  svgComponents: { [key: string]: React.ComponentType<any> };
  quantities: { [key: string]: number };
  onAddToCart: (item: Category) => void;
  onIncrementQuantity: (itemId: string) => void;
  onDecrementQuantity: (itemId: string) => void;
  navigation: any;
}

const MedFlatListContent: React.FC<FlatListProps> = ({
  data,
  svgComponents,
  quantities,
  onAddToCart,
  onIncrementQuantity,
  onDecrementQuantity,
  navigation,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      numColumns={1}
      renderItem={({ item }) => {
        const SvgComponent = item.image ? svgComponents[item.image] : null;
        const quantity = quantities[item.id] || 0;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsScreen', item)}
            style={styles.categoryContainer}
          >
            <View style={styles.imageContainer}>
              {item.stock === "Out of Stock" && item.image ? (
                <Image
                  source={require('../../assets/images/out-of-stock.jpg')}
                  style={{ width: 80, height: 80 }}
                />
              ) : SvgComponent ? (
                <SvgComponent width={80} height={80} />
              ) : (
                <Image
                  source={require('../../assets/images/no-image.png')}
                  style={{ width: 80, height: 80 }}
                />
              )}
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.categoryText}>{item.name}</Text>
              <Text style={styles.categoryDescription}>{item.description}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
                {item.discountedPrice && (
                  <View style={styles.discountContainer}>
                    <Text style={styles.discountedPriceText}>
                      ${item.discountedPrice.toFixed(2)}
                    </Text>
                    <Text style={styles.discountText}>{item.discount}</Text>
                  </View>
                )}
              </View>
              {item.addedToCart ? (
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => onDecrementQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity onPress={() => onIncrementQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                item.stock === "Out of Stock" ? (
                  <Text style={styles.outOfStockText}>Sorry, this item is out of stock</Text>
                ) : (
                  <TouchableOpacity onPress={() => onAddToCart(item)} style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>Add To Cart</Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </TouchableOpacity>
        );
      }}
      contentContainerStyle={styles.categoriesList}
    />
  );
};

export default MedFlatListContent;
