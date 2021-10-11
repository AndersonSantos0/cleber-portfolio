/* eslint-disable react/display-name */
import React, { forwardRef, MutableRefObject } from 'react'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 1;
  scroll-behavior: smooth;

  footer {
    padding: 1.5rem 0;
    background-color: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 0.8rem;
    gap: 0.5rem;

    > a {
      color: var(--white);
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--gray);
  }
`

const HomeSectionContainerStyle = styled.section`
  > div {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 4rem 2rem;
    padding-top: 3rem;
    gap: 2rem;
    position: relative;
    z-index: 1;

    > h1 {
      font-size: 2rem;
      font-weight: 500;
      color: var(--gray);
    }
  }
`

interface HomeSectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const HomeSectionContainer = forwardRef(
  (
    { children, className, id }: HomeSectionContainerProps,
    ref: MutableRefObject<HTMLHeadingElement>
  ) => (
    <HomeSectionContainerStyle ref={ref} {...{ id, className }}>
      <div>{children}</div>
    </HomeSectionContainerStyle>
  )
)

// Profile

export const ProfileContainer = styled(HomeSectionContainer)`
  > div {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;
  }
`

export const ProfilePictureContainer = styled.div`
  flex: 1;
  padding: 1rem;
  aspect-ratio: 1/1;
  display: flex;
  position: relative;
  min-width: 230px;

  > div {
    border: 2px solid var(--gray-light);
  }

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    top: 1.6rem;
    left: 1.6rem;
    border: 2px solid var(--gray-light);
  }

  &::after {
    //content: '';
    box-sizing: border-box;
    position: absolute;
    width: calc(100% - 2.1rem);
    height: calc(100% - 2.1rem);
    right: 1.6rem;
    bottom: 1.6rem;
    border: 2px solid var(--gray-light);
    z-index: -1;
  }
`

export const ProfileInfo = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  min-width: 230px;

  > h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--gray);
  }

  > h2 {
    color: var(--primary);
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--gray-light);
  }
`

// Skills

export const SkillsContainer = styled(HomeSectionContainer)`
  background-color: var(--gray);

  > div {
    > h1 {
      color: var(--white);
    }
  }
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  row-gap: 1.5rem;
  column-gap: 3rem;
`

// Formation

export const FormationContainer = styled(HomeSectionContainer)`
  > div {
    > h1 {
      color: var(--gray);
    }
  }
`

export const FormationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  column-gap: 3rem;
  gap: 3rem;
`

// Certificates

export const CertificatesContainer = styled(HomeSectionContainer)`
  background-color: var(--gray);

  > div {
    > h1 {
      color: var(--white);
    }

    > button {
      margin-top: 3rem;
      width: fit-content;
      align-self: center;
      background-color: var(--white);
      border: none;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-family: 'Segoe UI';
      font-weight: 500;
      color: var(--gray-light);
      cursor: pointer;
    }
  }
`

export const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, auto));
  column-gap: 2rem;
  gap: 2rem;
`

// Contact

export const ContactContainer = styled(HomeSectionContainer)`
  form {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap: 2rem;

      > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 20rem;

        > label {
          color: var(--gray-light);
          font-size: 1.2rem;
          padding-bottom: 0.25rem;
        }

        > input {
          padding: 0.5rem;
          border: 1px solid var(--gray-light);
          font-family: 'Segoe UI';
          color: var(--gray);
          outline: none;
          margin-bottom: 0.75rem;

          &:focus {
            border-color: var(--primary);
          }
        }

        textarea {
          padding: 0.5rem;
          border: 1px solid var(--gray-light);
          font-family: 'Segoe UI';
          color: var(--gray);
          outline: none;
          margin-bottom: 0.75rem;
          flex: 1;
          resize: none;

          &:focus {
            border-color: var(--primary);
          }

          @media (max-width: 657px) {
            min-height: 20rem;
          }
        }
      }

      @media (max-width: 657px) {
        gap: 0;
        flex-direction: column;
      }
    }

    > input[type='submit'] {
      padding: 0.5rem 2rem;
      width: fit-content;
      align-self: flex-end;
      border: none;
      background-color: var(--gray);
      color: var(--white);
      font-family: 'Segoe UI';
      font-size: 1rem;
      font-weight: 400;
      margin-top: 0.75rem;
      cursor: pointer;

      @media (max-width: 657px) {
        width: 100%;
      }
    }
  }
`
