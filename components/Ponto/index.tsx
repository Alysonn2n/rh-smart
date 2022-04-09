import { useState, useEffect } from "react";
import App from "./clock"
import AlarmIcon from '@mui/icons-material/Alarm';
import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Button } from "@mui/material";



const ButtonContainer = {
    width: '400px',
    height: '400px'
}

const ButtonStyles = {
    height: '100%',
    borderRadius: '50%'
}

const ButtonWrap = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column'
}

const PontoForm = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime(date)
        }, 1000)
        return (() => clearInterval(timer))
    }, []);

    return (
        <>
            <Box sx={ ButtonContainer } style={{ borderRadius: '50%' }} mt={5}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={ ButtonStyles }>
                        <Box sx={ ButtonWrap }>
                            <AlarmIcon />
                            <Typography variant='h5' component='span' mt={1}>
                                {
                                    dateTime.toLocaleTimeString()
                                }
                            </Typography>
                        </Box>
                </Button>
            </Box>
        </>
    )
}

export default PontoForm