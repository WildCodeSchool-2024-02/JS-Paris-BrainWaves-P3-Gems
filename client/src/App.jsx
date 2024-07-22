import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastContext";

import Nav from "./components/Nav/Nav";

function App() {
  const { auth } = useAuth();

  return (
    <div id="App">
      <ToastProvider>
        <Nav />
        <Outlet context={auth} />
      </ToastProvider>
    </div>
  );
}

export default App;
