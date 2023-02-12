import styles from './ItemAction.module.scss'
import right from '../../assets/icons/UI kit/Icon/State=chevron-right.svg'

export const ItemAction = ({action}) => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={action.img} alt={"image"}/>
                </div>
                <div className={styles.desc}>
                    <h1>{action.title}</h1>
                    <p>{action.date}</p>
                    <button>
                        <div className={styles.btnIco}>
                            <img src={right} alt={'img'}/>
                        </div>
                        <span>Подробнее</span>
                    </button>
                </div>
            </div>
        </>
    );
};