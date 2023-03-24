import styled, { css, keyframes } from 'styled-components'

export type PropTypes = {
  tag?: React.ElementType
  children: string
  inView?: boolean
}

const Heading1 = ({
  tag = 'h2',
  children = '',
  inView = true,
  ...props
}: PropTypes) => {
  return (
    <StyledHeading1 as={tag} {...props}>
      <StyledInnder>
        <StyledText>{children}</StyledText>
        <StyledBorder inView={inView} />
      </StyledInnder>
    </StyledHeading1>
  )
}

export default Heading1

const StyledHeading1 = styled.h2``

const StyledInnder = styled.div`
  position: relative;
  display: inline-block;
`

const StyledText = styled.span`
  position: relative;
  color: #025f80;
  font-size: 28px;
  font-family: 'Raleway';
  font-weight: 700;
`

const animation = keyframes`
    from {
        width: 0;
    }
    to {
        width 100%;
    }
`

const StyledBorder = styled.span<{ inView: boolean }>`
  position: absolute;
  right: -128px;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  height: 1px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    ${(props) => props.inView && 'width: 100%;'}
    height: 100%;
    ${(props) =>
      props.inView &&
      css`
        width: 0;
        animation: ${animation} forwards 0.5s;
      `}
  }
`
