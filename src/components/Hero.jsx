import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Quality Feed for Your<br />
            <span className={styles.highlight}>Livestock</span>
          </h1>
          <p className={styles.subtitle}>
            From rabbits to horses and everything in between. Wide range of products at great prices.
            Located in Lexington, NC.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#products" className={styles.primaryBtn}>View Products</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Us</a>
          </div>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.heroImage}>
            <img src="/assets/logo.jpg" alt="S&L Feeds" />
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>Wide Selection</h3>
          <p>Feed for all livestock types</p>
        </div>
        <div className={styles.feature}>
          <h3>Great Prices</h3>
          <p>Competitive pricing on all products</p>
        </div>
        <div className={styles.feature}>
          <h3>Quality Products</h3>
          <p>Trusted brands and suppliers</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;