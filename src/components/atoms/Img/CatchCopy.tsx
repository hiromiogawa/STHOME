import Image from 'next/image'
import Img from '../../../images/index/index_catch01.svg'

const CatchCopy = ({ ...props }) => {
  return <Image src={Img} alt="" {...props} />
}

export default CatchCopy
