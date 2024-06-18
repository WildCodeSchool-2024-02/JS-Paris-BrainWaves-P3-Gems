import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

const OnlineContext = createContext();

export function OnlineProvider({ children }) {
  const [isOnline, setIsOnline] = useState(true);

  const contextValue = useMemo(
    () => ({
      isOnline,
      setIsOnline,
    }),
    [isOnline, setIsOnline]
  );

  return (
    <OnlineContext.Provider value={contextValue}>
      {children}
    </OnlineContext.Provider>
  );
}

OnlineProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export const useIsOnline = () => useContext(OnlineContext);
