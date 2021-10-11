import styled from 'styled-components'

export const FormationItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const FormationItemIconContainer = styled.div`
  background-color: var(--gray);
  position: relative;
  width: 8rem;
  height: 8rem;

  &::before {
    content: '';
    position: absolute;
    top: 0.4em;
    left: 0.4rem;
    border: solid 2px var(--gray-light);
    width: 8rem;
    height: 8rem;
    z-index: -1;
    box-sizing: border-box;
  }
`

export const FormationItemInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  > h1 {
    color: var(--gray);
    font-weight: 500;
  }

  > p {
    color: var(--gray-light);
    font-size: 1.2rem;
  }

  > span {
    color: var(--primary);
    font-weight: 0.8rem;
  }
`
