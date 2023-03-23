import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'
import ImgPc from '../../../images/index/index_mv01_pc.jpg'
import ImgSp from '../../../images/index/index_mv01_sp.jpg'

const MainVisual = ({ ...props }) => {
  const isSp = useMediaQuery()
  return <Image src={isSp ? ImgSp : ImgPc} alt="" {...props} />
}

export default MainVisual
