import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';
import KikkomanLogo from '../assets/kikkoman-logo.svg';
import footerbgBottom from '../assets/footerbg-bottom.svg';

const Footer = () => {
    const scrollToTopSmooth = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer>
            <div className={styles["footerbg-top"]}>
                <button type='button' className={styles["back-to-top-btn"]} onClick={scrollToTopSmooth}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M25 1.5625C12.0562 1.5625 1.5625 12.0562 1.5625 25C1.5625 37.9438 12.0562 48.4375 25 48.4375C37.9438 48.4375 48.4375 37.9438 48.4375 25C48.4375 12.0562 37.9438 1.5625 25 1.5625ZM29.018 23.6758V38.2812H20.982V23.6758H12.5L25 11.7188L37.5 23.6758H29.018Z" fill="#FFA864" />
                </svg>Back to Top</button>
                <h2 className={styles["footer-h2"]}><Link to={"/"}><img src={KikkomanLogo} alt="Kikkoman" /></Link></h2>
                <div className={`${styles["footer-nav"]} container`}>
                    <div className={styles["footer-nav-right"]}>
                        <a href="#" target='_blank'><h3 className={`${styles["footer-h3"]} container`}>ホームクッキングトップ<wbr />ページへ<span className="material-symbols-outlined">open_in_new</span></h3></a>
                        <ul className={`${styles["footer-ul"]} container`}>
                            <li><a href="#" target='_blank'>人気のレシピまとめ<span className="material-symbols-outlined">open_in_new</span></a></li>
                            <li><a href="#" target='_blank'>おすすめレシピ動画<span className="material-symbols-outlined">open_in_new</span></a></li>
                            <li><a href="#" target='_blank'>料理の基本<span className="material-symbols-outlined">open_in_new</span></a></li>
                            <li><a href="#" target='_blank'>旬の食材辞典<span className="material-symbols-outlined">open_in_new</span></a></li>
                            <li><a href="#" target='_blank'>行事イベントのレシピ<span className="material-symbols-outlined">open_in_new</span></a></li>
                            <li><a href="#" target='_blank'>季節の献立レシピ集<span className="material-symbols-outlined">open_in_new</span></a></li>
                        </ul>
                    </div>
                    <div className={styles["footer-nav-left"]}>
                        <Link to={"/jitanrecipe"}><h3 className={`${styles["footer-h3"]} container`}>みんなの時短レシピ</h3></Link>
                        <ul className={`${styles["footer-ul"]} container`}>
                            <li><Link to={"/jitanrecipe#ranking"}>時短料理レシピランキング</Link></li>
                            <li><Link to={"/jitanrecipe#theme"}>今月のテーマ</Link></li>
                            <li><Link to={"/jitanrecipe#staffmember-recipe"}>社員のリアル時短レシピ</Link></li>
                        </ul>
                        <Link to={"/jitanrecipeSubmit"}><h3 className={`${styles["footer-h3"]} container`}>先月投稿レシピ一覧・投稿募集</h3></Link>
                        <ul className={`${styles["footer-ul"]} container`}>
                            <li><Link to={"/jitanrecipeSubmit#recipe-vote"}>【投票】先月の時短レシピ一覧</Link></li>
                            <li><Link to={"/jitanrecipeSubmit#submission-rule"}>投稿ルール説明・投稿</Link></li>
                            <li><Link to={"/jitanrecipeSubmit#FAQ"}>よくある質問</Link></li>
                        </ul>
                    </div>
                </div>
                <p className={styles["alcohol-alert"]}>飲酒は20歳になってから。飲酒運転は法律で禁止されています。<br />妊娠中や授乳期の飲酒は胎児・乳児の発育に悪影響を与えるおそれがあります。<br />お酒は楽しく適量で。のんだあとはリサイクル。</p>
                <small className={styles["copyright"]}>&copy; 2025 Kao I Ching</small>
            </div>
            <img className={styles["footerbg-bottom"]} src={footerbgBottom} alt="フッターバックグラウンド" />
        </footer>
    )
}

export default Footer;
