import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
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
        width={25}
        height={25}
      >
        <Path
          fill="#D9D9D9"
          d="M0.714844 0.794922H24.714844V24.794922H0.714844z"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M10.215 16.795c-1.817 0-3.354-.63-4.613-1.888-1.258-1.258-1.887-2.795-1.887-4.612 0-1.817.629-3.354 1.887-4.613 1.259-1.258 2.796-1.887 4.613-1.887 1.816 0 3.354.63 4.612 1.887 1.259 1.259 1.888 2.796 1.888 4.613a6.093 6.093 0 01-1.3 3.8l5.6 5.6a.948.948 0 01.275.7.948.948 0 01-.275.7.948.948 0 01-.7.275.948.948 0 01-.7-.275l-5.6-5.6a6.093 6.093 0 01-3.8 1.3zm0-2c1.25 0 2.312-.438 3.187-1.313s1.313-1.937 1.313-3.187c0-1.25-.438-2.313-1.313-3.188s-1.937-1.312-3.187-1.312c-1.25 0-2.313.437-3.188 1.312s-1.312 1.938-1.312 3.188c0 1.25.437 2.312 1.312 3.187s1.938 1.313 3.188 1.313z"
          fill="#011111"
          fillOpacity={0.2}
        />
      </G>
    </Svg>
  )
}

export default SvgComponent