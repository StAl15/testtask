import styles from './ReviewItem.module.scss'
import starF from '../../assets/icons/UI kit/Icon/State=stars-filled.svg'
import starO from '../../assets/icons/UI kit/Icon/State=stars-outline.svg'


export const ReviewItem = ({review}) => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.userInfo}>
                    <img className={styles.avatar} src={review.avatar}/>
                    <div className={styles.bio}>
                        <p className={styles.author}>{review.author}</p>
                        <p className={styles.date}>{review.date}</p>
                        <div className={styles.rating}>
                            {[...Array(review.stars || 5)].map((star) => {
                                return <img src={starF}/>;
                            })}
                            {[...Array(5 - review.stars)].map((star) => {
                                return <img src={starO}/>;
                            })}
                        </div>

                    </div>
                </div>
                <p>{review.text}</p>


            </div>
        </>
    );
};