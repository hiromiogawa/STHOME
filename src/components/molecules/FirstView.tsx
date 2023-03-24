import styled from 'styled-components'
import MainVisual from '@/components/atoms/Img/MainVisual'
import CatchCopy from '@/components/atoms/Img/CatchCopy'
import { vw, media } from '@/styles/utils'
import { Device } from '@/styles/vars'

const FirstView = ({ ...props }) => {
  return (
    <StyledFirstView {...props}>
      <StyledMainVisual />
      <StyledCatchCopy />
    </StyledFirstView>
  )
}

export default FirstView

const StyledFirstView = styled.section`
  position: relative;
  height: calc(100vh - 40px);
  width: calc(100% - 40px);
  overflow: hidden;
  margin: 20px;
`

const StyledMainVisual = styled(MainVisual)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const StyledCatchCopy = styled(CatchCopy)`
  position: absolute;
  bottom: 50%;
  right: ${vw(190, Device.pc)};
  transform: translateY(50%);
  z-index: 2;
  height: ${vw(348, Device.pc)};
  width: auto;

  ${media()} {
    height: ${vw(140, Device.tb)};
    min-height: 100px;
  }
`
