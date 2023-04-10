import styled from 'styled-components'
import Link from 'next/link'

export type PropTypes = {
  href: string
  children: string
}

const LinkArrow = ({ href, children, ...props }: PropTypes) => {
  return (
    <StyledLinkArrow {...props}>
      <StyledLink href={href}>
        <span>{children}</span>
      </StyledLink>
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
  display: block;
  color: #025f80;
`
