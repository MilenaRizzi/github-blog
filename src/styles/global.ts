import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }
    
  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-post']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    /* 1º expessura da fonte
       2º tamanho da fonte
       3º qual a fonte*/
       
  }
`
