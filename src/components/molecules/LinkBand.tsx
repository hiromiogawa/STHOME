import styled from 'styled-components'
import Contents from '../common/Contents'
import LinkArrow, { PropTypes as LinkArrowType } from '../atoms/text/LinkArrow'

export type PropTypes = {
  linkArrow: LinkArrowType
}

const LinkBand = ({ linkArrow }: PropTypes) => {
  return (
    <StyledLinkBand>
      <Contents>
        <LinkArrow href={linkArrow.href}>{linkArrow.children}</LinkArrow>
      </Contents>
    </StyledLinkBand>
  )
}

export default LinkBand

const StyledLinkBand = styled.div`
  background-color: #e9e7e3;
  padding: 86px 0;
  text-align: center;
`
