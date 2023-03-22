import styled from 'styled-components'
import Link from 'next/link'
import Text from '@/components/elements/Text'

export type PropTypes = {
  tag?: React.ElementType
  href: string
  color?: string
  children: string
}

const NavigationText = ({
  tag = 'p',
  href,
  color = '#424242',
  children
}: PropTypes) => {
  return (
    <StyledText as={tag} color={color}>
      <Link href={href}>{children}</Link>
    </StyledText>
  )
}

export default NavigationText

const StyledText = styled.p<{ color: string }>`
  color: ${(props) => props.color};

  a {
    color: ${(props) => props.color};
  }
`
