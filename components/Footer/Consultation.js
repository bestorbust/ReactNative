import * as React from "react";
import Svg, { Rect, Path, Line } from "react-native-svg";
const Consultation = (props) => (
  <Svg
    width="512px"
    height="512px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={39}
      y={123}
      width={448}
      height={352}
      rx={0}
      ry={0}
      style={{
        fill: "none",
        stroke: "grey",
        strokeLinejoin: "miter",
        strokeWidth: 20,
      }}
    />
    <Path
      d="M144,118V60H336V112"
      style={{
        fill: "none",
        stroke: "grey",
        strokeLinecap: "miter",
        strokeLinejoin: "miter",
        strokeWidth: 20,
      }}
    />
    <Line
      x1={256}
      y1={208}
      x2={256}
      y2={368}
      style={{
        fill: "none",
        stroke: "grey",
        strokeLinecap: "miter",
        strokeLinejoin: "miter",
        strokeWidth: 20,
      }}
    />
    <Line
      x1={336}
      y1={288}
      x2={176}
      y2={288}
      style={{
        fill: "none",
        stroke: "grey",
        strokeLinecap: "miter",
        strokeLinejoin: "miter",
        strokeWidth: 20,
      }}
    />
  </Svg>
);
export default Consultation;
