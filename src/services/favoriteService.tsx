import Cookies from 'js-cookie';

const FAVORITES_COOKIE = 'favorites';


export const getFavorites = (): string[] => {
  const favorites = Cookies.get(FAVORITES_COOKIE);
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (productId: string): void => {
  const favorites = getFavorites();
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    Cookies.set(FAVORITES_COOKIE, JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (productId: string): void => {
  let favorites = getFavorites();
  favorites = favorites.filter(id => id !== productId);
  Cookies.set(FAVORITES_COOKIE, JSON.stringify(favorites));
};

export const isFavorite = (productId: string): boolean => {
  const favorites = getFavorites();
  return favorites.includes(productId);
};
