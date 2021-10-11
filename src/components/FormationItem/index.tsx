import Image from 'next/image'
import {
  FormationItemContainer,
  FormationItemIconContainer,
  FormationItemInfoContainer
} from './styles'

interface FormationItemProps {
  formation: string
  description: string
  file?: string
  date: string
}

const FormationItem = ({
  formation,
  description,
  date,
  file
}: FormationItemProps) => {
  return (
    <FormationItemContainer>
      <FormationItemIconContainer>
        {file && (
          <Image
            src={'/data/formation/' + file}
            width={256}
            height={256}
            alt={formation}
          />
        )}
      </FormationItemIconContainer>
      <FormationItemInfoContainer>
        <h1>{formation}</h1>
        <p>{description}</p>
        <span>{date}</span>
      </FormationItemInfoContainer>
    </FormationItemContainer>
  )
}

export default FormationItem
