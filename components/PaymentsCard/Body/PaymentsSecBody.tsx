import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';


export const PaymentsSecBody = ({body}: any) => {
    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <b>Código</b>
                    </TableCell>
                    <TableCell>
                       <b> Descrição</b>
                    </TableCell>
                    <TableCell>
                        <b>Referência</b>
                    </TableCell>
                    <TableCell>
                        <b>Proventos</b>
                    </TableCell>
                    <TableCell>
                        <b>Descontos</b>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    body.map((elements: any, index: any) => (
                        <>
                            <TableRow key={index}>
                                <TableCell>
                                    {elements.paymentCode}
                                </TableCell>
                                <TableCell>
                                    {elements.description}
                                </TableCell>
                                <TableCell>
                                    {elements.reference}
                                </TableCell>
                                <TableCell>
                                    {elements.earnings}
                                </TableCell>
                                <TableCell>
                                    {elements.discounts}
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{width:'100%'}}>
                                <TableCell rowSpan={2} colSpan={3} sx={{width:'50%'}}>
                                    Message: {elements.message}
                                </TableCell>
                                <TableRow>
                                    <TableCell>Total de Proventos</TableCell>
                                    <TableCell align="right">{elements.total_earnings}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Total de Descontos</TableCell>
                                    <TableCell align="right">{elements.total_discounts}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Liquidez</TableCell>
                                    <TableCell align="right">{elements.liquidity}</TableCell>
                                </TableRow>
                            </TableRow>
                        </>
                    ))
                }
            </TableBody>
        </>
    )
}