import styles from './index.module.scss'
import {ListGuarantees} from "../../components/Guarantee/ListGuarantees";
import img1 from '../../assets/icons/UI kit/Icon/State=people_professtonal.svg'
import img2 from '../../assets/icons/UI kit/Icon/State=security.svg'
import img3 from '../../assets/icons/UI kit/Icon/State=vehicles_car.svg'
import img4 from '../../assets/icons/UI kit/Icon/State=food-and-drinks.svg'

export const Guaranties = () => {

    const guarantees = [
        {
            image: img2,
            label: 'Гарантия работы 1 год'
        },
        {
            image: img1,
            label: 'Квалифицированные сотрудники'
        },
        {
            image: img4,
            label: 'Комфортные зоны ожидания'
        },
        {
            image: img3,
            label: 'Современное оборудование'
        },

    ]

    return (
        <>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h6>Обратившись к нам, в автоцентр, вы окажетесь в надёжных руках специалистов послегарантийного
                        ремонта и технического обслуживания автомобилей.</h6>
                    <p>
                        Чтобы автомобиль всегда оставался в отличной форме, необходимо выполнять регулярное ТО по
                        программе рекомендованной производителем.<br/><br/>
                        Подразделение нашей компании СЕРТИФИЦИРОВАННО - это позволяет производить обслуживание вашего
                        автомобиля С СОХРАНЕНИЕМ ГАРАНТИИ.
                    </p>
                </div>
                <div className={styles.right}>
                    <ListGuarantees guarantees={guarantees}/>
                </div>
            </div>
        </>
    );
};