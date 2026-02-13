import React, { useState, useMemo } from 'react';
import styles from '../styles/Jitanrecipe.module.css';
import { Link } from 'react-router-dom';
import SubmitBtn from "../components/SubmitBtn";
import RecipeCard from "../components/RecipeCard.jsx";
import SiteRoute from '../components/SiteRoute.jsx';
import { RecipeData } from '../data/ResipeData.jsx';
import ProductsImgGroup from '../components/ProductsImgGroup.jsx';
import MonthlyTheme from '../components/MonthlyTheme.jsx';
import Recipe from './Recipe.jsx';
import sideImg1 from "../assets/side-pic1.png";
import sideImg2 from "../assets/side-pic2.png";

function Jitanrecipe() {
  const twoMonthsAgo = useMemo(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 2);
    return d.getMonth() + 1;
  }, []);

  const RecipeCardsInfo = RecipeData.slice(0, 8);
  const employeeRecipesInfo = RecipeData.slice(8, 15);

  const itemLoad = 6;
  const recipeCount = RecipeCardsInfo.length;
  const employeeRecipeCount = employeeRecipesInfo.length;
  const [visibleCount, setVisibleCount] = useState(itemLoad);
  const [employeeVisibleCount, setEmployeeVisibleCount] = useState(itemLoad);
  const recipesToShow = RecipeCardsInfo.slice(0, visibleCount);
  const employeeRecipesToShow = employeeRecipesInfo.slice(0, employeeVisibleCount);
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  const hasMore = visibleCount < recipeCount;
  const employeeRecipeHasMore = employeeVisibleCount < employeeRecipeCount;

  const employeeShowMore = () => {
    setEmployeeVisibleCount((prevCount) => prevCount + 3);
  };

  


  return (
    <div className={styles["jitan-recipe-page"]}>
      {/* kv */}
      <section className={styles["jitan-kv"]}>
        <div className={`${styles["jitan-kv-container"]} container`}>
          <h1>みんなの<wbr />時短料理レシピ</h1>
          <div className={styles["secTitle-container"]}>
            <p className={styles["line1"]}>我が家の定番！</p>
            <p className={styles["line2"]}>和心食研商品を<br />使った時短料理レシピ</p>
          </div>
        </div>
      </section>
      <SubmitBtn />
      <SiteRoute parentPage="みんなの時短料理レシピ" />
      <div className={styles["gradient-bg"]}>
        <div className={styles["gradient-bg-yellow"]}></div>
        <div className={styles["gradient-bg-orange"]}></div>
        {/* intro text */}
        <section className={`${styles["intro-text"]}  `}>
          <div className={styles["intro-text-content"]}>
            <h2>
              <span className={styles["intro-h2-1"]}>ママの笑顔が、<span className={styles["dressing-line1"]}></span></span><br /><span className={styles["intro-h2-2"]}>おいしさの秘訣！<span className={styles["dressing-line2"]}></span></span>
            </h2>
            <p>料理は義務ではなく、達成感へ！<br />忙しいママたちの知恵が詰まった<wbr />時短レシピがここに集結短時間で<wbr />料理を完成させ、<br />家族の笑顔という「おいしい記憶」を<wbr />一緒に作りましょう<wbr />あなたの家だけの短時間レシピ<wbr />投稿をお待ちしています！</p>
            <img src={sideImg1} alt="" className={styles["side-img1"]} />
            <img src={sideImg2} alt="" className={styles["side-img2"]} />
          </div>
        </section>
        {/* ranking */}
        <section className={`${styles["ranking"]} container shadow`} id='ranking'>
          <div className={styles["ranking-dashed-bg"]}></div>
          <h2 className={styles["ranking-title"]}>みんなが選んだ！<br />{twoMonthsAgo}月の時短料理レシピ<wbr />ランキング</h2>
          <h3 className={styles["ranking-theme"]}>豚肉<wbr />ｘ<wbr />和心食研醬油</h3>
          <p className={styles["ranking-inro"]}>先月の投票で選ばれた
            <wbr />時短料理レシピ（10位まで）<br />短時間でできても、家族との<wbr />かけがえのない思い出となる、<br />
            心温まるレシピをお届けします。</p>
        </section>
      </div>
      {/* Recipe cards section */}
      <section className={`${styles["recipe-cards-section"]} container`}>
        {recipesToShow.map((recipe, index) => (
          <RecipeCard
            key={index}
            imgSrc={recipe.imgSrc}
            title={recipe.title}
            content={recipe.content}
            link={`/jitanrecipe/recipe?title=${encodeURIComponent(recipe.title)}`}
            vote={false}
          />
        ))}
      </section>
      <div className={`${styles["seeMoreBtn"]} container`}>
        {hasMore && (
          <button type='button' className={`${styles["load-more-button"]} button`} onClick={showMore}>もっと見る +</button>
        )}
      </div>
      <div className='container'><ProductsImgGroup /></div>
      <MonthlyTheme />
      <section className={styles["employee-recipe"]}>
        <div className={styles["employee-recipe-bgs"]} id='staffmember-recipe'></div>
        <div className={styles["employee-recipe-bgs-2"]}></div>
        <div className={styles["employee-recipe-intro-text"]}>
          <h2 className='container'>今日の献立を救う！<br />社員のリアル時短レシピ</h2>
          <p className='container'>もう献立に迷わない！<wbr />忙しい社員の「生の声」から生まれた、<br />失敗が少なく、家族が必ず喜ぶ<wbr />時短レシピだけを厳選。</p>
        </div>
        {/* Recipe cards section */}
        <section className={`${styles["recipe-cards-section"]} container`}>
          {employeeRecipesToShow.map((recipe, index) => (
            <RecipeCard
              key={index}
              imgSrc={recipe.imgSrc}
              title={recipe.title}
              content={recipe.content}
              link={`/jitanrecipe/recipe?title=${encodeURIComponent(recipe.title)}`}
            />
          ))}
        </section>
        <div className={`${styles["seeMoreBtn"]} container`}>
          {employeeRecipeHasMore && (
            <button type='button' className={`${styles["load-more-button"]} button`} onClick={employeeShowMore}>もっと見る +</button>
          )}
        </div>
      </section>
    </div>
  )
};

export default Jitanrecipe;