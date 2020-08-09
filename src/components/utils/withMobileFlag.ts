// @ts-ignore
import withSizes from 'react-sizes'

const mapSizesToProps = ({ width }: any) => ({
  isMobile: width < 768,
})

export default function withMobileFlag(Component: any) {
  const HOC = withSizes(mapSizesToProps)(Component)
  return HOC
}
