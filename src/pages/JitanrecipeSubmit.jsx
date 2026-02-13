import React from "react";
import { useState } from "react";
import styles from '../styles/JitanrecipeSubmit.module.css';
import { Link } from 'react-router-dom';
import SiteRoute from "../components/SiteRoute";
import RecipeCard from "../components/RecipeCard";
import ProductsImgGroup from "../components/ProductsImgGroup";
import soySauceDrip from '../assets/soysauce-drip.png';
import SubmitForm from "../components/SubmitForm.jsx";
import Faq from "../components/Faq.jsx";
import { RecipeData } from '../data/ResipeData.jsx';


function JitanrecipeSubmit() {
  const LastMonth = ((new Date().getMonth()) === 0) ? 12 : new Date().getMonth();
  const recipes = RecipeData.slice(15, RecipeData.length);

  const itemLoad = 6;
  const recipeCount = recipes.length;
  const [visibleCount, setVisibleCount] = useState(itemLoad);
  const recipesToShow = recipes.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  const hasMore = visibleCount < recipeCount;

  return (
    <div>
      <SiteRoute parentPage="先月投稿レシピ一覧・投稿募集" />
      <section className={styles["kv"]}>
        <div className="container">
          <p className={styles["title-tag"]}>今月の人気レシピを投票で決定！</p>
          <h1>ママと家族をハッピーにした<wbr />みんなの時短料理レシピ！<br />先月の時短レシピ一覧</h1>
        </div>
        <div className={`${styles["kv-img"]} ${styles["kv-sp-img"]}`}></div>
        <div className={`${styles["kv-intro-group"]} container`}>
          <div className={styles["kv-intro-group-text"]}>
            {/* h2 */}
            <h2>
              <span className={styles["dressing-text"]}>なぜ、<span className={styles["dressing-line"]}></span></span>
              <wbr />
              <span className={styles["dressing-text"]}>ママのハッピーが大事か<span className={styles["dressing-line"]}></span></span>
            </h2>
            {/* p */}
            <div className={styles["kv-intro-text"]}>
              <p>献立の悩みや時間に追われるストレスは、<br />
                家庭内の空気をピリつかせます。<br />
                ママの笑顔は、<wbr />家族の幸せを動かす<wbr /><span className={styles["dressing-text"]}>「最高のスイッチ」です。<span className={styles["dressing-line"]}></span></span><br />
                私たちが時短にこだわるのは、<br />
                ママに心のゆとりと達成感を<wbr />取り戻してほしいからです。
              </p>
              <p>
                さあ、次はあなたの番です！<wbr />あなたの視点で、このレシピが<br />
                <span className={styles["dressing-text"]}>「本当に時短になったか」<span className={styles["dressing-line"]}></span></span><span className={styles["dressing-text"]}>「作って一番楽しかったか」<span className={styles["dressing-line"]}></span></span><br />
                を評価してください。<wbr />
                ぜひ、心から「助かった」「家族が笑顔になった」<br />
                と感じたレシピに、清き一票をお願いします。
              </p>
            </div>
          </div>
          <div className={`${styles["kv-img"]} ${styles["kv-pc-img"]}`}></div>
        </div>
      </section>

      <section className={`${styles["submitRecipe"]} container`} id="recipe-vote">
        <h2>先月({LastMonth}月)投稿したレシピ</h2>
        <div className={styles["recipeCard-group"]}>
          {recipesToShow.map((recipe, index) => (
            <RecipeCard
              key={index}
              imgSrc={recipe.imgSrc}
              title={recipe.title}
              content={recipe.content}
              tag={true}
              link={`/jitanrecipe/recipe?title=${encodeURIComponent(recipe.title)}`}
              vote={true}
            />
          ))}
        </div>
        <div className={`${styles["seeMoreBtn"]} container`}>
          {hasMore && (
            <button type='button' className={`${styles["load-more-button"]} button`} onClick={showMore}>もっと見る +</button>
          )}
        </div>
      </section>
      <div className="container">
        <ProductsImgGroup />
      </div>
      <section className={styles["submit-form-intro"]} id="submission-rule">
        <div className="container">
          <h2>我が家の「時短・おいしい<wbr />記憶」レシピ募集</h2>
          <p>「料理を仕事にしたくない」と願うすべてのママへ。<br />あなたの「我が家の定番時短レシピ」は、<wbr />他の忙しいママの大きな助けになります。<br />家族の笑顔とともにお料理を投稿して、<wbr />コミュニティでの達成感を<wbr />手に入れましょう！</p>
          <img src={soySauceDrip} alt="醬油一滴" className={styles["soysauce-drip-img"]} />
        </div>
      </section>
      <div className={styles["form-submit-img"]}></div>
      <section className={styles["rule-guide"]}>
        <div className="container">
          <h2>あなたの「おいしい記憶」<wbr />をシェア！投稿参加ガイド</h2>
          <p className={styles["title-intro"]}>家族の笑顔が増えるレシピを<wbr />お待ちしています</p>
          <h3>今月のテーマ</h3>
          <p className={styles["rule"]}>鶏 ｘ 和心食研醤油</p>
          <h3>条件</h3>
          <ul>
            <li className={styles["rule-list"]}>和心食研の商品を1品以上<wbr />使用してください</li>
            <li className={styles["rule-list"]}>調理時間が30分以内で完成する<wbr />レシピに限ります</li>
            <li className={styles["rule-list"]}>料理写真と、家族が喜んでいる様子の写真を<wbr />添えてください。</li>
            <li className={styles["rule-list"]}>誰でも再現できるように、分量と手順を<wbr />正確に記載してください
            </li>
          </ul>
          <h3>投稿サポートと報酬</h3>
          <ul>
            <li className={styles["support"]}>投稿レシピの「レイアウト美化」や「語法修正」を編集部が無料で行い</li>
            <li className={styles["support"]}>入賞者には、和心食研製品の詰め合わせなど、賞品をご用意しております。</li>
            <li className={styles["support"]}>優秀なレシピは、サイト内の人気ランキングや公式 SNS で紹介され、<wbr />コミュニティでの達成感に繋がります。</li>
          </ul>
        </div>
      </section>
      <img src={soySauceDrip} alt="醬油一滴" className={styles["soysauce-drip-img"]} />
      <SubmitForm />
      <Faq />
    </div>
  );
};

export default JitanrecipeSubmit;