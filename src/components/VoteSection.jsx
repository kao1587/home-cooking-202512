import React, { useState, useEffect } from 'react';
import styles from '../styles/VoteSection.module.css';

const requestUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfAXUkI1ff55S9s5_5zct6p1chqYU7jP7uS7ViqNlWY2tKRnA/formResponse";
const recipeTitleId = "entry.1226923981";

const VoteSection = ({ recipeTitle }) => {
    const [isVoted, setIsVoted] = useState(false);
    const [showThanksMsg, setShowThanksMsg] = useState(false);
    const storageKey = 'votedRecipes';

    useEffect(() => {
        const votedRecipesJSON = localStorage.getItem(storageKey);
        const votedRecipes = votedRecipesJSON ? JSON.parse(votedRecipesJSON) : [];

        if (votedRecipes.includes(recipeTitle)) {
            setIsVoted(true);
            setShowThanksMsg(false);
        } else {
            setIsVoted(false);
        }
    }, [recipeTitle]);

    // For testing purposes: clear vote records
    // localStorage.removeItem(storageKey);

    const handleVote = async (e) => {
        if (isVoted) return;

        const formData = new FormData();
        formData.append(recipeTitleId, recipeTitle);

        try {
            await fetch(requestUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });

            const votedRecipesJSON = localStorage.getItem(storageKey);
            const votedRecipes = votedRecipesJSON ? JSON.parse(votedRecipesJSON) : [];
            votedRecipes.push(recipeTitle);
            localStorage.setItem(storageKey, JSON.stringify(votedRecipes));

            setIsVoted(true);
            setShowThanksMsg(true);

            setTimeout(() => {
                setShowThanksMsg(false);
            }, 3000);
            e.target.classList.add(styles["voted"]);

        } catch (error) {
            console.error("投票提交失敗:", error);
        }
    }

    return (
        <div className={`${styles["vote-section"]} shadow`}>
            <h3>投票してください！</h3>
            <p>このレシピはいかがでしょうか</p>
            <p className={styles["alert-msg"]}>* 投票後の取り消しは不可です</p>
            <button
                type='button'
                onClick={handleVote}
                disabled={isVoted}
                className={isVoted ? styles["voted"] : ''}>{isVoted ? '投票済み' : '共感した'}
            </button>
            <p className={`${styles["thanks-msg"]} ${showThanksMsg ? styles["visible"] : ''}`}>投票ありがとうございます！</p>

        </div>
    )
}

export default VoteSection