import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table'
import Typography from '@mui/material/Typography'
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

export const PaymentsHeader: React.FC<any> = ({user}) => {
    return (
        <TableContainer component={Paper} sx={{width: "100%"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <Typography variant="h5" component="h5">
                                {user.boss}
                            </Typography>
                        </TableCell>
                        <TableCell colSpan={2} align='right'>
                            <Typography variant="h5" component="h5">
                                <b>Recibo de Pagamento de Salário</b>
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2}>
                            Nome da Empresa: <br></br>
                            {user.workplace}
                        </TableCell>
                        <TableCell colSpan={2} align='right'>
                            Referente ao mês/ano<br></br>
                            {user.cpf}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}