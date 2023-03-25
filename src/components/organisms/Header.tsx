import styled from 'styled-components'

import Logo from '@/components/atoms/Img/Logo'
import GlobalNavigation from '@/components/molecules/GlobalNavigation'

const Header = ({}) => {
  return (
    <StyledHeader>
      <Logo color="#424242" />
      <GlobalNavigation />
    </StyledHeader>
  )
}

export default Header

/// [HACK] スクロールがヘッダーの要素を超えたら追従に変更（現状28pxスクロールしたら）
const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 52px;
  z-index: 999;
  top: 28px;
`
