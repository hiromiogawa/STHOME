import styled from 'styled-components'
import Link from 'next/link'

export type PropTypes = {
  href: string
  children: string
}

const LinkArrow = ({ href, children }: PropTypes) => {
  return (
    <StyledLinkArrow>
      <StyledLink href={href}>{children}</StyledLink>
    </StyledLinkArrow>
  )
}

export default LinkArrow

const StyledLinkArrow = styled.p`
  font-size: 24px;
  min-width: 325px;
  text-align: center;
  font-family: 'Raleway';
  font-weight: 700;
`

const StyledLink = styled(Link)`
  color: #025f80;
`
