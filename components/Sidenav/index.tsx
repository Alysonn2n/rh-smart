import Drawer from '@mui/material/Drawer'
import Items from './itens'

interface SidenavProps {
    isOpen: boolean
    setOpen(isOpen: boolean): void
}

const Sidenav: React.FC<SidenavProps> = ({isOpen, setOpen}) => {
    return (
        <>
            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={() => setOpen(!isOpen)}
            >
                <Items />
            </Drawer>
        </>
    )
}

export default Sidenav