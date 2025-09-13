import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Visit Us Today</h2>
          <p className={styles.subtitle}>
            Stop by our store in Lexington, NC for all your feed needs
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.6!2d-80.267!3d35.732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1090+S+NC+Hwy+150+Lexington+NC!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S&L Feeds Location"
              ></iframe>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>📍 Location</h3>
              <p>1090 S. NC Hwy 150</p>
              <p>Lexington, NC 27292</p>
            </div>

            <div className={styles.infoCard}>
              <h3>📞 Contact</h3>
              <p><a href="tel:336-309-3165">(336) 309-3165</a></p>
              <p>Call for current prices and availability</p>
            </div>

            <div className={styles.infoCard}>
              <h3>🕐 Store Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 4:30 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className={styles.infoCard}>
              <h3>🌐 Connect With Us</h3>
              <a
                href="https://facebook.com/SandLfeeds"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h3>Have Questions?</h3>
          <p>We're here to help with all your livestock feed needs!</p>
          <div className={styles.ctaButtons}>
            <a href="https://facebook.com/SandLfeeds" className={styles.ctaButton}>
              Message Us on Facebook
            </a>
            <a href="mailto:contact@slfeeds.com" className={styles.ctaButton}>
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;