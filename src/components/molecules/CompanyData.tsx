import styled from 'styled-components'
import Logo from '@/components/atoms/Img/Logo'
import Text from '@/components/elements/Text'

const CompanyData = () => {
  return (
    <StyledCompanyData>
      <Logo color="#FFF" />
      <StyledCompanyAdress>
        <StyledText1>
          <Text>〒424-0067 静岡県静岡市清水区鳥坂1225-2</Text>
        </StyledText1>
        <StyledText2>
          <Text>TEL&FAX：054-388-9644</Text>
        </StyledText2>
      </StyledCompanyAdress>
    </StyledCompanyData>
  )
}

export default CompanyData

const StyledCompanyData = styled.div`
  display: flex;
`

const StyledCompanyAdress = styled.div`
  margin-left: 64px;
`

const StyledText1 = styled.p`
  color: #fff;
  line-height: 2;
`

const StyledText2 = styled.p`
  color: #fff;
  line-height: 2;
  margin-top: 24px;
`
