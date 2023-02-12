import {ReviewItem} from "./ReviewItem";
import React, {useState} from "react";
import styles from './ListReviewsComponent.module.scss'
import Slider from 'react-slick'
import arrowR from "../../assets/icons/UI kit/Icon/State=arrow-right.svg";
import arrowL from "../../assets/icons/UI kit/Icon/State=arrow-left.svg";

export const ListReviewsComponent = ({reviews}) => {

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

                <div className={styles.btns}>
                    <button onClick={sliderRef?.slickPrev}>
                        <img src={arrowL}/>
                    </button>
                    <button onClick={sliderRef?.slickNext} style={{marginLeft: 10}}>
                        <img src={arrowR}/>
                    </button>
                </div>
                <div className={styles.slider}>
                    <Slider ref={setSliderRef} {...settings}>
                        {reviews.map((review) =>
                            <ReviewItem key={review.id} review={review}/>
                        )}
                    </Slider>
                </div>



            </div>





        </>
    );
};