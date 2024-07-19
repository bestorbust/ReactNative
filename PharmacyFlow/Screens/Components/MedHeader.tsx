import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import Search from '../../Svg/Search';
import styles from '../../styles/MedFlatListStyles';

interface HeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearch }) => (
  <View style={styles.topContainer}>
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={onSearch}
      />
      <Pressable style={styles.micButton}>
        <Search />
      </Pressable>
    </View>
  </View>
);

export default Header;
