import React, { useEffect } from 'react'
import './App.css'
import Main from './components/Main/Main'
import { createTheme, ThemeProvider } from '@mui/material'
import {BrowserRouter as Routing } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6F0F'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 990,
      lg: 1280,
      xl: 1536,
    }
  }

})


function App() {
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routing>
        <Main />
        </Routing>
      </ThemeProvider>
    </>
  )
}

export default App