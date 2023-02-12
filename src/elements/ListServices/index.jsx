import styles from './index.module.scss'
import {ListServicesComponent} from "../../components/Service/ListServicesComponent";
import img1 from '../../assets/images/service1.svg'
import img2 from '../../assets/images/service2.svg'
import img3 from '../../assets/images/service3.svg'
import img4 from '../../assets/images/service4.svg'
import {useState} from "react";

export const ListServices = () => {

    const [services, setServices] = useState([
        {
            image: img1,
            label: 'Ремонт автомобиля'
        },
        {
            image: img2,
            label: 'Плановое ТО'
        },
        {
            image: img3,
            label: 'Диагностика и ремонт'
        },
        {
            image: img4,
            label: 'Чип тюнинг'
        },

    ])


    return (
        <>
            <div className={styles.content} id="services">
                <h1>Услуги автосервиса</h1>
                <div className={styles.list}>
                    <ListServicesComponent services={services}/>
                </div>


            </div>
        </>
    );
};