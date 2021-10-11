import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FiMenu, FiX } from 'react-icons/fi'
import { MenuContainer } from './styles'

type sections = 'about' | 'skills' | 'formation' | 'certificates' | 'contacts'

interface MenuProps {
  activeSection: sections
}

const Menu = ({ activeSection }: MenuProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('hashChangeComplete', () => {
      setShowMenu(false)
    })
  }, [router])

  return (
    <MenuContainer {...{ showMenu }}>
      <button onClick={() => setShowMenu(prev => !prev)}>
        {showMenu ? <FiX /> : <FiMenu />}
      </button>
      <nav>
        <ul>
          <li>
            <Link href="#about">
              <a className={activeSection === 'about' ? 'active' : undefined}>
                Sobre
              </a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a className={activeSection === 'skills' ? 'active' : undefined}>
                Habilidades
              </a>
            </Link>
          </li>
          <li>
            <Link href="#formation">
              <a
                className={activeSection === 'formation' ? 'active' : undefined}
              >
                Formação
              </a>
            </Link>
          </li>
          <li>
            <Link href="#certificates">
              <a
                className={
                  activeSection === 'certificates' ? 'active' : undefined
                }
              >
                Certificados
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contacts">
              <a
                className={activeSection === 'contacts' ? 'active' : undefined}
              >
                Contato
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  )
}

export default Menu
