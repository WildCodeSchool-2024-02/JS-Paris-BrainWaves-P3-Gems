import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav/Nav";

function App() {
  const [auth, setAuth] = useState();

  return (
    <div id="App">
      <Nav />
      <Outlet context={{auth, setAuth }} />
    </div>
  );
}

export default App;
