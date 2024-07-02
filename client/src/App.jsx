import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div id="App">
      <Nav setFavorite={setFavorites} favorite={favorites} />
      <Outlet context={{ favorites, setFavorites }} />
    </div>
  );
}

export default App;
