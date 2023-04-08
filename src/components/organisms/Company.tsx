import { useRef, useState } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import styled from 'styled-components'
import img1 from '@/images/index/Business_ph01.png'
import Contents from '../common/Contents'
import Heading2 from '@/components/atoms/heading/Heading2'
import FadeInAnimation from '@/components/animation/FadeInAnimation'
import Col2TextImg from '@/components/molecules/Col2TextImg'

const Company = ({ ...props }) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)
  return (
    <StyledCompany ref={elementsRef} {...props}>
      <Contents>
        <Heading2>Company</Heading2>
        <FadeInAnimation trigger={inView}>
          <Col2TextImg
            textButtonArea={{
              heading: {
                children: 'Profile'
              },
              text: {
                children: 'ダミーテキストダミーテキストダミーテキスト'
              },
              button: {
                href: '',
                children: 'View More'
              }
            }}
            image={{
              src: img1,
              alt: 'text'
            }}
            maskColor="#FFF"
            rowReverse
          />
        </FadeInAnimation>
      </Contents>
    </StyledCompany>
  )
}

export default Company

const StyledCompany = styled.section``
