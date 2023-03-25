import styled from 'styled-components'

import Contents from '@/components/common/Contents'
import TextArea from '@/components/molecules/TextArea'

const Vision = () => {
  return (
    <StyledVision>
      <Contents>
        <TextArea
          heading={{
            children: 'VISION',
            tag: 'h1'
          }}
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
  height: 100vh;
  display: flex;
  align-items: center;
`
