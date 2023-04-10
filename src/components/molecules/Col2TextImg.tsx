import { useRef } from 'react'
import styled from 'styled-components'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import MaskAnimation from '@/components/animation/MaskAnimation'
import Col2 from '@/components/molecules/Col2'
import TextButtonArea, {
  PropTypes as TextButtonAreaType
} from '@/components/molecules/TextButtonArea'
import Image, { ImageProps } from 'next/image'

export type PropTypes = {
  textButtonArea: TextButtonAreaType
  image: ImageProps
  maskColor: string
  rowReverse?: boolean
}

const Col2TextImg = ({
  textButtonArea,
  image,
  maskColor,
  rowReverse = false,
  ...props
}: PropTypes) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <div ref={elementsRef} {...props}>
      <Col2 rowReverse={rowReverse}>
        {[
          <StyledTextButtonArea
            key="col2"
            heading={{
              children: textButtonArea.heading.children,
              tag: textButtonArea.heading.tag
            }}
            text={{
              children: textButtonArea.text.children
            }}
            button={{
              href: textButtonArea.button.href,
              children: textButtonArea.button.children
            }}
            trigger={inView}
          />,
          <StyledDiv key="col1">
            <MaskAnimation trigger={inView} backgroundColor={maskColor}>
              <Image src={image.src} alt={image.alt} />
            </MaskAnimation>
          </StyledDiv>
        ]}
      </Col2>
    </div>
  )
}

export default Col2TextImg

const StyledTextButtonArea = styled(TextButtonArea)`
  width: 560px;
`

const StyledDiv = styled.div`
  width: calc(100% - (560px + 48px));
`
