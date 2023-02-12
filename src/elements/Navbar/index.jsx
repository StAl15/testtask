import styles from './index.module.scss'
import arrowU from '../../assets/icons/UI kit/Icon/State=chevron-up.svg'
import menu from '../../assets/icons/UI kit/Icon/State=menu.svg'
import arrowD from '../../assets/icons/UI kit/Icon/State=chevron-down.svg'
import {ButtonComponent} from "../../components/ButtonComponent";
import logo from '../../assets/images/Logo.svg'
import {BasicModal} from "../../components/BasicModal";
import {ModalMenu} from "../../components/ModalMenu";

export const Navbar = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <img className={styles.logo} src={logo}/>
                    <div className={styles.titles}>
                        <div className={styles.serTitle}>
                            <h6>Услуги</h6>
                            <img src={arrowD}/>
                        </div>
                        <h6>О компании</h6>
                        <h6>Гарантии</h6>
                        <h6>Новости</h6>
                        <h6>Акции</h6>
                        <h6>Контакты</h6>
                        <hr/>
                        <div className={styles.sec}>
                            <ModalMenu>
                                <img src={menu}/>
                            </ModalMenu>

                            <BasicModal title={'Запись на сервис'}>
                                <ButtonComponent label={'Запись на сервис'} showIcon={false}/>
                            </BasicModal>

                        </div>
                    </div>

                </div>
                <div className={styles.contentUnder}>
                    <div className={styles.titlesUnder}>
                        <h3>Ремонт автомобиля</h3>
                        <h3>Плановое ТО</h3>
                        <h3>Диагностика и ремонт</h3>
                        <h3>Чип тюнинг</h3>
                    </div>

                </div>
            </div>

        </>
    );
};