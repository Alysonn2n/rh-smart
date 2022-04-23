import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

export const PaymentsFirstBody:React.FC<any> = ({user}) => {
    return (
        <TableContainer component={Paper} sx={{width: '100%', marginTop: '1.25rem'}}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Código
                    </TableCell>
                    <TableCell>
                        Nome
                    </TableCell>
                    <TableCell>
                        CBO
                    </TableCell>
                    <TableCell>
                        Função
                    </TableCell>
                    <TableCell>
                        Admissão
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>
                    {user.code}
                </TableCell>
                <TableCell>
                    {user.name}<br></br>
                    {user.cpf}
                </TableCell>
                <TableCell>
                    {user.cbo}
                </TableCell>
                <TableCell>
                    {user.job}
                </TableCell>
                <TableCell>
                    {user.initial_work_date}
                </TableCell>
            </TableRow>
            </TableBody>
        </TableContainer>
    )
}