import styles from './index.module.scss'
import {ButtonComponent} from "../../components/ButtonComponent";
import {footerServices, footerTypes, headers, socialIcons} from "../../utils/utils";
import {Block} from "../../components/Footer/Block";
import arr from '../../assets/icons/UI kit/Icon/State=arrow-up-right.svg'


export const Footer = () => {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.mainInfo}>
                        <div className={styles.left}>
                            <div className={styles.info}>

                                <div className={styles.accentInfo}>
                                    <h3>info@example.ru</h3>
                                    <p>Работаем для вас:<br/>
                                        Ежедневно с 9:00 до 21:00</p>
                                </div>

                                <div className={styles.btns}>
                                    <ButtonComponent label={'Обратный звонок'} showIcon={false}/>
                                    <div>
                                        <ButtonComponent label={'Контроль качества'} showIcon={false}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <div className={styles.up}>
                                <div className={styles.headersMenu}>
                                    {headers.map((label) =>
                                        <h3 className={styles.option}>{label.label}</h3>
                                    )}
                                </div>
                                <div className={styles.lkDiv}>
                                    <h3 className={styles.lk}>Личный кабинет</h3>
                                    <img src={arr}/>
                                </div>

                            </div>
                            <div className={styles.bottom}>
                                <Block style={{marginRight: '40px'}} title={'Автоцентры'} labels={footerTypes}
                                       titleBottom={'Адрес автоцентра'}/>
                                <Block style={{marginLeft: 'auto'}} title={'Услуги'} labels={footerServices}
                                       titleBottom={'Центр кузовного ремонта'}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.aditionalyInfo}>
                        <div className={styles.social}>
                            {socialIcons.map((label) =>
                                <ButtonComponent icon={label.label} showLabel={false}/>
                            )}
                        </div>
                        <div className={styles.address}>
                            <p className={styles.item1}>
                                Адрес автоцентра:<br/>
                                <span>
                                Екатеринбург, ул. Московский тракт 7 км, 2 <br/>
                                +7 (999) 123-45-67
                            </span>
                            </p>
                            <p className={styles.item2}>
                                Центр кузовного ремонта:<br/>
                                <span>
                                Екатеринбург, ул. Московский тракт 7 км, 2 <br/>
                                +7 (999) 123-45-67
                            </span>
                            </p>
                        </div>

                    </div>

                </div>

                <div className={styles.titlesBottom}>
                    <hr className={styles.bottomHr}/>
                    <div>
                        <h5 className={styles.tbl} style={{marginRight: 'auto'}}>© 2022 Специализированный автоцентр</h5>
                        <h5 className={styles.tbr}>Дизайн и разработка - <span>Media Army</span></h5>

                    </div>

                </div>
            </div>


        </>
    );
};