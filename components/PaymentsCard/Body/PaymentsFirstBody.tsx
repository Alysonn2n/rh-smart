import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';

export const PaymentsFirstBody:React.FC<any> = ({user}) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <b>Código</b>
                        </TableCell>
                        <TableCell>
                            <b>Nome</b>
                        </TableCell>
                        <TableCell>
                            <b>CBO</b>
                        </TableCell>
                        <TableCell>
                            <b>Função</b>
                        </TableCell>
                        <TableCell>
                        <b>Admissão</b>
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
            </Table>
        </TableContainer>
    )
}