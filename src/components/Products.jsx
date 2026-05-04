import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/Products.module.css';

const PRODUCTOS_DATA = [
  {
    id: 1,
    name: 'Pie de limón',
    description: 'Base crocante, crema de limón suave y fresca, coronado con un merengue irresistible',
    price: 32000,
    image: "/images/pielimon.jpeg",
  },
  {
    id: 2,
    name: 'Cheesecake de Frutos Rojos',
    description: 'Clásico cheesecake estilo NY con salsa de frutos rojos.',
    price: 40000,
    image: "/images/cheesecake-rojos.jpeg",
  },
  {
    id: 3,
    name: 'Selva Negra',
    description: 'Bizcochuelo de chocolate húmedo, capas de crema suave y cerezas, cubierto con chocolate intenso. Un clásico irresistible que enamora en cada bocado.',
    price: 35000,
    image: "/images/selva-negra.jpeg",
  },
  {
    id: 4,
    name: 'Tarta Frutal',
    description: 'Base crocante, relleno de crema pastelera suave y cremosa, cubierta con frutillas y kiwis frescos.',
    price: 25000,
    image: "/images/pastelera-frutal.jpeg",
  },
  {
    id: 5,
    name: 'Marquise de Chocolate',
    description: 'Marquise de chocolate intensa y bien cremosa, con base húmeda y sabor profundo a cacao. Ideal para los amantes del chocolate.',
    price: 30000,
    image: "/images/marquise-principal.jpeg"
  },
  {
    id: 6,
    name: 'Torta invertida de anana',
    description: 'Bizcochuelo suave y esponjoso con rodajas de ananá caramelizadas, doradas y jugosas. Dulce, fresca y llena de sabor.',
    price: 28000,
    image: "/images/torta-anana.jpeg",
  }
];

const Products = ({ onAddToCart }) => {
  return (
    <section id="productos" className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>Nuestra Especialidad</h3>
          <h2 className={styles.title}>Postres que Enamoran</h2>
        </div>

        <div className={styles.grid}>
          {PRODUCTOS_DATA.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
