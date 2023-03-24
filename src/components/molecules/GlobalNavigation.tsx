import styled from 'styled-components'
import NavigationText from '../atoms/text/NavigationText'
import { PAGES_DATA } from '@/data/config'
const GlobalNavigation = ({ ...props }) => {
  return (
    <StyledNavigation {...props}>
      <ul>
        {PAGES_DATA.map((value) => {
          if (value.showInHeader) {
            return (
              <NavigationText key={value.title} tag="li" href={value.path}>
                {value.title}
              </NavigationText>
            )
          }
        })}
      </ul>
    </StyledNavigation>
  )
}

export default GlobalNavigation

const StyledNavigation = styled.nav`
  display: inline-block;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li:not(:first-of-type) {
      margin-left: 24px;
    }
  }
`
