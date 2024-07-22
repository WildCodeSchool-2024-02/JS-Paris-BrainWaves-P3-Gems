import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
// import GemsToast from "./components/GemsToast/GemsToast";
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

      {/* <GemsToast type="error" message="fgegfh,gndfsdgfqs" col="red" timer={10000}/> */}
    </div>
  );
}

export default App;
