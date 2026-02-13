import React from 'react';
import styles from '../styles/ProductsImgGroup.module.css';
import soysauceDrip from '../assets/soysauce-drip.png';
import soysauce from '../assets/soysauce.png';
import milin from '../assets/milin.png';
import cookAlcohol from '../assets/cook-alcohol.png';

const ProductsImgGroup = () => {
    return (
        <div className={styles["imgGroup"]}>
            <img className={styles['product-img']} src={soysauce} alt="本つゆ" />
            <img className={styles['soysauce-img']} src={soysauceDrip} alt="醤油一滴" />
            <img className={styles['product-img']} src={milin} alt="とんかつソース" />
            <img className={styles['soysauce-img']} src={soysauceDrip} alt="醤油一滴" />
            <img className={styles['product-img']} src={cookAlcohol} alt="カットトマト" />
        </div>
    )
}

export default ProductsImgGroup;