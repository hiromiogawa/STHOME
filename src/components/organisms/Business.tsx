import styled from 'styled-components'
import Contents from '@/components/common/Contents'
import Col2 from '@/components/molecules/Col2'
import TextButtonArea from '@/components/molecules/TextButtonArea'
import img1 from '@/images/index/Business_ph01.png'
import Image from 'next/image'

const Business = () => {
  return (
    <StyledBusiness>
      <Contents>
        <Col2>
          {[
            <TextButtonArea
              key="col2"
              heading={{
                children: 'VISION',
                tag: 'h1'
              }}
              text={{
                children: `子供の頃、空を走る車を想像したことはありませんか？<br>
                  未来は『バック・トゥ・ザ・フューチャー』のような世界が現実になるかもしれません。<br>
                  私たちは、未来の技術と建築を組み合わせ、より豊かな生活を手軽に実現するお手伝いをしています。<br>
                  あなたも、私たちのサービスをご利用いただければ、未来のモビリティに対応した住まいを手に入れ、新しいライフスタイルを手軽に始めることができます。`
              }}
              button={{
                href: '/',
                children: 'aaaa'
              }}
            />,
            <Image key="col1" src={img1} alt={''} />
          ]}
        </Col2>
        <Col2 rowReverse={true}>
          {[
            <TextButtonArea
              key="col2"
              heading={{
                children: 'VISION',
                tag: 'h1'
              }}
              text={{
                children: `子供の頃、空を走る車を想像したことはありませんか？<br>
                  未来は『バック・トゥ・ザ・フューチャー』のような世界が現実になるかもしれません。<br>
                  私たちは、未来の技術と建築を組み合わせ、より豊かな生活を手軽に実現するお手伝いをしています。<br>
                  あなたも、私たちのサービスをご利用いただければ、未来のモビリティに対応した住まいを手に入れ、新しいライフスタイルを手軽に始めることができます。`
              }}
              button={{
                href: '/',
                children: 'aaaa'
              }}
            />,
            <Image key="col1" src={img1} alt={''} />
          ]}
        </Col2>
      </Contents>
    </StyledBusiness>
  )
}

export default Business

const StyledBusiness = styled.section`
  padding-top: 48px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f4f3f1;
    width: calc(100% - 130px);
    height: calc(100% - 65px);
    z-index: -1;
  }
`
