import React, {useEffect, useRef, useState} from "react";
import {ItemAction} from "./ItemAction";
import styles from './ListAction.module.scss'
import Slider from 'react-slick'
import arrowR from "../../assets/icons/UI kit/Icon/State=arrow-right.svg";
import arrowL from "../../assets/icons/UI kit/Icon/State=arrow-left.svg";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const ListActions = ({actions}) => {

    const [sliderRef, setSliderRef] = useState(null)

    var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,


    };

    return (
        <>
            <div className={styles.content}>

                <div className={styles.slider}>
                    <Slider ref={setSliderRef} {...settings}>
                        {actions.map((action, index) =>
                            <ItemAction key={action.id} action={action}/>
                        )}
                    </Slider>
                </div>
                <div className={styles.btns}>
                    <button onClick={sliderRef?.slickPrev}>
                        <img src={arrowL}/>
                    </button>
                    <button onClick={sliderRef?.slickNext} style={{marginLeft: 10}}>
                        <img src={arrowR}/>
                    </button>
                </div>

            </div>
        </>
    );
};