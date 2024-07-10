import "./AdminPage.css";
import { GiDiamondRing } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

function AdminPage() {
  const [ setInfoUser ] = useState("");
  const [productsToValidate, setProductsToValidate] = useState([]);
  const [widerImageId, setWiderImageId] = useState();
  const [widerImage, setWiderImage] = useState(false);
  const { auth } = useAuth();

  const handleValidate = async (IdProduct) => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/product/validate/${IdProduct}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,   
          },
        }
      );

      const filteredProduct = productsToValidate.filter(
        (product) => product.Id_product !== IdProduct
      );
      setProductsToValidate(filteredProduct);
    } catch (error) {
      console.error("Error validating product:", error);
    }
  };

  const handleDelete = async (IdProduct) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/product/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({
          Id_product: IdProduct,
        }),
      });

      const filteredData = productsToValidate.filter(
        (product) => product.Id_product !== IdProduct
      );
      setProductsToValidate(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWideImage = (IdProduct) => {
    setWiderImageId(IdProduct);
    setWiderImage(!widerImage);

  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));

    fetch(`${import.meta.env.VITE_API_URL}/api/product/product-to-validate`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProductsToValidate(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [auth.token, setInfoUser]);

  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const firstName = capitalizeFirstLetter(auth?.user?.firstname);
  const lastName = capitalizeFirstLetter(auth?.user?.lastname);

  return (
    <div id="AdminPage">
      <div className="background-image">
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="articles-displayed-container">
        <div className="admin-profile">
          <GiDiamondRing className="ring-profile" />
          <p>Articles à valider</p>
        </div>
          {productsToValidate.length > 0 &&
            productsToValidate.map((product, index) => (
              <div key={product.Id_product}>
                <p className="index">{index + 1}</p>
                <div className="admin-all-details">
                  <div className="admin-images">
                    <img
                      onClick={() => handleWideImage(product.Id_product)}
                      onKeyDown={() =>handleWideImage(product.Id_product)}
                      role="presentation"
                      src={product.picture_jewell}
                      alt={product.name}
                      className={
                        product.Id_product === widerImageId && widerImage
                          ? "wider"
                          : ""
                      }
                    />
                    <img
                      onClick={() =>handleWideImage(product.Id_product)}
                      onKeyDown={() =>handleWideImage(product.Id_product)}
                      role="presentation"
                      src={product.picture_validation}
                      alt={product.name}
                      className={
                        product.Id_product === widerImageId && widerImage
                          ? "wider"
                          : ""
                      }
                    />
                  </div>
                  <div className="admin-name-details-price">
                    <p className="admin-title">Titre: </p>
                    <p> {product.name}</p>
                    <p className="admin-title">Description: </p>
                    <p> {product.details}</p>
                    <p className="admin-title">Prix: </p>
                    <p> {product.price}€</p>
                    <p className="admin-title">Catégorie: </p>
                    <p> {product.title}</p>
                    <p className="admin-title">Vendeur: </p>
                    <p>
                      {" "}
                      {product.firstname} {product.lastname}
                    </p>
                  </div>
                </div>
                <div className="buttons">
                  <button
                    type="button"
                    onClick={() => handleDelete(product.Id_product)}
                  >
                    Supprimer
                  </button>
                  <button
                    type="button"
                    onClick={() => handleValidate(product.Id_product)}
                  >
                    Valider
                  </button>
                </div>
              </div>
            ))}
          {productsToValidate.length === 0 && <p>Plus de produit à valider</p>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
