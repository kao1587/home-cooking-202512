import React from 'react';
import styles from '../styles/RecipeCard.module.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ link, imgSrc, title, content, tag }) => {
    return (
        <Link to={link}>
            <div className={`${styles["recipe-card"]} shadow`}>
                <div className={styles["recipe-card-top"]} style={{ backgroundImage: `url(${imgSrc})` }}>
                    {tag && <span className={styles["recipe-tag"]}>投票する<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_1157_562)">
                            <path d="M13.3625 11.25L10.7833 13.83C10.5488 14.0644 10.4171 14.3823 10.417 14.7139C10.4169 15.0454 10.5485 15.3634 10.7829 15.5979C11.0173 15.8324 11.3352 15.9642 11.6668 15.9643C11.9983 15.9644 12.3163 15.8327 12.5508 15.5984L17.265 10.8842C17.3812 10.7681 17.4733 10.6303 17.5362 10.4786C17.599 10.3269 17.6314 10.1642 17.6314 10C17.6314 9.8358 17.599 9.67319 17.5362 9.52148C17.4733 9.36977 17.3812 9.23194 17.265 9.11586L12.5517 4.40169C12.4356 4.28558 12.2977 4.19347 12.146 4.13064C11.9943 4.0678 11.8317 4.03545 11.6675 4.03545C11.5033 4.03545 11.3407 4.0678 11.189 4.13064C11.0373 4.19347 10.8994 4.28558 10.7833 4.40169C10.6672 4.5178 10.5751 4.65564 10.5123 4.80735C10.4494 4.95905 10.4171 5.12165 10.4171 5.28586C10.4171 5.45006 10.4494 5.61266 10.5123 5.76436C10.5751 5.91607 10.6672 6.05391 10.7833 6.17002L13.3625 8.75002H3.75C3.41848 8.75002 3.10054 8.88172 2.86612 9.11614C2.6317 9.35056 2.5 9.6685 2.5 10C2.5 10.3315 2.6317 10.6495 2.86612 10.8839C3.10054 11.1183 3.41848 11.25 3.75 11.25H13.3625Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1157_562">
                                <rect width="20" height="20" fill="white" transform="matrix(0 -1 1 0 0 20)" />
                            </clipPath>
                        </defs>
                    </svg></span>}
                </div>
                <div className={styles["recipe-card-body"]}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </Link>
    )
};

export default RecipeCard;