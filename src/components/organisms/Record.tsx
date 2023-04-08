import { useRef } from 'react'
import styled from 'styled-components'
import Heading2 from '@/components/atoms/heading/Heading2'
import Contents from '@/components/common/Contents'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import FadeInAnimation from '@/components/animation/FadeInAnimation'
import ContinuousSlider from '@/components/animation/ContinuousSlider'
import Button1 from '@/components/atoms/button/Button1'

export type PropTypes = {
  slideCards: {
    src: string
    alt: string
    href: string
    width?: number
    height?: number
  }[]
}

const Record = ({ slideCards, ...props }: PropTypes) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <StyledRecord ref={elementsRef} {...props}>
      <StyledContents1>
        <StyledHeading2>Record</StyledHeading2>
      </StyledContents1>
      <FadeInAnimation trigger={inView}>
        <ContinuousSlider items={slideCards} trigger={inView} />
        <StyledContents2>
          <StyledButton1>View More</StyledButton1>
        </StyledContents2>
        <StyledBg />
      </FadeInAnimation>
    </StyledRecord>
  )
}

export default Record

const StyledRecord = styled.section`
  position: relative;
  padding-bottom: 48px;
`

const StyledContents1 = styled(Contents)`
  padding-top: 50px;
  position: relative;
`

const StyledHeading2 = styled(Heading2)`
  position: absolute;
  right: 0;
  top: 0;
`

const StyledBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f4f3f1;
  width: 100%;
  height: 75%;
  z-index: -1;
`

const StyledContents2 = styled(Contents)`
  padding-bottom: 80px;
`

const StyledButton1 = styled(Button1)`
  margin-top: 40px;
`
