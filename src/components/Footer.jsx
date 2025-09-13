import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <img src="/assets/logo.jpg" alt="S&L Feeds" className={styles.footerLogo} />
            <p className={styles.tagline}>
              Your trusted source for quality livestock feed in Lexington, NC
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Products</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#products">Horse Feed</a></li>
              <li><a href="#products">Cattle Feed</a></li>
              <li><a href="#products">Poultry Feed</a></li>
              <li><a href="#products">Small Animal</a></li>
              <li><a href="#products">Medications</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <p>Lexington, North Carolina</p>
            <p>Monday - Saturday</p>
            <a
              href="https://facebook.com/SandLfeeds"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebookLink}
            >
              Follow on Facebook
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} S&L Feeds. All rights reserved.</p>
          <p className={styles.disclaimer}>Prices subject to change. Tax included in all prices.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;