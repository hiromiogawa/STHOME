import styled from 'styled-components'

import Logo from '../atoms/Img/Logo'
import GlobalNavigation from '../molecules/GlobalNavigation'

const Header = ({}) => {
  return (
    <StyledHeader>
      <Logo color="#424242" />
      <GlobalNavigation />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 52px;
  z-index: 999;
`
