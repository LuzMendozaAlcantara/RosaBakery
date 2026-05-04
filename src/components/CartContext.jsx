import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (producto) => {
    setCartItems(articulosPrevios => {
      const articuloExistente = articulosPrevios.find(item => item.id === producto.id);

      if (articuloExistente) {
        return articulosPrevios.map(item =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...articulosPrevios, { ...producto, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productoId) => {
    setCartItems(articulosPrevios =>
      articulosPrevios.filter(item => item.id !== productoId)
    );
  };

  const processCheckout = (total) => {
    let mensaje = "¡Hola Rosa Bakery! Quisiera hacer el siguiente pedido:%0A%0A";

    cartItems.forEach(item => {
      mensaje += `- ${item.quantity}x ${item.name} ($${item.price * item.quantity})%0A`;
    });

    mensaje += `%0A*Total: $${total}*`;
    window.open(`https://wa.me/2212202723?text=${mensaje}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        processCheckout
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
