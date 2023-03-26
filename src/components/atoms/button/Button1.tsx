import styled from 'styled-components'
import Link from 'next/link'

const Button1 = ({}) => {
  return (
    <StyledButton1>
      <Link href={href}>
        <span>{children}</span>
      </Link>
    </StyledButton1>
  )
}

const StyledButton1 = styled.button``
