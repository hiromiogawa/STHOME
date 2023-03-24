import styled from 'styled-components'

export type PropTypes = {
  tag?: React.ElementType
  children: string | React.ReactNode
}
const Text2 = ({ tag = 'p', children, ...props }: PropTypes) => {
  return (
    <StyledText2 as={tag} {...props}>
      {children}
    </StyledText2>
  )
}

export default Text2

const StyledText2 = styled.p`
  color: #008aba;
  font-size: 24px;
  font-family: '游明朝', 'Yu Mincho', YuMincho, 'ヒラギノ明朝 ProN W6',
    'HiraMinProN-W6', 'HG明朝E', 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif;
  font-weight: normal;
  line-height: 2;
`
