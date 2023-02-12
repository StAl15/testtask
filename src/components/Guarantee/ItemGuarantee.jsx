import styles from './ItemGuarantee.module.scss'

export const ItemGuarantee = ({guarantee}) => {
    return (
        <>
            <div className={styles.content}>
                <img src={guarantee.image} />
                <h6>{guarantee.label}</h6>
            </div>
        </>
    );
};