import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Pd from './Pd'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

function Pdb(props) {
  const svgWidth = isTablet ? 260 : 130;
  const svgHeight = isTablet ? 218 : 109;
  return (
  

    <Svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 130 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M113.395 38.997s16.875-1.557 21.765 23.53c.695 3.573.954 7.285.795 10.918-.199 4.59-2.008 8.602-3.936 12.693-6.122 13.013-12.323 25.727-27.031 30.676 0 0-17.411 5.868-30.927-7.803 0 0-15.722 17.763-28.74 17.743-4.691 0-8.786.798-13.536-.479-11.548-3.094-19.081-14.191-21.804-25.128-2.306-9.3-3.459-20.817 2.226-29.16-.596.86-8.567-7.903-8.984-8.521-4.035-6.187-3.916-12.993-1.65-19.779 2.485-7.424 4.015-17.204 12.284-20.258 4.332-1.596 8.427-3.872 12.66-5.748 5.983-2.674 11.787-2.634 18.008.2 1.272.579 2.564 1.157 3.936 1.477.576.14 10.236 1.497 9.739 2.295 0 0 9.401-15.268 22.599-20.238 12.144-4.57 24.666 2.475 30.35 13.312 1.968 3.753 2.684 6.986 2.902 11.157.06 1.277.477 13.073-.656 13.173"
        fill="#F1EDDF"
      />
      {isTablet ? (
          <Pd width='100%' height='100%' />
        ) : (
          <Pd height='100%' width='100%' />
        )}

    </Svg>
  )
}

export default Pdb
