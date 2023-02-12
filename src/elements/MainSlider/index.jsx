import styles from './index.module.scss'
import arrowL from '../../assets/icons/UI kit/Icon/State=arrow-left.svg';
import arrowR from '../../assets/icons/UI kit/Icon/State=arrow-right.svg';
import arrowD from '../../assets/icons/UI kit/Icon/State=arrow-down.svg'
import {useState} from "react";
import Slider from 'react-slick'
import {Link} from 'react-scroll'
import {mainImgs} from "../../utils/utils";

export const ItemSlide = ({img}) => {

    const styleD = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'sticky',
        width: '100%',
        height: '600px'
    }

    return (
        <div style={styleD}/>
    )
}

export const MainSlider = () => {


    const [sliderRef, setSliderRef] = useState(null)
    const [pointer, setPointer] = useState(1)

    var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    const next = () => {
        sliderRef?.slickNext()
        if (pointer == 3) setPointer(1)
        else setPointer(pointer + 1)
        console.log(pointer)
    }
    const back = () => {
        sliderRef?.slickPrev()
        if (pointer == 1) setPointer(3)
        else setPointer(pointer - 1)
        console.log(pointer)
    }


    return (
        <>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.desc}>
                        <h1>Специализированный<br/> Автосервис</h1>
                        <h1 className={styles.phone}>+7 (999) 123-45-67</h1>

                        <div className={styles.times}>
                            <p className={styles.littleH}>Работаем для вас: </p>
                            <p>Ежедневно с 9:00 до 21:00</p>
                        </div>

                        <div className={styles.adress}>
                            <p className={styles.littleH}>По адресу: </p>
                            <p>Екатеринбург, ул. Московский тракт 7 км, 2</p>
                        </div>

                        <Link
                            to="services"
                            spy={true}
                            smooth={true}>
                            <button>
                                <span>Смотреть услуги</span>
                                <img src={arrowD}/>
                            </button>
                        </Link>

                    </div>

                </div>

                <div className={styles.right}>

                    <div className={styles.slider}>
                        <Slider ref={setSliderRef} {...settings}>

                            {/*<img src={i1} alt='image1'/>*/}
                            {/*<img src={i2} alt='image2'/>*/}
                            {/*<img src={i3} alt='image3'/>*/}

                            {mainImgs.map((labels) =>
                                // <ItemSlide img={labels.label}/>
                                <img src={labels.label}/>
                            )}
                        </Slider>
                    </div>


                    <div className={styles.controls}>

                        <div className={styles.btns}>
                            <button onClick={back} className={styles.btn_left}>
                                <img src={arrowL}/>
                            </button>

                            <button onClick={next} className={styles.btn_right}>
                                <img src={arrowR}/>
                            </button>
                        </div>

                        <h1>{pointer}/3</h1>
                    </div>

                </div>
            </div>
        </>
    );
};