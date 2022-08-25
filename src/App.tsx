import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'

export function App() {

  return (
    <CssBaseline>
      <Header></Header>
      <Home/>
    </CssBaseline>
  )
}
