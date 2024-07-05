// RainbowText.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Text as SvgText, } from 'react-native-svg';

const RainbowText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Svg height="100" width="170">
        <SvgText
          fill="black"
          stroke="grey"
          strokeWidth="1"
          fontSize="20"
          fontWeight="bold"
          x="0"
          y="70"
          fontFamily="Roboto" // Specify the Roboto font
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default RainbowText;
