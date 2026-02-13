import React from "react";
import SiteRoute from "../components/SiteRoute";
import { useSearchParams } from 'react-router-dom';
import { RecipeData, recipeMap } from '../data/ResipeData.jsx';
import styles from '../styles/Recipe.module.css';
import SubmitBtn from "../components/SubmitBtn.jsx";
import VoteSection from "../components/VoteSection.jsx";

function Recipe() {
  const [searchParams] = useSearchParams();
  const recipeTitle = searchParams.get('title');
  const recipe = recipeMap[recipeTitle];

  const shouldShowVoteSection = recipe && recipe.vote;

  return (
    <div className={styles["recipe"]}>
      <SiteRoute parentPage={recipe ? recipe.parentPage : "??"} childPage={recipe ? recipe.title : ""} />
      <div className={`${styles["recipe-container"]} container`}>
        <div className={styles["gradient-1"]}></div>
        <div className={styles["gradient-2"]}></div>
        <h1>{recipe.title}</h1>
        <div className={styles["pc-layout"]}>
          <div className={`${styles["dish-img"]} shadow`} style={{ backgroundImage: `url(${recipe.imgSrc})` }}></div>
          <div className={styles["pc-layout-inner"]}>
            <h2 className={styles["content"]}>{recipe.content}</h2>
            <p className={styles["time"]}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z" fill="#F8FAFB" />
            </svg>{recipe.time}</p>

          </div>

        </div>
        <div className={styles["ingredients-product-group"]}>
          <div className={styles["ingredients"]}>
            <h3>材料（二人分）</h3>
            <ul className="shadow">
              {recipe.ingredients.map((ingredients, index) => {
                const parts = ingredients.split(/[:：]/);
                if (parts.length >= 2) {
                  const title = parts[0].trim();
                  const description = parts.slice(1).join(':').trim();

                  return (
                    <li key={index}>
                      <span className="ingredients-title">
                        {title}
                      </span>
                      <span className="ingredients-description">
                        {description}
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={index}>
                    <span>{ingredients}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles["products"]}>
            <p className={styles["kikkoman-product"]}>使った和心食研商品</p>
            <h3 className={styles["kikkoman-product-name"]}>{recipe["kikkoman-product"]}</h3>
            <div className={`${styles["product-img"]} shadow`} style={{ backgroundImage: `url(${recipe.productImg})` }}></div>
          </div>
        </div>

        <h3 className={styles["step-title"]}>つくり方</h3>
        <ol className={`${styles["step-list"]} shadow`}>
          {recipe.step.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <h3 className={styles["familyMemory-title"]}>家族とのおいしい記憶</h3>
        <div className={styles["family-memory-section"]}>
          <div className={`${styles["family-img"]} shadow`} style={{ backgroundImage: `url(${recipe.familyImgSrc})` }}></div>
          <p className={styles["family-memory"]}>{recipe.familyMemory}</p>
        </div>
      </div>
      {shouldShowVoteSection && (
        <div className={`${styles["vote-section"]} container`}>
          <VoteSection recipeTitle={recipeTitle} />
        </div>
      )}
      <SubmitBtn />
    </div>
  );
};

export default Recipe;