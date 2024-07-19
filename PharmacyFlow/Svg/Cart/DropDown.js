import * as React from "react";
import Svg, { G, Mask, Rect, Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="arrow_downward_ios">
      <Mask
        id="mask0_9598_6793"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={16}
      >
        <Rect id="Bounding box" width={16} height={16} fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_9598_6793)">
        <Path
          id="arrow_downward_ios_2"
          d="M9.64975 8.00033L4.74975 3.10033C4.58308 2.93366 4.50253 2.73644 4.50808 2.50866C4.51364 2.28088 4.59975 2.08366 4.76641 1.91699C4.93308 1.75033 5.1303 1.66699 5.35808 1.66699C5.58586 1.66699 5.78308 1.75033 5.94975 1.91699L11.0664 7.05033C11.1997 7.18366 11.2997 7.33366 11.3664 7.50033C11.4331 7.66699 11.4664 7.83366 11.4664 8.00033C11.4664 8.16699 11.4331 8.33366 11.3664 8.50033C11.2997 8.66699 11.1997 8.81699 11.0664 8.95033L5.93308 14.0837C5.76641 14.2503 5.57197 14.3309 5.34975 14.3253C5.12753 14.3198 4.93308 14.2337 4.76641 14.067C4.59975 13.9003 4.51641 13.7031 4.51641 13.4753C4.51641 13.2475 4.59975 13.0503 4.76641 12.8837L9.64975 8.00033Z"
          fill="#bbb"
          transform="rotate(90 8 8)"
        />
      </G>
    </G>
  </Svg>
);
export default SVGComponent;
