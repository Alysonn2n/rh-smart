import PontoForm from "../components/Ponto"
import { Box } from "@material-ui/core"
import HeadComponent from "../components/Head"

const Ponto = () => {
    return (
        <>
            <HeadComponent title='Ponto' />
            <Box style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <PontoForm />
            </Box>
        </>
    )
}

export default Ponto