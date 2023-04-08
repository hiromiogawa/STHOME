import styled from 'styled-components'
import { visionParticlesOption } from '@/data/top/visionParticlesOption'
import Particles from '@/components/animation/Paricles'
import Contents from '@/components/common/Contents'
import Heading2 from '../atoms/heading/Heading2'
import TextArea from '@/components/molecules/TextArea'

const Vision = ({ ...props }) => {
  return (
    <StyledVision {...props}>
      <StyledParticles options={visionParticlesOption} />
      <Contents>
        <StyledHeading2>VISION</StyledHeading2>
        <TextArea
          text2={{
            children: '建築と未来の技術が、新しいライフスタイルを実現します。'
          }}
          text1={{
            children: `子供の頃、空を走る車を想像したことはありませんか？<br>
              未来は『バック・トゥ・ザ・フューチャー』のような世界が現実になるかもしれません。<br>
              私たちは、未来の技術と建築を組み合わせ、より豊かな生活を手軽に実現するお手伝いをしています。<br>
              あなたも、私たちのサービスをご利用いただければ、未来のモビリティに対応した住まいを手に入れ、新しいライフスタイルを手軽に始めることができます。`
          }}
        />
      </Contents>
    </StyledVision>
  )
}

export default Vision

const StyledVision = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
`

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`

const StyledHeading2 = styled(Heading2)`
  position: absolute;
`
