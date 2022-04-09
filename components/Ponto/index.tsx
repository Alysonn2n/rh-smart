import { StyledButton } from "./ButtonStyled.styled"
import App from "./clock"
import { Typography } from "@mui/material"
import Box, { BoxProps } from "@mui/material"
import { bgcolor, width } from "@mui/system"
const PontoForm = (props: BoxProps) => {
    const { sx, ...other } = props;
    return (  
    <Typography variant='h3' component='div' 
            sx={{display: 'flex', 
            justifyContent: 'center', 
            p: 1, m: 1, 
            borderRadius: 1,
            flexDirection: 'column',
            flexGrow: 0,
            alignItems: 'center',
            gap: '20px',
            mt: '100px'}}>
            <StyledButton sx={{height:'300px', width:'300px', borderRadius: '50%', bgcolor: 'blue'}}> 
            </StyledButton>
            <App></App>
    </Typography>
    )
}

export default PontoForm