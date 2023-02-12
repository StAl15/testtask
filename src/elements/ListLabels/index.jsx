import styles from './index.module.scss'
import {ListLabelsComponent} from "../../components/Label/ListLabelsComponent";
import audi from '../../assets/icons/UI kit/Icon/UI kit/Icon/Audi.svg'
import bmw from '../../assets/icons/UI kit/Icon/UI kit/Icon/BMW.svg'
import LandRover from '../../assets/icons/UI kit/Icon/UI kit/Icon/Land Rover.svg'
import mercedes from '../../assets/icons/UI kit/Icon/UI kit/Icon/Mercedes.svg'
import porshe from '../../assets/icons/UI kit/Icon/UI kit/Icon/Porsche.svg'
import skoda from '../../assets/icons/UI kit/Icon/UI kit/Icon/Skoda.svg'
import volkswagen from '../../assets/icons/UI kit/Icon/UI kit/Icon/Volkswagen.svg'
import volvo from '../../assets/icons/UI kit/Icon/UI kit/Icon/Volvo.svg'
// import Marquee from "react-fast-marquee";

export const ListLabels = () => {

    const labels = [
        {
            image: audi,
            title: 'audi'
        },
        {
            image: bmw,
            title: 'bmw'
        },
        {
            image: LandRover,
            title: 'landrover'
        },
        {
            image: mercedes,
            title: 'mercedes'
        },
        {
            image: porshe,
            title: 'porshe'
        },
        {
            image: skoda,
            title: 'skoda'
        },
        {
            image: volkswagen,
            title: 'volkswagen'
        },
        {
            image: volvo,
            title: 'volvo'
        },
    ]

    return (
        <>
            <div className={styles.content}>
                <h6>Обслуживаем и ремонтируем</h6>
                <ListLabelsComponent labels={labels}/>
            </div>
        </>
    );
};