import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const svgWidth = isTablet ? 260 : 130; //141
  const svgHeight = isTablet ? 206 : 106; //120
const SVGComponent = (props) => (
  
  
  <Svg
    width={svgWidth}
    height={svgHeight}
    viewBox="0 0 127 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M147 58.9508C118.166 61.4098 101.6 63.6721 91.4294 71.1475C79.4765 79.9016 76.6455 95.9344 73.5 128C70.2496 94.7541 67.3138 78.8197 54.2076 70.2623C44.0371 63.5738 27.5756 61.4098 0 59.0492C28.729 56.5902 45.4001 54.3279 55.4658 46.9508C67.5235 38.0984 70.3545 22.1639 73.5 -10C76.4358 19.6066 79.0571 35.4426 88.8081 44.5902C98.5592 53.7377 115.545 56.2951 147 58.9508Z"
      fill="black"
      fillOpacity={0.05}
    />
  </Svg>
);
export default SVGComponent;
