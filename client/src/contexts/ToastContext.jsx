import { createContext, useContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import GemsToast from "../components/GemsToast/GemsToast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((type, message, timer, bg, col, logoColor) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, type, message, timer, bg, col, logoColor };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    setTimeout(() => {
      removeToast(id);
    }, timer);
  }, [removeToast]);

  const values = useMemo(() => ({
    addToast,
    removeToast,
  }), [addToast, removeToast]);

  return (
    <ToastContext.Provider value={values}>
      {children}
      {toasts.length > 0 && (
        <div className="toast-wrapper">
          {toasts.map((toast) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <GemsToast key={toast.id} {...toast} removeToast={removeToast} />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
