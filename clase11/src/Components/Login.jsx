import React from 'react'
import { Box, Button, Container, ThemeProvider, createTheme } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const esquemaColores = createTheme({
  palette: {
    background: {
      azul: '#fff',
      verde: '#009668'
    },
    text: {
      primary: '#0000',
      secondary: '#405040'
    }
  }
})

function Login() {
  return (
    <ThemeProvider theme={esquemaColores}>
      <div>
        <Container maxWidth="xl" sx={
          { 
            bgcolor: 'background.azul',
            display: 'flex',
            alignContent:'center',
            flexDirection: 'column'
          }
          }>
          <Box sx={{ bgcolor: 'background.verde' }}>
            <h1>Hola</h1>
            <Button variant='outline' startIcon={<SendIcon/>}>
              Enviar  
            </Button>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Login
