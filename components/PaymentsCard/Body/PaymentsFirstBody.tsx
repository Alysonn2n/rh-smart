import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

export const PaymentsFirstBody = ({user}: any) => {
    debugger;
    return (
        <TableContainer component={Paper} sx={{width: '100%', marginTop: '1.25rem', border: 1}}>
            <TableHead>
                <TableRow sx={{width:'100%'}}>
                    <TableCell sx={{width:'10%'}}>
                        <b>Código</b>
                    </TableCell>
                    <TableCell sx={{width:'20%'}}>
                        <b>Nome</b>
                    </TableCell>
                    <TableCell sx={{width:'1%'}}>
                        <b>CBO</b>
                    </TableCell>
                    <TableCell sx={{width:'30%'}}>
                        <b>Função</b>
                    </TableCell>
                    <TableCell sx={{width:'10%'}}>
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
        </TableContainer>
    )
}