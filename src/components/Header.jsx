import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import HomecookingBlogLogo from '../assets/homecook_tsushin_icon_logo.png';
import mailIcon from '../assets/material-symbols_mail.svg';
import cookIcon from '../assets/fluent_spatula-spoon-16-filled.svg';
import cookHatIcon from '../assets/mdi_cook.svg';
import { Link } from 'react-router-dom';
import usePageScroll from '../hooks/usePageScroll';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const scrollDirection = usePageScroll();

  const headerClass = `
    header-base 
    ${scrollDirection === 'down' ? 'header-hide' : 'header-show'}
  `;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const openLinkInNewTab = () => {
    window.open("#", '_blank', 'noopener,noreferrer');
  }

  return (
    <div>
      {/* smartphone */}
      <header className={`${headerClass}container smartphone`} ref={menuRef}>
        <div className="header-logo-btngroup">
          <h1><Link to="/" onClick={closeMenu}><img src={HomecookingBlogLogo} alt="Kikkoman" /></Link></h1>
          <button className={`hamburger-btn ${isMenuOpen ? 'close' : ''}`} type='button' onClick={toggleMenu}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'visible' : 'invisible'}`}>
          <ul>
            <li><Link to="/jitanrecipe" onClick={toggleMenu}><img src={cookIcon} alt="みんなの時短料理レシピアイコン" />みんなの時短料理レシピ</Link></li>
            <li><Link to="/jitanrecipeSubmit" onClick={toggleMenu}><img src={cookHatIcon} alt="先月投稿レシピ一覧・投稿募集アイコン" />先月投稿レシピ一覧・投稿募集</Link></li>
            <li><button className='contact-btn button' type='button' onClick={openLinkInNewTab}><img src={mailIcon} alt="mail icon" />お問い合わせ</button></li>
          </ul>
        </nav>
        {isMenuOpen && <div onClick={toggleMenu}></div>}
      </header>
      {/* pc tablet */}
      <header className='container normal'>
        <h1><Link to="/"><img src={HomecookingBlogLogo} alt="Kikkoman" /></Link></h1>
        <nav>
          <ul>
            <li><Link to="/jitanrecipe" onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6.20249 14.943L3.78149 17.2575L3.76949 17.2695C3.51508 17.5107 3.31158 17.8005 3.17099 18.1216C3.03039 18.4428 2.95556 18.7889 2.9509 19.1394C2.94624 19.49 3.01186 19.8379 3.14387 20.1627C3.27588 20.4875 3.47161 20.7826 3.71951 21.0305C3.96742 21.2784 4.26247 21.4741 4.58726 21.6061C4.91205 21.7381 5.25999 21.8037 5.61055 21.7991C5.9611 21.7944 6.30718 21.7196 6.62834 21.579C6.94951 21.4384 7.23926 21.2349 7.48049 20.9805L7.49249 20.9685L10.794 17.514L8.50949 15.003H6.92999C6.68576 15.0028 6.44196 14.9827 6.20099 14.943M16.827 11.604C17.1134 11.4951 17.4078 11.4084 17.7075 11.3445C19.2975 10.9995 20.9925 10.1145 21.9255 9.1815C22.3489 8.76484 22.6856 8.26847 22.9162 7.72103C23.1468 7.17359 23.2668 6.58591 23.2691 5.99188C23.2715 5.39785 23.1562 4.80924 22.9299 4.25999C22.7036 3.71074 22.3708 3.21173 21.9507 2.79173C21.5307 2.37174 21.0316 2.03907 20.4823 1.81293C19.933 1.58679 19.3443 1.47164 18.7503 1.47413C18.1563 1.47661 17.5686 1.59669 17.0212 1.82743C16.4738 2.05817 15.9775 2.395 15.561 2.8185C14.886 3.4935 14.235 4.572 13.7955 5.7195C14.0932 6.3318 14.2481 7.00366 14.2485 7.6845V9.2565L16.827 11.604ZM16.5 5.625C16.6989 5.625 16.8897 5.70402 17.0303 5.84467C17.171 5.98532 17.25 6.17609 17.25 6.375C17.25 6.996 17.754 7.5 18.375 7.5C18.5739 7.5 18.7647 7.57902 18.9053 7.71967C19.046 7.86032 19.125 8.05109 19.125 8.25C19.125 8.44891 19.046 8.63968 18.9053 8.78033C18.7647 8.92098 18.5739 9 18.375 9C17.6788 9 17.0111 8.72344 16.5188 8.23115C16.0265 7.73887 15.75 7.07119 15.75 6.375C15.75 6.17609 15.829 5.98532 15.9697 5.84467C16.1103 5.70402 16.3011 5.625 16.5 5.625ZM4.44599 2.382C4.72458 2.1033 5.05535 1.88221 5.41941 1.73137C5.78346 1.58053 6.17367 1.50289 6.56774 1.50289C6.96181 1.50289 7.35201 1.58053 7.71607 1.73137C8.08012 1.88221 8.4109 2.1033 8.68949 2.382L11.871 5.562C12.1499 5.84087 12.3712 6.17201 12.522 6.53647C12.6728 6.90093 12.7503 7.29156 12.75 7.686V9.5895C12.7499 9.69393 12.7715 9.79725 12.8136 9.89282C12.8557 9.98839 12.9173 10.0741 12.9945 10.1445L20.109 16.6185L20.121 16.6305C20.4075 16.9072 20.6361 17.2383 20.7933 17.6043C20.9505 17.9703 21.0333 18.364 21.0367 18.7623C21.0402 19.1606 20.9643 19.5557 20.8135 19.9244C20.6626 20.2931 20.4398 20.628 20.1582 20.9097C19.8765 21.1914 19.5415 21.4141 19.1728 21.565C18.8042 21.7158 18.4091 21.7917 18.0108 21.7883C17.6124 21.7848 17.2188 21.702 16.8528 21.5448C16.4868 21.3876 16.1557 21.159 15.879 20.8725L15.867 20.8605L9.39599 13.7505C9.32573 13.6731 9.24007 13.6112 9.14449 13.5688C9.04891 13.5265 8.94553 13.5046 8.84099 13.5045H6.92999C6.1344 13.5043 5.37147 13.1881 4.80899 12.6255L1.62899 9.4425C1.35028 9.16391 1.1292 8.83314 0.978356 8.46908C0.827515 8.10502 0.749878 7.71482 0.749878 7.32075C0.749878 6.92668 0.827515 6.53647 0.978356 6.17242C1.1292 5.80836 1.35028 5.47759 1.62899 5.199L4.44599 2.382ZM5.03099 6.969C4.89016 6.82817 4.69915 6.74905 4.49999 6.74905C4.30082 6.74905 4.10982 6.82817 3.96899 6.969C3.82816 7.10983 3.74904 7.30084 3.74904 7.5C3.74904 7.69916 3.82816 7.89017 3.96899 8.031L6.21899 10.281C6.28872 10.3507 6.3715 10.406 6.46261 10.4438C6.55372 10.4815 6.65137 10.5009 6.74999 10.5009C6.8486 10.5009 6.94625 10.4815 7.03736 10.4438C7.12847 10.406 7.21126 10.3507 7.28099 10.281C7.35072 10.2113 7.40603 10.1285 7.44377 10.0374C7.48151 9.94627 7.50094 9.84862 7.50094 9.75C7.50094 9.65138 7.48151 9.55373 7.44377 9.46262C7.40603 9.37152 7.35072 9.28873 7.28099 9.219L5.03099 6.969ZM6.21899 4.719C6.14914 4.78867 6.09373 4.87143 6.05592 4.96255C6.01811 5.05367 5.99865 5.15135 5.99865 5.25C5.99865 5.34865 6.01811 5.44633 6.05592 5.53745C6.09373 5.62857 6.14914 5.71133 6.21899 5.781L8.46899 8.031C8.60982 8.17183 8.80082 8.25095 8.99999 8.25095C9.19915 8.25095 9.39016 8.17183 9.53099 8.031C9.67182 7.89017 9.75093 7.69916 9.75093 7.5C9.75093 7.30084 9.67182 7.10983 9.53099 6.969L7.28099 4.719C7.21132 4.64916 7.12856 4.59374 7.03744 4.55593C6.94632 4.51812 6.84864 4.49866 6.74999 4.49866C6.65134 4.49866 6.55365 4.51812 6.46254 4.55593C6.37142 4.59374 6.28866 4.64916 6.21899 4.719Z" />
            </svg>みんなの<wbr />時短料理レシピ</Link></li>
            <li><Link to="/jitanrecipeSubmit" onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.5 1.5C10.73 1.5 9.17 2.67 8.67 4.37C8.14 4.13 7.58 4 7 4C5.93913 4 4.92172 4.42143 4.17157 5.17157C3.42143 5.92172 3 6.93913 3 8C3.00237 8.88584 3.29799 9.74596 3.84072 10.4461C4.38344 11.1462 5.14272 11.6469 6 11.87V19H19V11.87C20.76 11.41 22 9.82 22 8C22 6.93913 21.5786 5.92172 20.8284 5.17157C20.0783 4.42143 19.0609 4 18 4C17.42 4 16.86 4.13 16.33 4.37C15.83 2.67 14.27 1.5 12.5 1.5ZM12 10.5H13V17.5H12V10.5ZM9 12.5H10V17.5H9V12.5ZM15 12.5H16V17.5H15V12.5ZM6 20V21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H18C18.2652 22 18.5196 21.8946 18.7071 21.7071C18.8946 21.5196 19 21.2652 19 21V20H6Z" />
            </svg>先月投稿<wbr />レシピ一覧・<wbr />投稿募集</Link></li>
            <li><a href="#" target='_blank'><button className='contact-btn button' type='button'><img src={mailIcon} alt="mail icon" /><span className='tablet-invisible'>お問い合わせ</span></button></a></li>
          </ul>
        </nav>

      </header>
    </div>

  );
}

export default Header;