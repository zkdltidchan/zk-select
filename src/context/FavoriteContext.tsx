// contexts/FavoriteContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getFavorites, addToFavorites, removeFromFavorites, isFavorite } from '../services/favoriteService';

interface FavoritesContextProps {
  favorites: string[];
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = getFavorites();
    setFavorites(savedFavorites);
  }, []);

  const handleAddToFavorites = (productId: string) => {
    addToFavorites(productId);
    setFavorites(getFavorites());
  };

  const handleRemoveFromFavorites = (productId: string) => {
    removeFromFavorites(productId);
    setFavorites(getFavorites());
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites: handleAddToFavorites, removeFromFavorites: handleRemoveFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
