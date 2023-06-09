import { useRef } from 'react'
import styled from 'styled-components'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import FadeInAnimation from '@/components/animation/FadeInAnimation'
import Text1, { PropTypes as Text1Type } from '@/components/atoms/text/Text1'
import Text2, { PropTypes as Text2Type } from '@/components/atoms/text/Text2'

export type PropTypes = {
  text2: Text2Type
  text1: Text1Type
}

const TextArea1 = ({ text2, text1, ...props }: PropTypes) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <StyledTextArea ref={elementsRef} {...props}>
      <FadeInAnimation trigger={inView} delay={0.5}>
        <StyledText2 {...text2} />
        <StyledText1 {...text1} />
      </FadeInAnimation>
    </StyledTextArea>
  )
}

export default TextArea1

const StyledTextArea = styled.div``

const StyledText2 = styled(Text2)`
  margin-top: 40px;
`

const StyledText1 = styled(Text1)`
  margin-top: 24px;
`
