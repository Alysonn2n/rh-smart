import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

export const PaymentsHeader: React.FC<any> = ({user}) => {
    return (
        <TableContainer component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        {user.boss}
                    </TableCell>
                    <TableCell>
                    Recibo de Pagamento de Salário
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>
                    Nome da Empresa: <br></br>
                    {user.workplace}
                </TableCell>
                <TableCell>
                    Referente ao mês/ano<br></br>
                    {user.cpf}
                </TableCell>
            </TableRow>
            </TableBody>
        </TableContainer>
    )
}