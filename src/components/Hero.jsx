import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Hecho con amor</span>
          <h2 className={styles.title}>El sabor de la dulzura en cada bocado</h2>
          <p className={styles.subtitle}>
            En Rosa Bakery, cada postre cuenta una historia. Disfruta de nuestras creaciones artesanales hechas con ingredientes de primera calidad y mucho amor.
          </p>
          <div className={styles.buttons}>
            <a href="#productos" className={styles.primaryBtn}>Ver Productos</a>
            <a href="#quienes-somos" className={styles.secondaryBtn}>Nuestra Historia</a>
          </div>
          </div>
        <div className={styles.imageContainer}>
          <img
            src="/images/marquise-principal.jpeg"
            alt="Torta deliciosa de Rosa Bakery"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
