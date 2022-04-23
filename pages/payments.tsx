
import Grid from '@mui/material/Grid'
import PaymentsCard from "../components/PaymentsCard"
import PaymentsSearch from '../components/PaymentsSearch'
import { Mock as userData} from '../Mock/userPaymentsMock'
import { Mock as PaymentsData } from '../Mock/PaymentsMock'


const Payments = () => {
    return (
        <Grid container mt={5} justifyContent={'center'}>
            <Grid item xs={8}>
                <PaymentsSearch />
            </Grid>
            <Grid item xs={8} my={5}>
                <PaymentsCard  user={userData} payments={PaymentsData}/>
            </Grid>
        </Grid>
    )
}

export default Payments