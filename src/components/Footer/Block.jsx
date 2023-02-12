import styles from './Block.module.scss'

export const Block = ({title, labels, titleBottom, style}) => {
    return (
        <>
            <div style={style} className={styles.content}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <hr className={styles.blockHr}/>
                </div>

                <div className={styles.items}>
                    {labels.map((el) =>
                        <h5>{el.label}</h5>
                    )}
                </div>
            </div>
        </>
    );
};