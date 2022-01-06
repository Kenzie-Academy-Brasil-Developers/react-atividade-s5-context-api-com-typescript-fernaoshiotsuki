import { createContext, ReactNode, useState } from "react";

interface CartProps {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
interface CartProviderData {
  cart: Product[];
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addItem = (item: Product) => {
    setCart([...cart, item]);
  };

  const removeItem = (item: Product) => {
    const updatedCart = cart.filter((cartItem) => {
      return cartItem.title !== item.title;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, cart }}>
      {children}
    </CartContext.Provider>
  );
};
