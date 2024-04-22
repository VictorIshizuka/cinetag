import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favorite";

export const FavoriteProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ isFavorite, setIsFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export function useFavoriteContext() {
  const { isFavorite, setIsFavorite } = useContext(FavoriteContext);

  function addFavorite(newFavorite) {
    const repeatFavorite = isFavorite.some(item => item.id === newFavorite.id);

    let newList = [...isFavorite];

    if (!repeatFavorite) {
      newList.push(newFavorite);
      return setIsFavorite(newList);
    }

    newList.splice(newList.indexOf(newFavorite), 1);
    return setIsFavorite(newList);
  }
  return {
    isFavorite,
    addFavorite,
  };
}
