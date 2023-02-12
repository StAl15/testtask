import styles from './ItemLabel.module.scss'

export const ItemLabel = ({label}) => {
    return (
        <>
            <div className={styles.content}>
                <img src={label.image} alt={label.title}/>
            </div>
        </>
    );
};