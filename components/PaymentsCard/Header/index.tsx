import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

export const PaymentsHeader: React.FC<any> = ({user}) => {
    return (
        <TableContainer component={Paper} sx={{display:'flex', flexDirection:'column', gap:'20px', border: 1}}>
            <TableHead>
                <TableRow>
                    <TableCell sx={{width:'65%'}}>
                        {user.boss}
                    </TableCell>
                    <TableCell sx={{width:'40%', fontSize:'17px'}}>
                    <b>Recibo de Pagamento de Salário</b>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell sx={{width:'79%'}}>
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