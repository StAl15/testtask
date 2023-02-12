import styles from './index.module.scss'
import phone from '../../assets/images/iphone.svg'
import apps from '../../assets/images/apps.svg'
import starF from "../../assets/icons/UI kit/Icon/State=stars-filled.svg";
import check from '../../assets/icons/UI kit/Icon/State=check.svg'

export const DownloadApp = () => {
    const labels = [
        {label: 'Записаться на ремонт'},
        {label: 'Просмотреть историю обслуживания'},
        {label: 'Получать постоянные акции и бонусы'},
    ]
    return (
        <>
            <div className={styles.content}>
                <img className={styles.mockup} src={phone} alt='phone'/>
                <div className={styles.title}>
                    <h3>Скачивайте наше мобильное приложение</h3>
                    {labels.map((elem) => {
                        return (
                            <div>
                                <img src={check}/>
                                <p>{elem.label}</p>
                            </div>
                        );
                    })}
                </div>
                <img className={styles.apps} src={apps} alt='apps'/>
            </div>
        </>
    );
};