import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from './CartContext';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{product.name}</h4>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <button 
            className={styles.addBtn}
            onClick={() => addToCart(product)}
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <Plus size={20} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
