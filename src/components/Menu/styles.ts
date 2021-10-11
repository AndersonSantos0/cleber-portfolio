import styled from 'styled-components'

export const MenuContainer = styled.div<{ showMenu: boolean }>`
  background-color: var(--white);
  height: 3.75rem;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  z-index: 999;

  > button {
    display: none;
    width: 3.75rem;
    height: 3.75rem;
    border: none;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > svg {
      color: var(--gray);
      font-size: 1.75rem;
    }
  }

  > nav {
    max-width: 1280px;
    flex: 1;
    display: flex;

    > ul {
      list-style: none;
      display: flex;
      flex: 1;

      > li {
        flex: 1;
        display: flex;

        > a {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1.2rem;
          color: var(--gray);
          position: relative;

          &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            background-color: var(--primary);
            transition: 0.4s width, 0.4s color;
            bottom: 20%;
          }

          &.active,
          &:hover {
            color: var(--primary);

            &::before {
              width: 2rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 579px) {
    > button {
      display: flex;
    }

    > nav {
      > ul {
        left: ${props => (props.showMenu ? '0' : '-100%')};
        transition: 0.4s left;
        height: calc(100% - 3.75rem);
        top: 3.75rem;
        width: 100%;
        background-color: var(--white);
        flex-direction: column;
        position: absolute;
        z-index: 999;

        > li {
          flex: unset;
          > a {
            line-height: 3.75rem;
          }
        }
      }
    }
  }
`
