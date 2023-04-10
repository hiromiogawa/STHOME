import styled from 'styled-components'

export type PropTypes = {
  children: string | React.ReactNode
}

const CopyRight = ({ children }: PropTypes) => {
  return (
    <StyledCopy>
      <small>{children}</small>
    </StyledCopy>
  )
}

export default CopyRight

const StyledCopy = styled.p`
  text-align: center;
  font-size: 12px;
  padding: 16px;
`
