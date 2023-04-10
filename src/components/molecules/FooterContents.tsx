import styled from 'styled-components'
import Contents from '@/components/common/Contents'
import CompanyData from '@/components/molecules/CompanyData'
import NavText from '../atoms/text/NavText'
import { PAGES_DATA } from '@/data/config'

const FooterContents = () => {
  return (
    <StyledFooterCts>
      <Contents>
        <StyledInner>
          <CompanyData />
          <StyledFootNav>
            <ul>
              {PAGES_DATA.map((nav, index) => (
                <NavText key={index} href={nav.path}>
                  {nav.title}
                </NavText>
              ))}
            </ul>
          </StyledFootNav>
        </StyledInner>
      </Contents>
    </StyledFooterCts>
  )
}

export default FooterContents

const StyledFooterCts = styled.footer`
  background-color: #11191c;
  padding: 48px 0;
`

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledFootNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 72px;
  border-left: solid 1px #fff;
  border-right: solid 1px #fff;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 400px;

    li {
      width: calc(50% - 8px);

      &::before {
        content: '-';
        display: inline-block;
        margin-right: 8px;
      }

      &:not(:nth-of-type(-n + 2)) {
        margin-top: 12px;
      }

      &:nth-of-type(2n) {
        margin-left: 16px;
      }
    }
  }
`
