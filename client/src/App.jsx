import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { auth } = useAuth();

  return (
    <div id="App">
      <Nav />
      <Outlet context={{ auth }} />
    </div>
  );
}

export default App;
