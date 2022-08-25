import fontColorContrast from 'font-color-contrast'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    getContrastText: fontColorContrast,
    mode: 'dark',
    background: {
      default: '#424242',
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#2e59a4',
    },
    error: {
      main: '#d64161',
    },
    warning: {
      main: '#ff7b25',
    },
  },
})

const page = (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>
)

ReactDOM.render(page, document.getElementById('root'))
