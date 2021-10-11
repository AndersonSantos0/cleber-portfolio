import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import Menu from '../components/Menu'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import 'react-toastify/dist/ReactToastify.css'
type sections = 'about' | 'skills' | 'formation' | 'certificates' | 'contacts'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [activeSection, setActiveSection] = useState<sections>(`about`)

  useEffect(() => {
    console.log(activeSection)
  }, [activeSection])

  return (
    <ThemeProvider theme={theme}>
      <main>
        <ToastContainer style={{ top: `5rem` }} position="top-right" />
        <Menu {...{ activeSection }} />
        <Component {...pageProps} {...{ setActiveSection }} />
      </main>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
