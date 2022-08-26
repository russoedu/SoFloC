import { Card, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material'
import './Home.css'
import whereIsMyFlow from '../assets/where-is-my-flow.png'

export function Home () {
  return (
    <Container className='container' sx={{ minWidth: 300 }}>
      <Paper className='readme' elevation={3}>
        <h1>SoFloc</h1>

        <p><strong>SoFloC</strong> (Solution Flow Copy) is a no hustle app created to help you when you need to copy a Flow (Power Automate) inside a Solution on Power Platform.</p>

        <h2>Why?</h2>

        <p>Power Platform does not provide an easy way to create a copy of a Power Automate (Flow) when it is inside a <strong><em>Solution</em></strong>. You can create a copy inside the platform, but you will never be able to add this copied Flow back to the <strong><em>Solution</em></strong>.</p>

        <Card>
          <CardMedia
            component="img"
            image={whereIsMyFlow}
            alt="Where is my flow?"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Where the Flow I just copied?
            </Typography>
          </CardContent>
        </Card>

        <p>The option you end up having is recreating the whole Flow again or doing it manually.</p>

        <p><strong>SoFloC</strong> provides an easy solution to read the files on a Solution and update the version and create copies of the specified Flows.</p>

        <h2>How?</h2>
        <p><strong>SoFloC</strong> is as easy as it could be. Open the app, drag a Solution zip, update the version and create as many Flow copies you want.</p>

        <p><strong>SoFloC</strong> does not require any installation, just download the file and execute it.</p>
      </Paper>
    </Container>
  )
}
