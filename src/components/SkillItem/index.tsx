import { useState } from 'react'
import Image from 'next/image'
import {
  SkillItemContainer,
  SkillItemIconContainer,
  SkillItemInfoContainer
} from './styles'

interface SkillItemProps {
  skill: string
  color: string
  percentage: number
  file?: string
}

const SkillItem = ({ skill, color, percentage, file }: SkillItemProps) => {
  const [_percentage, setPercentage] = useState(0)

  setTimeout(() => setPercentage(percentage), 1)

  return (
    <SkillItemContainer>
      <SkillItemIconContainer>
        {file && (
          <Image
            width={64}
            height={64}
            alt={skill}
            src={'/data/skills/' + file}
          />
        )}
      </SkillItemIconContainer>
      <SkillItemInfoContainer {...{ color, percentage: _percentage }}>
        <p>{skill}</p>
        <div />
      </SkillItemInfoContainer>
    </SkillItemContainer>
  )
}

export default SkillItem
