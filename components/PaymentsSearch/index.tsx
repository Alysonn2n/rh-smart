import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'


const dates = [
    {
        label: "2019",
        value: "2019"
    }
]

const PaymentsSearch = () => {
    return (
        <>
            <TextField
                id="outlined-select-currency"
                select
                label="Mês"
                helperText="Mês de referência"
                >
                {dates.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField sx={{marginLeft: '1rem'}}
                id="outlined-select-currency"
                select
                label="Ano"
                helperText="Ano de referência"
                >
                {dates.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button sx={{float: 'right'}}variant="text">Baixar Holerite</Button>
        </>
    )
}

export default PaymentsSearch