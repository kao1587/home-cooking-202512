import React, { useState, useEffect } from 'react';
import styles from '../styles/TopSlideCard.module.css';
import { RecipeData } from '../data/ResipeData.jsx';
import { Link } from 'react-router-dom';

const slideBtnCount = 3;
const slideTime = 3000;
const TopSlideCard = () => {
    const isPlaying = true;

    // slide btn
    const btnArray = ["", "", ""];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideBtnClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % slideBtnCount);
            }, slideTime);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isPlaying, activeIndex,]);

    const cardInfo = RecipeData.slice(0, 3);

    return (
        <div className={`${styles["slide-section"]} container`}>
            <div className={`${styles["card-list-container"]} ${styles[`active-index-${activeIndex}`]}`}>
                {cardInfo.map((card, index) => (
                    <Link to={`/jitanrecipe/recipe?title=${encodeURIComponent(card.title)}`} key={index}>
                        <div
                            style={{ backgroundImage: `url(${card.imgSrc})` }}
                            className={`${styles["card"]} ${activeIndex === index ? styles["active"] : styles["hidden"]} shadow`}
                        >
                            <h2>{card.title}</h2>
                            {card.tag && <p className={styles["tag"]}>{card.tag}</p>}
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles["button-group"]}>
                <div className={styles["slide-btn"]}>{btnArray.map((btn, index) => (
                    <button key={index} type='button' onClick={() => handleSlideBtnClick(index)} className={`${styles["btn"]} ${activeIndex === index ? styles["now-btn"] : ""}`}></button>
                ))}
                </div>
            </div>
        </div>
    )
}

export default TopSlideCard
