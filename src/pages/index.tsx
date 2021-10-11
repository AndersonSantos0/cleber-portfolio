import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from 'emailjs-com'
import SkillItem from '../components/SkillItem'
import FormationItem from '../components/FormationItem'
import {
  CertificatesContainer,
  CertificatesGrid,
  ContactContainer,
  FormationContainer,
  FormationGrid,
  HomeContainer,
  ProfileContainer,
  ProfileInfo,
  ProfilePictureContainer,
  SkillsContainer,
  SkillsGrid
} from '../styles/pages/home'
import CertificateItem from '../components/CertificateItem'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { skills } from '../data/skills'
import { formations } from '../data/formation'
import { certificates } from '../data/certificates'
import { about } from '../data/about'
import { toast } from 'react-toastify'

type sections = 'about' | 'skills' | 'formation' | 'certificates' | 'contacts'

interface HomeProps {
  setActiveSection: Dispatch<SetStateAction<sections>>
}

const Home = ({ setActiveSection }: HomeProps) => {
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  const skillsRef = useRef<HTMLDivElement>(null)
  const formationRef = useRef<HTMLDivElement>(null)
  const certificatesRef = useRef<HTMLDivElement>(null)
  const contactsRef = useRef<HTMLDivElement>(null)

  const getActualSection = (scrollPosition: number): void => {
    if (
      !skillsRef.current ||
      !formationRef.current ||
      !certificatesRef.current ||
      !contactsRef.current
    )
      return

    if (scrollPosition >= contactsRef.current?.offsetTop - 500)
      return setActiveSection('contacts')
    if (scrollPosition >= certificatesRef.current?.offsetTop - 200)
      return setActiveSection('certificates')
    if (scrollPosition >= formationRef.current?.offsetTop - 200)
      return setActiveSection('formation')
    if (scrollPosition >= skillsRef.current?.offsetTop - 200)
      return setActiveSection('skills')
    if (scrollPosition <= skillsRef.current?.offsetTop - 200)
      return setActiveSection('about')
  }

  const onSubmit = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `service_r8wv0ah`,
        `template_f71ntg7`,
        e.target,
        `user_UxosSEEVQdA0rLYNin9DN`
      )
      .then(
        () => {
          toast.info(`Email enviado com sucesso!`)
          e.target.reset()
        },
        () => {
          toast.error(`Oops, algo deu errado, tente novamente mais tarde`)
        }
      )
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <HomeContainer
        onScroll={e => getActualSection(e.currentTarget.scrollTop)}
      >
        <ProfileContainer id="about">
          <ProfilePictureContainer>
            <Image
              width={800}
              height={800}
              alt="Profile image"
              src="/images/profile.jpg"
            />
          </ProfilePictureContainer>
          <ProfileInfo>
            <h1>{about.name}</h1>
            <h2>{about.profession}</h2>
            <p>{about.description}</p>
          </ProfileInfo>
        </ProfileContainer>
        <SkillsContainer ref={skillsRef} id="skills">
          <h1>Habilidades</h1>
          <SkillsGrid>
            {skills.map((skill, idx) => (
              <SkillItem key={idx} skill={skill.name} {...skill} />
            ))}
          </SkillsGrid>
        </SkillsContainer>
        <FormationContainer ref={formationRef} id="formation">
          <h1>Formação</h1>
          <FormationGrid>
            {formations.map((formation, idx) => (
              <FormationItem
                key={idx}
                formation={formation.name}
                {...formation}
              />
            ))}
          </FormationGrid>
        </FormationContainer>
        <CertificatesContainer ref={certificatesRef} id="certificates">
          <h1>Certificados</h1>
          <CertificatesGrid>
            {certificates.map((certificate, idx) => {
              if (!showAllCertificates && idx >= 6) return null

              return <CertificateItem key={idx} {...certificate} />
            })}
          </CertificatesGrid>
          <button onClick={() => setShowAllCertificates(!showAllCertificates)}>
            {showAllCertificates ? 'Ver menos' : 'Ver mais'}
          </button>
        </CertificatesContainer>
        <ContactContainer ref={contactsRef} id="contacts">
          <h1>Contate-me</h1>
          <form id="contact-form" onSubmit={onSubmit}>
            <div>
              <div>
                <label>Assunto</label>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="Assunto"
                />
                <label>Nome</label>
                <input
                  required
                  type="text"
                  name="user_name"
                  placeholder="Nome"
                />
                <label>Email</label>
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label>Mensagem</label>
                <textarea required name="message" placeholder="Mensagem" />
              </div>
            </div>
            <input type="submit" value="Enviar" />
          </form>
        </ContactContainer>
        <footer>
          Made by
          <Link replace href="https://anderson-portfolio-jade.vercel.app">
            Anderson Santos
          </Link>
        </footer>
      </HomeContainer>
    </>
  )
}

export default Home
