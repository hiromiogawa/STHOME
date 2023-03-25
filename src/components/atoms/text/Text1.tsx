import styled from 'styled-components'
import Text from '@/components/elements/Text'

import { media } from '@/styles/utils'

export type PropTypes = {
  tag?: React.ElementType
  children: string
}

const Text1 = ({ tag, children, ...props }: PropTypes) => {
  return (
    <StyledText1 as={tag} {...props}>
      <Text>{children}</Text>
    </StyledText1>
  )
}

export default Text1

const StyledText1 = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 2;

  ${media()} {
    font-size: 14px;
  }
`
