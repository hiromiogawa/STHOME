import styled from 'styled-components'

export type PropTypes = {
  rowReverse?: boolean
  children: [string, string]
}

const Col2 = ({ rowReverse = false, children = ['', ''] }: PropTypes) => {
  return (
    <StyledCol2Wrap rowReverse={rowReverse}>
      <StyledCol1>{children[0]}</StyledCol1>
      <StyledCol2>{children[1]}</StyledCol2>
    </StyledCol2Wrap>
  )
}

export default Col2

const StyledCol2Wrap = styled.section<{ rowReverse: boolean }>`
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: space-between;
  ${({ rowReverse }) => rowReverse && `flex-direction: row-reverse;`};
`

const StyledCol1 = styled.div`
  width: calc(100% - (560px + 48px));
`

const StyledCol2 = styled.div``
