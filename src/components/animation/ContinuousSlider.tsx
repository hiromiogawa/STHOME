import { memo } from 'react'
import { Splide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/react-splide/css'
import SlideCard, { PropTypes as SlideCardType } from '../atoms/SlideCard'

type PropTypes = {
  items: SlideCardType[]
  speed?: number
  perPage?: number
}

const ContinuousSlider = ({
  items = [],
  speed = 1,
  perPage = 3.5,
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
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: true,
          speed: speed
        }
      }}
      extensions={{ AutoScroll }}
      {...props}
    >
      {items.map((item) => (
        <SlideCard key={item.alt} {...item}></SlideCard>
      ))}
    </Splide>
  )
}

export default ContinuousSlider
