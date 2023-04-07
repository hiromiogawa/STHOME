import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { SplideSlide } from '@splidejs/react-splide'

export type PropTypes = ImageProps & LinkProps

const SlideCard = ({ src, alt, href }: PropTypes) => {
  const [marginTop, setMarginTop] = useState(0)

  useEffect(() => {
    setMarginTop(Math.floor(100 * Math.random()))
  }, [])

  return (
    <StyledSplideSlide key={alt} style={{ marginTop: `${marginTop}px` }}>
      <StyledLink href={href}>
        <StyledImage src={src} alt={alt} />
      </StyledLink>
    </StyledSplideSlide>
  )
}

export default SlideCard

const StyledSplideSlide = styled(SplideSlide)`
  padding: 0 20px;
  margin-right: 0 !important;
`
const StyledLink = styled(Link)`
  display: block;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
