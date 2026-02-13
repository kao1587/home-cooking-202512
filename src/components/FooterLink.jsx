import React from 'react';
import styles from '../styles/FooterLink.module.css';
import recipeCardImg from '../assets/recipe-card-img.png';
import submitImg from '../assets/submit-img.png';
import homecookingImg from '../assets/kid_smile.jpg';
import FooterCard1 from './FooterCard1';
import FooterCard2 from './FooterCard2.jsx';
import OfficalSns from './OfficalSns';
import ProductsImgGroup from './ProductsImgGroup';

function FooterLink() {
  return (
    <div className='container'>
      <div className={styles["sp-only"]}>
        <ProductsImgGroup />
      </div>
      <div className={styles["footer-heading"]}>
        <h1 className={styles["h1-heading"]}>おすすめコンテンツ</h1>
      </div>
      <div className={styles['footer-pageLinks']}>
        <div className={styles['footer-pageLink-upper']}>
          <FooterCard1 link={"/jitanrecipe"} imgSrc={recipeCardImg} title={<>みんなの時短料理<wbr />レシピ</>} description={"投票による「みんなの時短レシピ」ランキングと、和心食研社員によるリアルな時短レシピを公開しています！"} />
          <FooterCard1 link={"/JitanrecipeSubmit"} imgSrc={submitImg} title={<>先月投稿<wbr />レシピ一覧<wbr />・投稿募集</>} description={"投稿ルールやFAQ、そして先月みんなが投稿したレシピを投票できる、コミュニティ参加の窓口です。"} />
        </div>

        <FooterCard2 imgSrc={homecookingImg} title={<>ホームクッキング<br />トップページへ</>} description={"定番メニューのレシピ、つくり方を写真つきでていねいに、「なぜそうするのか」をわかりやすく解説するスペシャルコンテンツです。和食の豊かさを感じてください！"} />
      </div>
      <ProductsImgGroup />
      <OfficalSns />
      <ProductsImgGroup />
    </div>
  );
}

export default FooterLink;
