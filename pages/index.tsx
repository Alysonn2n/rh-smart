import type { NextPage } from 'next'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import HeadComponent from '../components/Head'
import Div from '../components/HeadDiv/div'

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title='Página Inicial'></HeadComponent>
      <Typography variant="h2" component="h1" mt={4}>
        Dashboard
      </Typography>
      <Box mt={5}>
        <Grid container spacing={2} textAlign={'center'}>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <Div>doisadiofsa</Div>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <Div>doisadiofsa</Div>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6}xs={12}>
            <Div>doisadiofsa</Div>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6}xs={12}>
            <Div>doisadiofsa</Div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
