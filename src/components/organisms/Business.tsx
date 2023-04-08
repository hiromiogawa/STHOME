import { useRef } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import styled from 'styled-components'
import Contents from '@/components/common/Contents'
import img1 from '@/images/index/Business_ph01.png'
import Heading2 from '@/components/atoms/heading/Heading2'
import Col2TextImg from '@/components/molecules/Col2TextImg'
import isEven from '@/functions/isEven'
import FadeInAnimation from '@/components/animation/FadeInAnimation'

const Business = ({ ...props }) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)
  const col2Data = [
    {
      textButtonArea: {
        heading: {
          children: 'text1'
        },
        text: {
          children: 'ダミーテキストダミーテキストダミーテキスト'
        },
        button: {
          href: '',
          children: 'View More'
        }
      },
      image: {
        src: img1,
        alt: 'text'
      }
    },
    {
      textButtonArea: {
        heading: {
          children: 'text2'
        },
        text: {
          children: 'ダミーテキストダミーテキストダミーテキスト'
        },
        button: {
          href: '',
          children: 'View More'
        }
      },
      image: {
        src: img1,
        alt: 'text'
      }
    },
    {
      textButtonArea: {
        heading: {
          children: 'text3'
        },
        text: {
          children: 'ダミーテキストダミーテキストダミーテキスト'
        },
        button: {
          href: '',
          children: 'View More'
        }
      },
      image: {
        src: img1,
        alt: 'text'
      }
    }
  ]
  return (
    <StyledBusiness ref={elementsRef} {...props}>
      <FadeInAnimation trigger={inView}>
        <StyledContents>
          <StyledHeading2>Business</StyledHeading2>

          {col2Data.map((data, index) => {
            if (index === 0) {
              return (
                <Col2TextImg
                  key={data.textButtonArea.heading.children}
                  maskColor="#f4f3f1"
                  rowReverse={isEven(index) ? true : false}
                  {...data}
                />
              )
            } else {
              return (
                <StyledCol2TextImg
                  key={data.textButtonArea.heading.children}
                  maskColor="#f4f3f1"
                  rowReverse={isEven(index) ? true : false}
                  {...data}
                />
              )
            }
          })}
          <StyledBg />
        </StyledContents>
      </FadeInAnimation>
    </StyledBusiness>
  )
}

export default Business

const StyledBusiness = styled.section`
  position: relative;
`

const StyledContents = styled(Contents)`
  padding-top: 128px;
  position: relative;
`

const StyledBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f4f3f1;
  width: 5000px;
  height: calc(100% - 160px);
  z-index: -1;
`
const StyledHeading2 = styled(Heading2)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`

const StyledCol2TextImg = styled(Col2TextImg)`
  margin-top: 48px;
`
