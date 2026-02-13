import React from 'react';
import { Link } from 'react-router-dom';
import TopSlideCard from "../components/TopSlideCard";
import styles from '../styles/Home.module.css';
import SubmitBtn from '../components/SubmitBtn.jsx';
import MonthlyTheme from '../components/MonthlyTheme.jsx';
import kvTitle from "../assets/top-kv-title.svg";
import momAndDaughterImg from "../assets/mom-daughter.jpg";
import littleGirlImg from "../assets/little-girl.jpg";
import diningImg from "../assets/dining.jpg";

function Home() {
  return (
    <div className={styles["top"]}>
      <section className={styles["top-kv"]}>
        <h1 className={`${styles["top-kv-h1"]} container`}><img src={kvTitle} alt="ママの笑顔がおいしさの秘訣" /></h1>
      </section>
      <section className={styles["kv-intro"]}>
        <h2>なぜ、ママの笑顔が大事か</h2>
        <p>献立の悩みや時間に追われるストレスは、<br />家庭内の空気をピリつかせます<br />ママの笑顔は、<wbr />家族の幸せを動かす<wbr />「最高のスイッチ」です<br />私たちが時短にこだわるのは、<br />ママに心のゆとりと達成感を<wbr />取り戻してほしいからです</p>
      </section>
      <section className={styles["top-everyonerecipe-preview"]}>
        <div className={styles["bg"]}></div>
        <div className={`${styles["flex-section"]} container`}>
          <div className={styles["group"]}>
            <h1>みんなの時短レシピ</h1>
            <p>忙しいママたちが<wbr />シェアする<wbr />時短レシピで、<br />短時間で家族に美味しい<wbr />笑顔を届けましょう。</p>
            <Link to="/jitanrecipe"><button type='button' className={`${styles["rank-btn"]} ${styles["rank-btn-pc"]} button`}>ランキングレシピをみる</button></Link>
          </div>
          <TopSlideCard />
          <Link to="/jitanrecipe"><button type='button' className={`${styles["rank-btn"]} ${styles["rank-btn-sp"]} button`}>ランキングレシピをみる</button></Link>
        </div>
      </section>
      <SubmitBtn />

      <div className={styles["happy-reason-bg"]}>
        <section className={`${styles["happy-reason"]} container`}>
          <h3>ママの笑顔になる点は、<wbr />こちらから！</h3>
          <p className='container'>あなたの視点で、このレシピが<wbr />「本当に時短になったか」<wbr />「作って一番楽しかったか」<wbr />を評価してください<wbr />ぜひ、心から<wbr />「助かった」「家族が笑顔になった」<wbr />と感じたレシピに、<wbr />清き一票をお願いします。</p>
          <div className="container">
            <Link to="/jitanrecipeSubmit"><button type='button' className="button">投票してください</button></Link>
          </div>
        </section>
      </div>

      <section className={`${styles["picGroup"]} container`}>
        <img src={momAndDaughterImg} alt="" />
        <img src={diningImg} alt="" />
        <img src={littleGirlImg} alt="" />
      </section>
      <div className={styles["second-intro-bg"]}>
        <section className={`${styles["second-intro"]} container`}>
          <p>ランキングは「幸せが生まれた証」です<br />この喜びの連鎖を止めてはいけません<br />本月テーマのレシピで<wbr />新たな笑顔を生み出し、<br />次のランキングを彩りましょう</p>
          <Link to="/jitanrecipe"><button type='button' className="button">ランキングレシピをみる</button></Link>
        </section>
      </div>
      <MonthlyTheme />
    </div>

  );
};

export default Home;