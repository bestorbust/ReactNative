import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
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
        width={24}
        height={24}
      >
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M11 20a.967.967 0 01-.712-.288A.968.968 0 0110 19v-6L4.2 5.6c-.25-.333-.287-.683-.112-1.05S4.567 4 5 4h14c.433 0 .738.183.913.55.175.367.137.717-.113 1.05L14 13v6c0 .283-.096.52-.287.712A.968.968 0 0113 20h-2z"
          fill="#005760"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
