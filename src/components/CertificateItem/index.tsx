import Link from 'next/link'
import Image from 'next/image'
import { CertificateItemContainer } from './styles'

interface CertificateItemProps {
  title: string
  url: string
  file?: string
}

const CertificateItem = ({ url, title, file }: CertificateItemProps) => {
  return (
    <Link href={url} passHref>
      <CertificateItemContainer title={title}>
        <Image
          alt={title}
          src={'/data/certificates/' + (file || 'default.png')}
          width={600}
          height={400}
          objectFit="cover"
        />
      </CertificateItemContainer>
    </Link>
  )
}

export default CertificateItem
