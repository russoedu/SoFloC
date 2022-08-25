import { Container, Paper } from '@mui/material'
import './Home.css'
import whereIsMyFlow from '../assets/where-is-my-flow.png'



export function Home () {
  return (
    <Container className='container'>
      <Paper className='readme' elevation={3}>
        <h1>SoFloc</h1>
        <p><strong>SoFloC</strong> (Solution Flow Copy) is a no hustle app created to help you when you need to copy a Flow (Power Automate) inside a Solution on Power Platform.</p>
        <p>Power Platform should have an easy way to copy a Flow created inside a Solution, but it doesn't.</p>
        <img src={whereIsMyFlow} alt='Where is my flow?'/>
        <p>We fix the frustration of copying a Flow on a Solution to then find out you are not able to add this Flow copy back to the Solution</p>
        <h2>How to install</h2>
        <p><strong>SoFloC</strong> does not require any installation, just download the file and execute it.</p>
        <h2>Usage</h2>
        <p>SoFloC is as easy as it could be. Open the app, drag a Solution zip, update the version and create as many Flow copies you want.</p>
      </Paper>
    </Container>
  )
}
