import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root{
    --primary: ${props => props.theme.colors.primary.default};
    --white: ${props => props.theme.colors.white.default};
    --white-special: ${props => props.theme.colors.white.special};
    --gray: ${props => props.theme.colors.gray.default};
    --gray-light: ${props => props.theme.colors.gray.light}
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  height: 100%;

    #__next{
      height: 100%;

      > main{
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }

  html {
    font-size: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }


  @media (max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html{
      font-size: 87.5%;
    }
  }
`
