import React from 'react';
import styles from '../styles/Faq.module.css';
import soySauceDrip from '../assets/soysauce-drip.png';


const Faq = () => {
    const faqData = [
        {
            question: "Q: 投稿レシピに、特別な料理のスキルは必要ですか？",
            answer: "A: いいえ、必要ありません。 投稿の目的は「家族が笑顔になる」ことです。レシピは編集部が無料でレイアウト修正を行うので、お気軽にご投稿ください。"
        },
        {
            question: "Q: なぜ、調理時間は必ず 30 分以内なのですか？",
            answer: "A: 忙しいママの「時短ニーズ」に応えるためです。 30分以内というルールで、本当に実用的な「我が家の定番」時短レシピを集めています。"
        },
        {
            question: "Q: 投稿するレシピに、和心食研製品は必須ですか？",
            answer: "A: はい、1品以上使用してください。 あなたのアイデアが、和心食研製品の新しい魅力を引き出します。"
        },
        {
            question: "Q: 「家族食事の写真」はなぜ必要なのですか？",
            answer: "A: サイトの目的は「おいしい記憶」をつくることです。 笑顔の写真は、その証明となります。"
        },
        {
            question: "Q: ランキングの順位は何を基準に決まりますか？",
            answer: "A: ランキングは、「時短」「共感」「達成感」の３要素で決定。単なる人気投票ではなく、30分以内の実現度や和心食研製品の活用度など、実用性と幸福度を総合的に評価します。"
        }
    ]

    const openAnswer = (e) => {
        const answer = e.currentTarget.nextSibling;
        answer.classList.toggle(styles["active"]);
        e.currentTarget.classList.toggle(styles["opened"]);
    }

    return (
        <div className={styles["faq-section"]} id='FAQ'>
            <img src={soySauceDrip} alt="醬油一滴" />
            <h2 className={styles["faq-title"]}>よくある質問</h2>
            <div className={`${styles["faq-container"]} container`}>
                {faqData.map((item, index) => (
                    <div key={index} className={styles["faq-item"]}>
                        <button type='button' onClick={openAnswer}>{item.question}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_451_1993)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0599 7.93962C12.7787 7.65872 12.3974 7.50094 11.9999 7.50094C11.6024 7.50094 11.2212 7.65872 10.9399 7.93962L5.2819 13.5956C5.00064 13.877 4.84268 14.2586 4.84277 14.6565C4.84287 15.0543 5.00101 15.4359 5.2824 15.7171C5.56379 15.9984 5.9454 16.1563 6.34325 16.1562C6.74111 16.1562 7.12264 15.998 7.4039 15.7166L11.9999 11.1206L16.5959 15.7166C16.8787 15.99 17.2575 16.1414 17.6508 16.1381C18.0441 16.1349 18.4204 15.9773 18.6986 15.6993C18.9769 15.4214 19.1348 15.0452 19.1384 14.6519C19.142 14.2586 18.991 13.8797 18.7179 13.5966L13.0609 7.93862L13.0599 7.93962Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_451_1993">
                                    <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
                                </clipPath>
                            </defs>
                        </svg></button>
                        <p className={styles["disactive"]}>{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq;