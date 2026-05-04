import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from './CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    processCheckout
  } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {isCartOpen && <div className={styles.overlay} onClick={() => setIsCartOpen(false)}></div>}

      <div className={`${styles.cartPanel} ${isCartOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>Tu Pedido</h2>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>No tienes postres en el carrito todavía.</p>
              <button className={styles.continueBtn} onClick={() => setIsCartOpen(false)}>
                Ver productos
              </button>
            </div>
          ) : (
            <ul className={styles.itemList}>
              {cartItems.map(item => (
                <li key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemInfo}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <p className={styles.itemPrice}>${item.price} x {item.quantity}</p>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Eliminar producto"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span>Total:</span>
              <span className={styles.totalPrice}>${total}</span>
            </div>
            <button className={styles.checkoutBtn} onClick={() => processCheckout(total)}>
              Comprar por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
