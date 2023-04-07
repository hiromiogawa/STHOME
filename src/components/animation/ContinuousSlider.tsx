import { memo } from 'react'
import { Splide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/react-splide/css'
import SlideCard, { PropTypes as SlideCardType } from '../atoms/SlideCard'

type PropTypes = {
  items: SlideCardType[]
  speed?: number
  perPage?: number
  trigger?: boolean
}

const ContinuousSlider = ({
  items = [],
  speed = 0.5,
  perPage = 3.5,
  trigger = true,
  ...props
}: PropTypes) => {
  return (
    <Splide
      options={{
        type: 'loop',
        gap: '10px',
        drag: 'free',
        autoWidth: true,
        arrows: false,
        pagination: false,
        //perPage: perPage,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: true,
          speed: trigger ? speed : 0
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
