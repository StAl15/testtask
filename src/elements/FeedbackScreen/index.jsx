import styles from './index.module.scss'
import {ButtonComponent} from "../../components/ButtonComponent";
import sr from '../../assets/icons/UI kit/Icon/State=chevron-right.svg';
import {BasicModal} from "../../components/BasicModal";

export const FeedbackScreen = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.formTitle}>
                        <hr/>
                        <h6>Получить консультацию</h6>
                    </div>
                    <div className={styles.formBlock}>
                        <h3>Оставьте заявку, и наш мастер перезвонит вам,
                            произведет предварительную оценку стоимости услуг
                            и запчастей, и подберет удобное время для визита.</h3>
                        <BasicModal title={'Перезвонима в течение часа'} modelVisible={false}>
                            <ButtonComponent label={'Оставить заявку'} icon={sr}/>
                        </BasicModal>

                    </div>
                </div>

            </div>
        </>
    );
};