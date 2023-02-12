import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './index.module.scss'
import close from '../../assets/icons/UI kit/Icon/State=close.svg'
import MenuItem from '@mui/material/MenuItem';
import arr from '../../assets/icons/UI kit/Icon/State=chevron-right.svg'
import {ButtonComponent} from "../ButtonComponent";
import {CustomTextField} from "../CustomTextField";
import CustomPhoneField from "../CustomTextField/CustomPhoneField";


export const BasicModal = ({title, modelVisible = true, children}) => {

    const labels = [
        {
            value: 'Volvo'
        },
        {
            value: 'BMW'
        },
        {
            value: 'Audi'
        },
        {
            value: 'Другое'
        },
    ]

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

                <Box className={styles.main} boxShadow={24} p={4}>
                    <div className={styles.btnClose} onClick={handleClose}>
                        <ButtonComponent icon={close} showLabel={false}/>
                    </div>

                    <h1>
                        {title}
                    </h1>
                    <CustomTextField label={'Ваше имя'}/>
                    {/*<CustomTextField label={'Контактный телефон'}/>*/}
                    <CustomPhoneField />
                    <CustomTextField visible={modelVisible} label={'Марка'} isSelect={true}>
                        {labels.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </CustomTextField>
                    <CustomTextField label={'Кратко опишите проблему'} isMultiline={true}/>


                    <Box className={styles.bottom} sx={{display: 'flex', width: 'auto'}}>
                        <p>Нажимая кнопку «Отправить заявку» вы даете согласие на
                            <span> Обработку персональных данных</span>
                        </p>
                        <ButtonComponent type={'submit'} label={'Отправить заявку'} icon={arr}/>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}