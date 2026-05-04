import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Menu.module.css';

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
      navigate(path); 
      setIsMenuOpen(false); 
  };


  return (
    <>
      <button type="button" className={styles.menuButton} onClick={toggleMenu}>
        <MoreVertIcon/>
      </button>
      {isMenuOpen && (
        <nav ref={menuRef} className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.list}>
            <li className={styles.link}>
              <button onClick={() => handleLinkClick('/')} className={styles.navLink}>
                Home
              </button>
              <button onClick={() => handleLinkClick('/guests')} className={styles.navLink}>
                Invitati
              </button>
              <button onClick={() => handleLinkClick('/maids')} className={styles.navLink}>
                BrideMaids
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;