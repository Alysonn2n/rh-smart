import type { NextPage } from 'next'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <>
      <Typography variant="h2" component="h1" mt={4}>
        Dashboard
      </Typography>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={12} md={12} sm={12}>
            doisadiofsa
          </Grid>
          <Grid item xl={4} lg={12} md={12} sm={12}>
            doisadiofsa
          </Grid>
          <Grid item xl={4} lg={12} md={12} sm={12}>
            doisadiofsa
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
