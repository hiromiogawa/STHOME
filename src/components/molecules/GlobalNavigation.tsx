import styled from 'styled-components'
import NavigationText from '../atoms/text/NavigationText'
import navigation from '../../data/navigation.json'

const GlobalNavigation = () => {
  return (
    <StyledNavigation>
      <ul>
        {navigation.map((value) => {
          if (value.showInHeader) {
            return (
              <NavigationText key={value.text} tag="li" href={value.href}>
                {value.text}
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
