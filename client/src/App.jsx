import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div id="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
