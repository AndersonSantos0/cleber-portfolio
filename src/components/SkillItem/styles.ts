import styled from 'styled-components'

export const SkillItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const SkillItemIconContainer = styled.div`
  background-color: var(--white);
  position: relative;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 1.8rem;
    height: 1.8rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0.4em;
    left: 0.4rem;
    border: solid 2px var(--gray-light);
    width: 3rem;
    height: 3rem;
    z-index: -1;
    box-sizing: border-box;
  }
`

export const SkillItemInfoContainer = styled.div<{
  percentage: number
  color: string
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  > p {
    color: var(--white);
    font-size: 1rem;
  }

  > div {
    position: relative;
    width: 100%;
    height: 4px;
    background-color: var(--gray-light);

    &::before {
      content: '';
      position: absolute;
      width: ${props => props.percentage}%;
      transition: 0.8s width ease;
      height: 100%;
      left: 0;
      top: 0;
      background-color: ${props => props.color || 'var(--primary)'};
    }
  }
`
