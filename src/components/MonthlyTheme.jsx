import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MonthlyTheme.module.css';
import forkIcon from '../assets/fork-icon.svg';
import spoonIcon from '../assets/spoon-icon.svg';

const MonthlyTheme = () => {
    const now = new Date();
    const nowMonth = now.getMonth() + 1;
    return (
        <div className={`${styles["theme-section"]} shadow`} id='theme'>
            <div className={`${styles["theme-container"]} container`}>
                <h2 className={styles["theme-h2"]}><img src={forkIcon} alt="フォークアイコン" />{nowMonth}月のテーマ<img src={spoonIcon} alt="スプーンアイコン" /></h2>
                <h2 className={styles["theme-thisMonthTheme"]}>鶏<span>X</span>和心食研醬油<div className={styles["theme-dressingUnderline"]}></div></h2>
                <p className={styles["theme-text"]}>鶏肉は、忙しいママの強い味方！<wbr />短時間で火が通りやすく、<br />家族みんなが喜ぶ定番食材です。<br />今月は、この鶏肉と和心食研醤油を<wbr />組み合わせた<br />「みんなの時短レシピ」を大募集します</p>
                <p>あなただけのアイデアで、いつもの料理をランクアップさせ、<br />コミュニティで達成感を<wbr />分かち合いましょう！</p>
                <Link to="/jitanrecipeSubmit"><button type='button' className={`button`}>今すぐ投稿する</button></Link>
            </div>
            <div className={styles["theme-img"]}></div>

        </div>
    )
}

export default MonthlyTheme;