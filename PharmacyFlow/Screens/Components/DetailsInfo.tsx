import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/DetailsScreenStyles';

interface Props {
  item: {
    contains?: string;
    manufacturer?: string;
    countryOfOrigin?: string;
    storage?: string;
  };
}

const Information: React.FC<Props> = ({ item }) => {
  const [showFullStorage, setShowFullStorage] = useState(false);

  const handleReadMore = () => {
    setShowFullStorage(!showFullStorage);
  };

  const renderStorageText = (storage?: string) => {
    if (!storage) return null;
    return (
      <Text style={styles.infoText}>
        {showFullStorage || storage.length <= 100 ? storage : `${storage.substring(0, 264)}... `}
        {!showFullStorage && storage.length > 100 && (
          <Text style={styles.readMoreText} onPress={handleReadMore}>
            Read More
          </Text>
        )}
      </Text>
    );
  };

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>INFORMATION</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Contains</Text>
        <Text style={styles.infoText}>{item.contains}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Manufacturer</Text>
        <Text style={styles.infoText}>{item.manufacturer}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Country of origin</Text>
        <Text style={styles.infoText}>{item.countryOfOrigin}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Storage</Text>
        {renderStorageText(item.storage)}
      </View>
    </View>
  );
};

export default Information;
