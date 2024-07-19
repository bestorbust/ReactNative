import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import Mic from '../../Svg/Pharmacy/Mic';
import styles from '../../styles/PharmacyStyles';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleMicClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, handleMicClick }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for item"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Pressable style={styles.micButton} onPress={handleMicClick}>
        <Mic />
      </Pressable>
    </View>
  );
};

export default SearchBar;
