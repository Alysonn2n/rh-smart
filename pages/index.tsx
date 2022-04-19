import type { NextPage } from 'next'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import HeadComponent from '../components/Head'
import MediaCard from '../components/Dashcard/card'
import { Container } from '@mui/material'




const Home: NextPage = () => {
  return (
    <Container sx={{margin: 'auto'}}>
      <HeadComponent title='Página Inicial'></HeadComponent>
      <Typography variant="h2" component="h1" mt={4}>
        Dashboard
      </Typography>
      <Box mt={5}>
        <Grid container spacing={2} textAlign={'center'}>
          <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
            <MediaCard nome='Holerite' alt='Holerite' description='' icon={}></MediaCard>
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={6}xs={12}>
            <MediaCard  alt='' nome='Dashboard' description='' icon={}></MediaCard>
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={6}xs={12}>
            <MediaCard alt='' nome='Ponto' description='' icon={}></MediaCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
