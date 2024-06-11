import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return <div id="App">
    <Outlet/>
  </div>;
}

export default App;
