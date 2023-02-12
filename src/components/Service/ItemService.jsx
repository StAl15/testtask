import styles from './ItemService.module.scss'
import arrowR from "../../assets/icons/UI kit/Icon/State=chevron-right.svg";

export const ItemService = ({number, service}) => {
    return (
        <>
            <div className={styles.service}>
                <img src={service.image}/>
                <div className={styles.desc}>
                    <h3>
                        {service.label}
                        <br/>
                        <span>
                            {'0' + number.toString()}
                        </span>
                    </h3>
                    <button className={styles.btn}>
                        <img src={arrowR} alt="arrow"/>
                    </button>
                </div>
            </div>
        </>
    );
};