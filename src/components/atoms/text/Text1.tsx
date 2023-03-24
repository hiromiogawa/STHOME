import styled from 'styled-components'

export type PropTypes = {
  tag?: React.ElementType
  children: string | React.ReactNode
}

const Text1 = ({ tag, children, ...props }: PropTypes) => {
  return (
    <StyledText1 as={tag} {...props}>
      {children}
    </StyledText1>
  )
}

export default Text1

const StyledText1 = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 2;
`
