import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

import Nav from "./components/Nav/Nav";

function App() {


  const { auth } = useAuth();
  return (
    <div id="App">
      <Nav  />
      <Outlet context={ auth } />
    </div>
  );
}

export default App;
