import React from 'react';
import { ChefHat, ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { cartItems, setIsCartOpen } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <ChefHat className={styles.logoIcon} size={32} />
          <h1 className={styles.logoText}>Rosa Bakery</h1>
        </div>

        <nav className={styles.nav}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
          <a href="#quienes-somos" className={styles.navLink}>Quiénes Somos</a>
          <a href="#productos" className={styles.navLink}>Productos</a>
          <a href="#contacto" className={styles.navLink}>Contacto</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.cartBtn} onClick={() => setIsCartOpen(true)} aria-label="Abrir carrito">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
