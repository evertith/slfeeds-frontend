import styles from '../styles/Services.module.css';

const Services = () => {
  const services = [
    {
      icon: '🐴',
      title: 'Horse Feed',
      description: 'Premium quality feed for horses of all ages and activity levels. From working horses to senior care.',
      features: ['Tribute Feeds', 'Textured & Pellet Options', 'Performance Formulas']
    },
    {
      icon: '🐄',
      title: 'Cattle & Livestock',
      description: 'Complete nutrition solutions for cattle, goats, sheep, and other livestock.',
      features: ['Dairy Feed', 'Beef Pasture Minerals', 'Fly Control Tubs']
    },
    {
      icon: '🐓',
      title: 'Poultry Feed',
      description: 'Everything for your chickens, ducks, and gamebirds. From chicks to layers.',
      features: ['Layer Feed', 'Chick Starter', 'NON-GMO Options']
    },
    {
      icon: '🐰',
      title: 'Small Animal',
      description: 'Quality feed for rabbits and other small animals. Show quality available.',
      features: ['Rabbit Pellets', 'Show Rabbit Feed', 'Timothy Hay']
    },
    {
      icon: '💊',
      title: 'Health & Supplies',
      description: 'Wormers, medications, and other essential supplies for animal health.',
      features: ['Ivermectin', 'Fly Spray', 'Vitamins & Minerals']
    },
    {
      icon: '🌾',
      title: 'Grains & Seeds',
      description: 'Bulk grains, seeds, and specialty items. Custom orders available.',
      features: ['Whole Grains', 'Bird Seed', 'Beet Pulp']
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What We Offer</h2>
          <p className={styles.subtitle}>
            Comprehensive feed solutions for all your animals
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.specialNote}>
          <h3>Special Orders Welcome!</h3>
          <p>
            We are happy to order any special request and can price items prior to order.
            Many other items also available just in limited supplies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;