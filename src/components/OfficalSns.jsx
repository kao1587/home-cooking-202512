import React from 'react';
import styles from '../styles/OfficalSns.module.css';
import facebookLogo from '../assets/Facebook_Logo_Primary.png';
import instagramLogo from '../assets/Instagram_Glyph_Gradient.png';
import lineLogo from '../assets/LINE_Brand_icon.png';
import XLogo from '../assets/X_logo-black.png';



const OfficalSns = () => {
    const logoOnClick = (url) => {
        window.open(url, "_blank");
    }
    return (
        <div className={`${styles["sns-icon-group-bg"]} `}>
            <h2>公式<span>SNS</span></h2>
            <div className={styles["sns-icon-groups"]}>
                <div className={styles["sns-icon-group"]} onClick={() => logoOnClick("https://kao1587.github.io/home-cooking-202512")} >
                    <img src={lineLogo} alt="Lineロゴ" />
                    <p>Line<span className="material-symbols-outlined">open_in_new</span></p>
                </div>
                <div className={styles["sns-icon-group"]} onClick={() => logoOnClick("https://kao1587.github.io/home-cooking-202512")} >
                    <img src={XLogo} alt="Xロゴ" />
                    <p>X<span className="material-symbols-outlined">open_in_new</span></p>
                </div>
                <div className={styles["sns-icon-group"]} onClick={() => logoOnClick("https://kao1587.github.io/home-cooking-202512")} >
                    <img src={facebookLogo} alt="Facebookロゴ" />
                    <p>Facebook<span className="material-symbols-outlined">open_in_new</span></p>
                </div>
                <div className={styles["sns-icon-group"]} onClick={() => logoOnClick("https://kao1587.github.io/home-cooking-202512")} >
                    <img src={instagramLogo} alt="Instagramロゴ" />
                    <p>Instagram<span className="material-symbols-outlined">open_in_new</span></p>
                </div>
            </div>

        </div>
    )
}

export default OfficalSns;