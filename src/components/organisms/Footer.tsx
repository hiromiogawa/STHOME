import styled from 'styled-components'
import FooterContents from '@/components/molecules/FooterContents'
import CopyRight from '@/components/atoms/text/CopyRight'
import LinkBand from '../molecules/LinkBand'

const Footer = () => {
  return (
    <StyledFooter>
      <LinkBand
        linkArrow={{
          href: '/contact',
          children: 'CONTACT'
        }}
      />

      <FooterContents />
      <CopyRight>©︎ 2024 ST-HOME</CopyRight>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  margin-top: 128px;
`
