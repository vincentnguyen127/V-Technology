import { useState } from 'react'
import { Box, Button, Container } from '@material-ui/core'
import Header from './ui/Header'
import { ThemeProvider, createTheme } from '@material-ui/core'
import theme from './ui/Theme'

// const theme = createTheme({ 

// })

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ThemeProvider theme={theme}>
     <Header />
     Hello
      </ThemeProvider>
    </>
  )
}

export default App
