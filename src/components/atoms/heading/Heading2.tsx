import styled from 'styled-components'

import { AnimationType } from '@/styles/types'

export type PropTypes = {
  tag?: React.ElementType
  children: string
  trigger?: boolean
} & AnimationType

const Heading2 = ({ tag = 'h1', children = '', ...props }: PropTypes) => {
  return (
    <StyledHeading2 as={tag} {...props}>
      {children}
    </StyledHeading2>
  )
}

export default Heading2

const StyledHeading2 = styled.h2`
  font-size: 150px;
  color: #11191c;
  opacity: 0.2;
  font-family: 'Noto Serif JP', serif;
  letter-spacing: 54px;
`
