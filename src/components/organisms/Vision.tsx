import { useRef } from 'react'
import styled from 'styled-components'

import useScrollTrigger from '@/hooks/useScrollTrigger'

import Contents from '@/components/common/Contents'
import TextArea, {
  PropTypes as TextAreaType
} from '@/components/molecules/TextArea'
import FadeInAnimation from '@/components/animation/FadeInAnimation'

import MaskAnimation from '@/components/animation/MaskAnimation'

const Vision = () => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <StyledVision ref={elementsRef}>
      <Contents>
        <MaskAnimation trigger={inView} backgroundColor="#000">
          <span>sssss</span>
        </MaskAnimation>

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
