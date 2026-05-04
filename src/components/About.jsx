import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="quienes-somos" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img
            src="/images/rosa-pasteleria.jpeg"
            alt="Rosa preparando un pastel"
            className={styles.image}
          />
          <div className={styles.decoration1}></div>
        </div>
        <div className={styles.textCol}>
          <h3 className={styles.sectionSubtitle}>Nuestra Historia</h3>
          <h2 className={styles.sectionTitle}>Conoce a Rosa</h2>
          <p className={styles.text}>
            Todo comenzó en la cocina de casa. Rosa siempre tuvo una pasión inigualable por mezclar harina, azúcar y mucho amor para crear momentos inolvidables en familia.
          </p>
          <p className={styles.text}>
            Hoy, <strong>Rosa Bakery</strong> es la materialización de ese sueño. Cada pastel, tarta y galleta está elaborada de forma artesanal, cuidando cada detalle para que al probarlos, sientas el abrazo cálido de casa.
          </p>
          <p className={styles.text}>
            Nuestra misión es endulzar tus celebraciones y hacer que cada día sea un poco más especial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
