import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterCard1.css';


function FooterCard1({ link, imgSrc, title, description }) {
  return (
    <Link to={link}>
      <div className='card shadow'>
        <div
          className="card-top"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <button type='button' className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
            <path d="M15.1699 2.25L26.2441 13.3242L15.1699 24.3984M24.7061 13.3242H2.25" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg></button>
        </div>
        <div className="card-body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link >
  );
}

export default FooterCard1;
