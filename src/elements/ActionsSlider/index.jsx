import styles from './index.module.scss'
import {ListActions} from "../../components/Actions/ListActions";
import img1 from '../../assets/images/Prew.svg'
import img2 from '../../assets/images/Prew-1.svg'

export const ActionsSlider = ({props}) => {

    const actions = [
        {
            img: img1,
            title: 'Дарим 1000 бонусов за шиномонтаж и хранение',
            date: '11 апреля'
        },
        {
            img: img2,
            title: 'Специальное предложение для владельцев VOLVO XC90',
            date: '18 ноября'
        }
    ]

    return (
        <>
            <div className={styles.content}>

                <h1>Наши акции</h1>

                <div className={styles.slider}>
                    <ListActions actions={actions}/>
                </div>
            </div>
        </>
    );
};