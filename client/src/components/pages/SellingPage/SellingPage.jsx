import { useState } from "react";
import "./SellingPage.css";
import background from "../../../assets/images/illustrations/flower1.jpg";

function SellingPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="sellingPage">
      <div className="input-image-div">
        <input className="input-image" placeholder="Ajouter une image" />
      </div>
      <form
        style={{ backgroundImage: `url(${background})` }}
        className="inputs-section"
      >
        <div className="input-div">
          <label htmlFor="title">Titre:</label>
          <input
            placeholder="Ex: Collier en argent et Saphir"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="description">Description:</label>
          <input
            placeholder="Ex: Marque, taille..."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="categories">Catégorie:</label>
          <select
            defaultValue={category}
            id="categories"
            name="selectedCategories"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">{null}</option>
            <option value="necklace">Collier</option>
            <option value="ring">Bague</option>
            <option value="earring">Boucles d'oreilles</option>
            <option value="bracelet">Bracelet</option>
            <option value="watch">Watch</option>
          </select>
        </div>
        <div className="input-div">
          <label htmlFor="price">Prix:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="button-div">
          <button type="submit" onClick={handleSubmit}>
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default SellingPage;
