import styled from 'styled-components'
import Link from 'next/link'

export type PropTypes = {
  href: string
  children: string
}

const Button1 = ({ href = '', children = '' }) => {
  return (
    <StyledButton1>
      <Link href={href}>
        <span>{children}</span>
      </Link>
    </StyledButton1>
  )
}

export default Button1

const StyledButton1 = styled.div`
  font-family: 'Raleway';
  border: solid 1px #025f80;
  border-radius: 24px;
  width: 170px;
  line-height: 1;
  overflow: hidden;

  a {
    display: block;
    color: #025f80;
    padding: 11px 18.5px;
    background-color: #fff;
  }

  span {
    display: block;
    position: relative;
    text-align: center;
  }
`
