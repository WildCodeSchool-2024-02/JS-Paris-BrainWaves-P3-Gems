import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useMemo, useEffect } from "react";

import { useAuth } from "./AuthContext";

const LikeContext = createContext();

export function WishlistProvider({ children }) {
  const urlApi = import.meta.env.VITE_API_URL;

  const { auth } = useAuth();

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch(`${urlApi}/api/wishlist/get-wishlist`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth?.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch((error) => console.error(error));
  }, [urlApi, auth]);

  const contextValue = useMemo(
    () => {
      async function addToWishList(prod) {
        try {
          const response = await fetch(`${urlApi}/api/wishlist/like`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify({ Id_product: prod }),
          });
    
          if (response.ok) {
            setFavorites((prev) => [
              ...prev,
              { Id_product: prod, Id_user: auth?.user?.Id_user },
            ]);
            toast.success("Ajouté aux favoris", {
              position: "top-center",
              autoClose: 3000,
              draggable: true,
              theme: "dark",
              closeOnClick: true,
            });
            return response.json();
          }
          toast.error("Erreur lors de l'ajout aux favoris", {
            position: "top-center",
            autoClose: 3000,
            draggable: true,
            theme: "dark",
            closeOnClick: true,
          });
          return false;
        } catch (error) {
          console.error(error);
          return false;
        }
      }
    
      async function removeFromWishList(prod) {
        try {
          const response = await fetch(
            `${urlApi}/api/wishlist/remove/product/${prod}/user/`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
    
          if (response.ok) {
            setFavorites(
              favorites.filter(
                (fav) =>
                  fav.Id_product !== prod && fav.Id_user !== auth?.user?.Id_user
              )
            );
    
            toast.success("Retiré des favoris", {
              position: "top-center",
              autoClose: 3000,
              draggable: true,
              theme: "dark",
              closeOnClick: true,
            });
            return response.json();
          }
          toast.error("Erreur lors du retrait des favoris", {
            position: "top-center",
            autoClose: 3000,
            draggable: true,
            theme: "dark",
            closeOnClick: true,
          });
    
          return false;
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      
      return { favorites, addToWishList, removeFromWishList }
    },
    [favorites, urlApi, auth]
  );

  return (
    <LikeContext.Provider value={contextValue}>{children}</LikeContext.Provider>
  );
}

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useWishlist = () => useContext(LikeContext);
