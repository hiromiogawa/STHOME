import styled from 'styled-components'
import Link from 'next/link'

export type PropTypes = {
  href: string
  children: string
}

export default function NavText({ href, children }: PropTypes) {
  return (
    <StyledNavText>
      <Link href={href}>{children}</Link>
    </StyledNavText>
  )
}

const StyledNavText = styled.li`
  color: #fff;

  a {
    color: #fff;
  }
`
