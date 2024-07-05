import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={20}
      >
        <Path fill="#D9D9D9" d="M0 0H20V20H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M4.167 16.667h11.666c.237 0 .434.08.594.24.16.159.24.357.24.593s-.08.434-.24.594a.806.806 0 01-.594.24H4.167a.806.806 0 01-.594-.24.807.807 0 01-.24-.594c0-.236.08-.434.24-.594.16-.16.358-.24.594-.24zM8.333 15a.806.806 0 01-.593-.24.806.806 0 01-.24-.593v-5H5.875a.777.777 0 01-.75-.47.795.795 0 01.083-.884L9.333 2.52a.801.801 0 01.302-.25.847.847 0 01.73 0 .8.8 0 01.302.25l4.125 5.292a.795.795 0 01.083.885.777.777 0 01-.75.469H12.5v5c0 .236-.08.434-.24.593a.807.807 0 01-.593.24H8.333z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
