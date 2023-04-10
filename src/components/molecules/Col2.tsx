import styled from 'styled-components'

export type PropTypes = {
  rowReverse?: boolean
  children: [string | React.ReactNode, string | React.ReactNode]
}

const Col2 = ({
  rowReverse = false,
  children = ['', ''],
  ...props
}: PropTypes) => {
  return (
    <StyledCol2Wrap rowReverse={rowReverse} {...props}>
      {children[0]}
      {children[1]}
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
