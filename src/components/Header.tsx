import { AppBar, Box, ButtonGroup, Container, Toolbar } from '@mui/material'
import './Header.css'
import { FaNpm } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import { Logo } from './Logo'
import { ViewOnButton } from './ViewOnButton'

export function Header () {
  return (
    <AppBar position='sticky' sx={{ minWidth: 300 }} enableColorOnDark>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'start', display: 'flex' }}>
          <Logo/>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <ButtonGroup variant="contained" sx={{ ml: '0.1em' }}>
              <ViewOnButton
                url='https://github.com/russoedu/SoFloC-service'
                text='view on GitHub'
                icon={<GoMarkGithub />}
              />
              <ViewOnButton
                url='https://www.npmjs.com/package/sofloc'
                text='view on NPM'
                icon={<FaNpm />}
              />
            </ButtonGroup>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
