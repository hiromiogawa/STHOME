import { useRef } from 'react'
import styled from 'styled-components'

import useScrollTrigger from '@/hooks/useScrollTrigger'

import Contents from '../common/Contents'
import TextArea, { PropTypes as TextAreaType } from './TextArea'
import FadeInAnimation from '../common/FadeInAnimation'

const Vision = () => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <StyledVision ref={elementsRef}>
      <Contents>
        <FadeInAnimation trigger={inView}>
          aaaaa
          {/* <TextArea heading={} text2={} text1={} /> */}
        </FadeInAnimation>
      </Contents>
    </StyledVision>
  )
}

export default Vision

const StyledVision = styled.section`
  height: 100vh;
`
