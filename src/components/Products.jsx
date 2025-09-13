import { useState } from 'react';
import styles from '../styles/Products.module.css';
import { productCategories } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productCategories[activeCategory].items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Products</h2>
          <p className={styles.subtitle}>
            Wide selection of quality feed and supplies for all your livestock needs
          </p>
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.categories}>
          {productCategories.map((category, index) => (
            <button
              key={index}
              className={`${styles.categoryBtn} ${activeCategory === index ? styles.active : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              {product.detail && (
                <p className={styles.productDetail}>{product.detail}</p>
              )}
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * Prices are subject to change. Updated 09/01/2025. All prices are tax included.
        </p>
      </div>
    </section>
  );
};

export default Products;