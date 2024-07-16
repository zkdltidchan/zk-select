import Cookies from 'js-cookie';
import { ProductApiResponse } from '../types/api/productTypes';

const CART_COOKIE = 'cart';

export const getCart = (): ProductApiResponse[] => {
  const cart = Cookies.get(CART_COOKIE);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product: ProductApiResponse): void => {
  const cart = getCart();
  cart.push(product);
  Cookies.set(CART_COOKIE, JSON.stringify(cart));
};

export const removeFromCart = (productId: string): void => {
  let cart = getCart();
  cart = cart.filter(product => product.id !== productId);
  Cookies.set(CART_COOKIE, JSON.stringify(cart));
};
