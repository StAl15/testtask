import styles from './index.module.scss'
import cover from '../../assets/images/Image.png'
import mapImg from '../../assets/images/mapImage.svg'
import arrowR from '../../assets/icons/UI kit/Icon/State=chevron-right.svg'
import {ButtonComponent} from "../../components/ButtonComponent";
import {MapComponent} from "../../components/MapComponent/MapComponent";

export const FindUs = () => {

    return (
        <>
            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <img src={cover}/>
                    <div className={styles.info}>
                        <h6>
                            Екатеринбург, Московский тракт 7 км, 2
                            <br/>
                            Телефон: +7 (999) 123-45-67
                        </h6>
                        <h6>
                            Cервис: <span>service@example.ru</span>
                            <br/>
                            Отдел запасных частей: <span>parts@example.ru</span>
                        </h6>

                    </div>
                    {/*<button>*/}
                    {/*    <span>Построить маршрут</span>*/}
                    {/*    <img src={arrowR}/>*/}
                    {/*</button>*/}
                    <ButtonComponent label={'Построить маршрут'} icon={arrowR}/>
                </div>

                {/*<img className={styles.map_container} src={mapImg}/>*/}
                <MapComponent />
            </div>

        </>
    );
};