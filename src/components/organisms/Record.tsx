import { useRef } from 'react'
import styled from 'styled-components'
import Heading2 from '@/components/atoms/heading/Heading2'
import Contents from '@/components/common/Contents'
import dammyImg from '@/images/index/dammy.png'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import FadeInAnimation from '@/components/animation/FadeInAnimation'
import ContinuousSlider from '@/components/animation/ContinuousSlider'

const Record = () => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  const slideItems = [
    {
      src: dammyImg,
      alt: 'ダミー0',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー1',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー2',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー3',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー4',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー5',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー6',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー7',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー8',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー9',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー10',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー11',
      href: '/'
    }
  ]

  return (
    <StyledRecord ref={elementsRef}>
      <StyledContents>
        <StyledHeading2>Record</StyledHeading2>
      </StyledContents>
      <FadeInAnimation trigger={inView}>
        <ContinuousSlider items={slideItems} trigger={inView} />
        <StyledBg />
      </FadeInAnimation>
    </StyledRecord>
  )
}

export default Record

const StyledRecord = styled.section`
  margin-top: 148px;
  position: relative;
  padding-bottom: 48px;
`

const StyledContents = styled(Contents)`
  padding-top: 50px;
  position: relative;
`

const StyledHeading2 = styled(Heading2)`
  position: absolute;
  right: 0;
  top: 0;
`

const StyledBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f4f3f1;
  width: 100%;
  height: 75%;
  z-index: -1;
`
