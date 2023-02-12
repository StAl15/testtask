import styles from './index.module.scss'
import {ListReviewsComponent} from "../../components/Reviews/ListReviewsComponent";
import user from '../../assets/icons/UI kit/Icon/User.svg'
export const ListReviews = () => {

    const reviews = [
        {
            avatar: user,
            author: 'butyl1n_i',
            date: '23 декабря 2020',
            stars: 4,
            text: 'Решил убить сразу несколько зайцев, и пока гуляли с женой ' +
                'по меге оставил свою Volvo на диагностику в данном центре.' +
                ' Знаю что меняли ранее в другом центре, и что уже нужно было поменять.' +
                ' В этом центре лишнего не насчитали, проблемы нашли. В следующий раз приеду ' +
                'уже за полным ТО.'
        },
        {
            avatar: user,
            author: 'alexisS',
            date: '23 сентября 2021',
            stars: 5,
            text: 'Отличный сервис. Спасибо большое менеджеру Александру, помог и ' +
                'разъяснил (грамотно). Самое главное нашел причину и устранил . ' +
                'Не первый раз обращаюсь и пока всем доволен (обращался 01.06.2018г).' +
                ' Немного о самом сервисе. Клиентская зона на твердую 5 . Есть чай и кофе,' +
                ' и пока делают машину, можно занять себя просмотром телевизора.' +
                ' Сама зона просматривается сквозь стекла .' +
                ' Так что можно всегда посмотреть , на какой стадии ремонт! За это я ставлю 5+.'
        },

    ]

    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}>

                    <h1 className={styles.revTitle}>
                        Отзывы пользователей<br/> об Автоцентре
                    </h1>
                    <h1 className={styles.summary}>
                        4.6
                    </h1>
                    <h6>Средняя оценка</h6>
                </div>
                <hr/>
                <div className={styles.reviews}>
                    <ListReviewsComponent reviews={reviews}/>
                </div>

            </div>
        </>
    );
};