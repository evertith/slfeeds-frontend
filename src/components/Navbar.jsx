import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img src="/assets/logo-cropped.png" alt="S&L Feeds" />
          </div>
          <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#products" onClick={closeMobileMenu}>Products</a></li>
            <li><a href="#pricing" onClick={closeMobileMenu}>Pricing</a></li>
            <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            <li className={styles.phoneNumber}>
              <a href="tel:336-309-3165">📞 (336) 309-3165</a>
            </li>
          </ul>
          <button className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;