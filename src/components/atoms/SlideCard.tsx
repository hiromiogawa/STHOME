import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { SplideSlide } from '@splidejs/react-splide'

export type PropTypes = ImageProps & LinkProps

const SlideCard = ({ src, alt, href }: PropTypes) => {
  return (
    <SplideSlide key={alt}>
      <Link href={href}>
        <StyledImage src={src} alt={alt} />
      </Link>
    </SplideSlide>
  )
}

export default SlideCard

const StyledImage = styled(Image)`
  width: 100%;
`
