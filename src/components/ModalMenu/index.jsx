import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './index.module.scss'
import close from '../../assets/icons/UI kit/Icon/State=close.svg'
import {ButtonComponent} from "../ButtonComponent";


export const ModalMenu = ({children}) => {

    const style = {
        position: 'absolute',
        top: '10%',
        left: '0%',
        // transform: 'translate(0%, 0%)',
        width: '100%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div onClick={handleOpen}>{children}</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} className={styles.main} boxShadow={24} p={4}>
                    <div className={styles.btnClose} onClick={handleClose}>
                        <ButtonComponent icon={close} showLabel={false}/>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}