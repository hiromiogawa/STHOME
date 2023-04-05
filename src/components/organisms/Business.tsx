import styled from 'styled-components'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import Contents from '@/components/common/Contents'
import Col2 from '@/components/molecules/Col2'
import TextButtonArea from '@/components/molecules/TextButtonArea'
import img1 from '@/images/index/Business_ph01.png'
import Image from 'next/image'
import MaskAnimation from '@/components/animation/MaskAnimation'
import Heading2 from '@/components/atoms/heading/Heading2'
import Col2TextImg from '@/components/molecules/Col2TextImg'
import isEven from '@/functions/isEven'

const Business = () => {
  const col2Data = [
    {
      textButtonArea: {
        heading: {
          children: 'text'
        },
        text: {
          children: 'ダミーテキストダミーテキストダミーテキスト'
        },
        button: {
          href: '',
          children: 'ボタン'
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
          children: 'text'
        },
        text: {
          children: 'ダミーテキストダミーテキストダミーテキスト'
        },
        button: {
          href: '',
          children: 'ボタン'
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
          children: 'text'
        },
        text: {
          children: 'ダミーテキストダミーテキストダミーテキスト'
        },
        button: {
          href: '',
          children: 'ボタン'
        }
      },
      image: {
        src: img1,
        alt: 'text'
      }
    }
  ]
  return (
    <StyledBusiness>
      <Contents>
        <StyledHeading2>BUSINESS</StyledHeading2>
        {col2Data.map((data, index) => (
          <Col2TextImg
            key={data.textButtonArea.heading.children}
            maskColor="#f4f3f1"
            rowReverse={isEven(index) ? true : false}
            {...data}
          />
        ))}
      </Contents>
      <StyledBg />
    </StyledBusiness>
  )
}

export default Business

const StyledBusiness = styled.section`
  padding-top: 48px;
  position: relative;
`

const StyledBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f4f3f1;
  width: calc(100% - 130px);
  height: calc(100% - 65px);
  z-index: -1;
`
const StyledHeading2 = styled(Heading2)`
  position: relative;
  z-index: -1;
`

const StyledCol2 = styled(Col2)`
  margin-top: 48px;
`
