import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Td from './Td'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

  

function Tdb(props) {
  const svgWidth = isTablet ? 260 : 131;
  const svgHeight = isTablet ? 216 : 111;
  return (
    <Svg
      width={svgWidth}
      height={svgHeight}
      // width={130}
      // height={106}
      viewBox="0 0 131 111"
      fill="none"
      // viewBox="0 0 130 106"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M42.191 27.005s2.936-34 33.645-25.7c0 0 17.353 1.35 24.041 26.517 0 0 21.105-3.475 26.713.266 0 0 32.585 5.09 25.366 31.608 0 0-1.346 26.517-22.96 25.965 0 0 21.9 21.691 1.06 47.125 0 0-13.356 18.482-44.595 0 0 0-13.091-12.86-14.947-18.482 0 0-8.278 21.692-45.145 22.223 0 0-25.632-.797-25.367-34.817 0 0 1.61-21.692 15.762-26.517 0 0-15.497-16.07-8.544-37.496 0 0 8.28-22.49 34.992-10.713"
        fill="#FFF087"
      />
      {isTablet ? (
          <Td width='100%' height='100%' />
        ) : (
          <Td width='100%' height='100%'  />
        )}
    </Svg>
  )
}

export default Tdb
