import styled from 'styled-components'
import LinkArrow, { PropTypes as LinkArrowType } from '../atoms/text/LinkArrow'

export type PropTypes = {
  linkArrow: LinkArrowType
}

const LinkBand = ({ linkArrow, ...props }: PropTypes) => {
  return (
    <StyledLinkBand {...props}>
      <StyledLinkArrow href={linkArrow.href}>
        {linkArrow.children}
      </StyledLinkArrow>
    </StyledLinkBand>
  )
}

export default LinkBand

const StyledLinkBand = styled.div`
  background-color: #e9e7e3;
  text-align: center;
`

const StyledLinkArrow = styled(LinkArrow)`
  a {
    position: relative;
    padding: 86px 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background: #025f80;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transform: scale(0, 1);
      transform-origin: right top;
    }

    span {
      position: relative;
      z-index: 2;
    }

    &:hover {
      span {
        color: #fff;
      }

      &::before {
        transform-origin: left top;
        transform: scale(1, 1);
      }
    }
  }
`
