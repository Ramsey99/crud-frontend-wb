'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Product = {
  title: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product | CartItem) => void;
  updateQuantity: (title: string, quantity: number) => void;
  removeFromCart: (title: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product | CartItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.title === product.title);
      if (existing) {
        return prev.map(p =>
          p.title === product.title
            ? { ...p, quantity: p.quantity + ('quantity' in product ? product.quantity : 1) }
            : p
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity: 'quantity' in product && typeof product.quantity === 'number' ? product.quantity : 1,
        },
      ];
    });
  };

  const updateQuantity = (title: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (title: string) => {
    setCart(prev => prev.filter(item => item.title !== title));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
