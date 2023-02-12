import styles from './index.module.scss'

export const MainAdvantage = () => {
    return (
        <>
            <div className={styles.content}>
                <hr/>
                <div className={styles.head}>
                    <h6>Главное преимущество компании</h6>
                    <h6 className={styles.pos}>#1</h6>
                </div>

                <div className={styles.desc}>
                    <h1>
                        Работаем <br/> с 2012 года
                    </h1>
                    <h3>
                        Вашим автомобилем будут заниматься люди с большим опытом, полученным за многие годы и прошедшие
                        множество обучений.<br/><br/>
                        Сотрудники обладают огромным багажом знаний, применяемых на практике.
                    </h3>
                </div>

            </div>
        </>
    );
};