import styled from 'styled-components'
import Heading1, { PropTypes as Heading1Type } from '../atoms/heading/Heading1'
import Text1, { PropTypes as Text1Type } from '../atoms/text/Text1'
import Text2, { PropTypes as Text2Type } from '../atoms/text/Text2'

export type PropTypes = {
  heading: Heading1Type
  text2: Text2Type
  text1: Text1Type
}

const TextArea = ({ heading, text2, text1, ...props }: PropTypes) => {
  return (
    <StyledTextArea {...props}>
      <Heading1 {...heading} />
      <StyledText2 {...text2} />
      <StyledText1 {...text1} />
    </StyledTextArea>
  )
}

export default TextArea

const StyledTextArea = styled.div``

const StyledText2 = styled(Text2)`
  margin-top: 40px;
`

const StyledText1 = styled(Text1)`
  margin-top: 24px;
`
