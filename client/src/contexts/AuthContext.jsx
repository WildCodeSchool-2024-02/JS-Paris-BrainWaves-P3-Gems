import { createContext, useState, useContext, useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAuth = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user/refresh`,
          { credentials: "include" }
        );
        if (response.ok) {
          const token = response.headers.get("Authorization");
          const user = await response.json();
          setAuth({ user, token });
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        toast.error("Une erreur est survenue");
        setIsLoading(false);
      }
    };
    getAuth();
  }, []);

  const value = useMemo(
    () => ({ auth, setAuth, isLoading }),
    [auth, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
