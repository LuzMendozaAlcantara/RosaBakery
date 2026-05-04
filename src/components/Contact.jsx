import React from 'react';
import { Camera, MessageCircle, MapPin, Phone } from 'lucide-react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoCol}>
          <h2 className={styles.title}>Rosa Bakery</h2>
          <p className={styles.description}>
            Haciendo tus momentos más dulces con recetas que pasan de generación en generación.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <Camera size={24} />
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        <div className={styles.contactCol}>
          <h3 className={styles.subtitle}>Contáctanos</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Phone size={20} className={styles.icon} />
              <span>2215066440</span>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={20} className={styles.icon} />
              <span>Calle 74, Berisso</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Rosa Bakery. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Contact;
