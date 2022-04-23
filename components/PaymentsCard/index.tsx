
import { PaymentsProps } from "../../models/PaymentsProps"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { PaymentsHeader } from "./Header"
import { PaymentsFirstBody } from "./Body/PaymentsFirstBody";
import { PaymentsSecBody } from "./Body/PaymentsSecBody";


const PaymentsCard:React.FC<PaymentsProps> = (
    {
        user,
        payments
    }
) => {
    return (
            <Card sx={{minWidth: '100%'}}>
                <CardContent sx={{border:1}}>
                    <PaymentsHeader user={user} sx={{width: '100%'}} />
                    <PaymentsFirstBody user={user} sx={{width: '100%'}} />
                    <TableContainer component={Paper} sx={{marginTop: '1.25rem'}}>
                        <PaymentsSecBody body={payments[0].body} />
                        <TableFooter>
                            {payments[0].footer.map((elements: any, index: any) => (
                                <TableRow key={index}>
                                    <TableCell sx={{width:'20%'}}>
                                        Saldo Base <br></br>{elements.base_earnings}
                                    </TableCell>
                                    <TableCell sx={{width:'20%'}}>
                                        Base Calc. INSS <br></br>{elements.inss_calc}
                                    </TableCell>
                                    <TableCell sx={{width:'20%'}}>
                                        FGTS do Mês<br></br>{elements.montly_fgts}
                                    </TableCell>
                                    <TableCell sx={{width:'20%'}}>
                                        Base Calc. IRRF:<br></br>{elements.irff_calc}
                                    </TableCell>
                                    <TableCell sx={{width:'20%'}}>
                                        Faixa IRRF: <br></br> {elements.range_irrf}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableFooter>
                    </TableContainer>

            </CardContent>
        </Card>
    )
}

export default PaymentsCard