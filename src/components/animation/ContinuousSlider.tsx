import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/react-splide/css'

type ItemType = ImageProps & LinkProps

type PropTypes = {
  items: ItemType[]
  speed?: number
  perPage?: number
}

const ContinuousSlider = ({
  items = [],
  speed = 1,
  perPage = 3,
  ...props
}: PropTypes) => {
  return (
    <Splide
      options={{
        type: 'loop',
        gap: '10px',
        drag: 'free',
        arrows: false,
        pagination: false,
        perPage: perPage,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: speed
        }
      }}
      extensions={{ AutoScroll }}
      {...props}
    >
      {items.map((item) => (
        <SplideSlide key={item.alt}>
          <Link href={item.href}>
            <StyledImage src={item.src} alt={item.alt} />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default ContinuousSlider

const StyledImage = styled(Image)`
  width: 100%;
`
