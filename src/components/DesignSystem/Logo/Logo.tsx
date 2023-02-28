import React from 'react'
import { Svg, Path } from 'react-native-svg'

export interface LogoProps {
  size: 'sm' | 'md' | 'lg'
}

const SIZE_HASH: Record<LogoProps['size'], { width: number; height: number }> =
  {
    sm: { width: 96, height: 80 },
    md: { width: 120, height: 100 },
    lg: { width: 144, height: 120 },
  }

const defaultProps = {
  size: 'md',
}

const Logo = ({ size }: LogoProps & typeof defaultProps) => (
  <Svg
    width={SIZE_HASH[size].width}
    height={SIZE_HASH[size].height}
    viewBox="0 0 120 110"
    fill="none">
    <Path
      d="M103.29 61.722V79.8945C103.29 84.4281 101.681 88.3046 98.4613 91.5238C95.2421 94.7431 91.3656 96.3527 86.832 96.3527H39.2863C34.7527 96.3527 30.8762 94.7431 27.657 91.5238C24.4377 88.3046 22.8281 84.4281 22.8281 79.8945V32.3488C22.8281 27.8152 24.4377 23.9387 27.657 20.7195C30.8762 17.5002 34.7527 15.8906 39.2863 15.8906H86.832C89.2322 15.8906 91.4609 16.3668 93.5181 17.3193C94.0896 17.586 94.4325 18.0241 94.5468 18.6336C94.6611 19.2813 94.4896 19.8337 94.0325 20.2909L91.2323 23.0911C90.8513 23.472 90.4132 23.6625 89.9179 23.6625C89.8036 23.6625 89.6322 23.6244 89.4036 23.5482C88.5274 23.3196 87.6702 23.2054 86.832 23.2054H39.2863C36.7718 23.2054 34.6193 24.1006 32.8287 25.8912C31.0381 27.6818 30.1429 29.8343 30.1429 32.3488V79.8945C30.1429 82.409 31.0381 84.5615 32.8287 86.3521C34.6193 88.1427 36.7718 89.0379 39.2863 89.0379H86.832C89.3465 89.0379 91.499 88.1427 93.2896 86.3521C95.0801 84.5615 95.9754 82.409 95.9754 79.8945V65.3794C95.9754 64.8841 96.1469 64.465 96.4898 64.1221L100.147 60.4648C100.528 60.0838 100.966 59.8933 101.461 59.8933C101.69 59.8933 101.919 59.9505 102.147 60.0647C102.909 60.3695 103.29 60.9219 103.29 61.722ZM116.491 33.7774L69.9739 80.2946C69.0595 81.2089 67.9737 81.6661 66.7165 81.6661C65.4593 81.6661 64.3735 81.2089 63.4592 80.2946L38.8862 55.7216C37.9719 54.8073 37.5147 53.7215 37.5147 52.4643C37.5147 51.2071 37.9719 50.1213 38.8862 49.2069L45.1723 42.9208C46.0867 42.0065 47.1725 41.5493 48.4297 41.5493C49.6869 41.5493 50.7727 42.0065 51.687 42.9208L66.7165 57.9503L103.69 20.9766C104.605 20.0623 105.69 19.6051 106.948 19.6051C108.205 19.6051 109.291 20.0623 110.205 20.9766L116.491 27.2627C117.405 28.1771 117.862 29.2629 117.862 30.5201C117.862 31.7773 117.405 32.8631 116.491 33.7774Z"
      fill="#8685E7"
    />
  </Svg>
)

Logo.defaultProps = defaultProps

export default Logo
