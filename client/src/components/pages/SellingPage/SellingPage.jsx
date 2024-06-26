import { useEffect, useState } from "react";
import "./SellingPage.css";
import background from "../../../assets/images/illustrations/flower1.jpg";
import ModalConfForm from "../../Modal/ModalConfForm/ModalConfForm";
import { useAuth } from "../../../contexts/AuthContext";

function SellingPage() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [IdCategory, setIdCategory] = useState(0);
  const [price, setPrice] = useState("");
  const [pictureJewell, setPictureJewell] = useState("");
  const [pictureValidation, setPictureValidation] = useState("");
  const [IdUser, setIdUser] = useState("");
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const { auth } = useAuth();
  const [modalConfOpen, setModalConfOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/category`
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error("Failed to fetch");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    if (name && details && IdCategory > 0 && price && pictureJewell && pictureValidation  && IdUser) 
    setModalConfOpen(true);
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/product`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            details,
            Id_category: IdCategory,
            price,
            picture_jewell: pictureJewell,
            picture_validation: pictureValidation,
            Id_user: IdUser,
          }),
        }
      );
      if (!response.ok) {
        const result = await response.json();
        setErrors(result.errors);
      } else {
        setErrors({});
        setName("");
        setDetails("");
        setIdCategory(0);
        setPrice("");
        setPictureJewell("");
        setPictureValidation("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="sellingPage">
      {errors && <p className="error-picture">{errors.picture}</p>}
      <div className="input-image-div">
        <input
          className="input-image"
          placeholder="Ajouter une photo"
          value={pictureJewell}
          onChange={(e) => setPictureJewell(e.target.value)}
        />
        <input
          className="input-image"
          placeholder="Ajouter une facture"
          value={pictureValidation}
          onChange={(e) => setPictureValidation(e.target.value)}
        />
      </div>
      {errors && <p className="error">{errors.all}</p>}
      <form
        style={{ backgroundImage: `url(${background})` }}
        className="inputs-section"
      >
        <div className="input-div">
          <label htmlFor="title">Titre:</label>
          <input
            placeholder="Ex: Collier en argent et Saphir"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors && <p className="error">{errors.name}</p>}
        </div>
        <div className="input-div">
          <label htmlFor="description">Description:</label>
          <input
            placeholder="Ex: Marque, taille..."
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          {errors && <p className="error">{errors.details}</p>}
        </div>
        <div className="input-div">
          <label htmlFor="categories">Catégorie:</label>
          <select
            defaultValue={IdCategory}
            id="categories"
            name="selectedCategories"
            onChange={(e) => setIdCategory(e.target.value)}
          >
            <option value="0">{null}</option>
            {categories.map((category) => <option key={category.id_category_list} value={category.Id_category_list}>{category.title}</option>)}
          </select>
        </div>
        <div className="input-div">
          <label htmlFor="price">Prix:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors && <p className="error">{errors.price}</p>}
        </div>
        <div className="input-div">
          <label htmlFor="id-user">Id-user :</label>
          <input
            type="number"
            value={IdUser}
            onChange={(e) => setIdUser(e.target.value)}
          />
        </div>
        <div className="button-div">
          <button className="add-button" type="submit" onClick={handleSubmit}>
            Ajouter
          </button>
        </div>
      </form>
      {modalConfOpen && (
        <ModalConfForm
          setModalConfOpen={setModalConfOpen}
        />
      )}
    </div>
  );
}

export default SellingPage;
