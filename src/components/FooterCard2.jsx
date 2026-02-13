import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/FooterCard2.module.css';



function FooterCard2({ imgSrc, title, description }) {
    const linkToHomeCooking = () => {
        window.open("https://kao1587.github.io/home-cooking-202512", "_blank");
    };

    return (
        <div className={`${styles.card} shadow`} onClick={linkToHomeCooking}>
            <div className={styles['card-top']} style={{ backgroundImage: `url(${imgSrc})` }}>
                <button type='button' className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M13.3333 5.3335H7.99998C7.29274 5.3335 6.61446 5.61445 6.11436 6.11454C5.61426 6.61464 5.33331 7.29292 5.33331 8.00016V24.0002C5.33331 24.7074 5.61426 25.3857 6.11436 25.8858C6.61446 26.3859 7.29274 26.6668 7.99998 26.6668H24C24.7072 26.6668 25.3855 26.3859 25.8856 25.8858C26.3857 25.3857 26.6666 24.7074 26.6666 24.0002V18.6668M16 16.0002L26.6666 5.3335M26.6666 5.3335V12.0002M26.6666 5.3335H20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className={styles['card-body']}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default FooterCard2;
