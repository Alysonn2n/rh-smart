import Link from 'next/link'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';


import DashboardIcon from '@mui/icons-material/Dashboard';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Itens = () => {
    return (
        <Box sx={{ width: '100%', height: '100%', maxWidth: 360}}>
            <Paper sx={{ width: 200, maxWidth: '100%', height: '100%' }}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <DashboardIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Holerite</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <AccessTimeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Ponto</ListItemText>
                    </MenuItem>

                    <Divider />
                    <MenuItem>
                        <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </Box>
    )
}

export default Itens