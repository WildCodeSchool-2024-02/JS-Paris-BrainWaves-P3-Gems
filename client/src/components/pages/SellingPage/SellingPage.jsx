import { useEffect, useRef, useState } from "react";
import "./SellingPage.css";
import background from "../../../assets/images/illustrations/flower1.jpg";
import ModalConfForm from "../../Modal/ModalConfForm/ModalConfForm";
import { useAuth } from "../../../contexts/AuthContext";

function SellingPage() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [IdCategory, setIdCategory] = useState(0);
  const [price, setPrice] = useState("");
  const pictureJewell = useRef();
  const pictureValidation = useRef();
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

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("picture_jewell", pictureJewell.current.files[0]);
    form.append("picture_validation", pictureValidation.current.files[0]);
    form.append("name", name);
    form.append("details", details);
    form.append("Id_category", IdCategory);
    form.append("price", price);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/product`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          body: form,
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
        setModalConfOpen(true);
        pictureJewell.current.value = "";
        pictureValidation.current.value = "";
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
          type="file"
          className="input-image"
          ref={pictureJewell}
          accept="image/png, image/jpeg, image/jpg"
        />
        <input
          type="file"
          className="input-image"
          placeholder="Ajouter une facture"
          ref={pictureValidation}
          accept="image/png, image/jpeg, image/jpg"
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
            {categories.map((category) => (
              <option
                key={category.id_category_list}
                value={category.Id_category_list}
              >
                {category.title}
              </option>
            ))}
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
        <div className="button-div">
          <button className="add-button" type="button" onClick={handleSubmit}>
            Ajouter
          </button>
        </div>
      </form>
      {modalConfOpen && <ModalConfForm setModalConfOpen={setModalConfOpen} />}
    </div>
  );
}

export default SellingPage;
