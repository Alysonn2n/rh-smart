import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ErrorIcon from '@mui/icons-material/Error';



export default function FourError() {
  return (<Box sx={{display: 'flex', flexDirection: 'column', alignItens: 'center', alignContent:'center', mt: '100px'}}>
    <ErrorIcon fontSize= 'large' sx={{margin: 'auto'}}/>
    <Typography variant='h6' component='h2' align='center'
    >404 - Página não encontrada</Typography>
    <Link href="/">
      <Button sx={{borderRadius:'20%', height: '115px', width: '170px', margin: 'auto' }}>Volte para a página inicial</Button>
    </Link>
  </Box>)
}