import { useState } from 'react';
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Sidenav from '../Sidenav';

export default function Header() {
  const [ isOpen, setOpen ] = useState(false)

  const handleLogout = () => {
    //a definir
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => setOpen(!isOpen)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RH Smart
            </Typography>
            <Link href='/'>
              <Button color="inherit">
                Dashboard
              </Button>
            </Link>
            <Link href='/holerite'>
              <Button color="inherit">
                Holerite
              </Button>
            </Link>
            <Link href='/ponto'>
              <Button color="inherit">
                Ponto
              </Button>
            </Link>
            <Button color='inherit'
              onClick={() => handleLogout}
            >
              Sair
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Sidenav
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </>
  )
}