import styled from 'styled-components'
import Heading1, { PropTypes as HeadingType } from '../atoms/heading/Heading1'
import Text1, { PropTypes as Text1Type } from '@/components/atoms/text/Text1'
import Button1, {
  PropTypes as ButtonType
} from '@/components/atoms/button/Button1'

export type PropTypes = {
  heading?: HeadingType
  text: Text1Type
  button: ButtonType
}

const TextButtonArea = ({ heading, text, button, ...props }: PropTypes) => {
  return (
    <div {...props}>
      {heading && <Heading1 tag={heading.tag}>{heading.children}</Heading1>}
      <StyledText1>{text.children}</StyledText1>
      <StyledButton1 href={button.href}>{button.children}</StyledButton1>
    </div>
  )
}

export default TextButtonArea

const StyledText1 = styled(Text1)`
  margin-top: 32px;
`

const StyledButton1 = styled(Button1)`
  margin-top: 32px;
`
