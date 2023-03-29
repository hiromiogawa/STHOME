import { useState, useRef, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

type PropsTypes = {
  images: ImageProps[]
  interval?: number
  slideTime?: number
}

const LoopSlider = ({ images, interval = 1, slideTime = 10 }: PropsTypes) => {
  const slideRef = useRef<HTMLUListElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const [slideLeft, setSlideLeft] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.offsetWidth
      const slideClone = slideRef.current.cloneNode(true) as HTMLElement
      slideClone.style.left = `${width}px`
      slideRef.current.appendChild(slideClone)
      setSlideWidth(width * 2)
      setIntervalId(setInterval(moveSlide, interval))

      return () => {
        clearInterval(intervalId as NodeJS.Timeout)
      }
    }
  }, [interval, intervalId])

  const moveSlide = () => {
    setSlideLeft((prevSlideLeft) => prevSlideLeft - slideWidth / images.length)
  }

  useEffect(() => {
    if (slideLeft === -slideWidth / images.length) {
      setSlideLeft(0)
    }
  }, [slideLeft])

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [intervalId])

  return (
    <SlideWrapper>
      <SlideContent
        ref={slideRef}
        width={slideWidth}
        left={slideLeft}
        slideTime={slideTime}
      >
        {images.map((image, index) => (
          <SlideItem key={`${image.alt}-${index} `}>
            <SlideImage src={image.src} alt={image.alt} />
          </SlideItem>
        ))}
      </SlideContent>
    </SlideWrapper>
  )
}

export default LoopSlider

const SlideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const SlideContent = styled.ul<{
  width: number
  left: number
  slideTime: number
}>`
  position: absolute;
  width: ${({ width }) => width}px;
  left: ${({ left }) => left}px;
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: all ${({ slideTime }) => slideTime / 1000}s linear;
`

const SlideItem = styled.li`
  flex-shrink: 0;
`

const SlideImage = styled(Image)`
  width: 100px;
  height: 100px;
`
