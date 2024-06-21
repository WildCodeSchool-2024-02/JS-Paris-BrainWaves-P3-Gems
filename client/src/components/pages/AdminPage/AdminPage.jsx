import "./AdminPage.css";
import { GiDiamondRing } from "react-icons/gi";
import { useEffect, useState } from "react";

function AdminPage() {
  const [infoUser, setInfoUser] = useState("");
  const [productsToValidate, setProductsToValidate] = useState([]);

  const handleValidate = async(IdProduct) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/product/validate/${IdProduct}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
      })
      
      const filteredProduct = productsToValidate.filter(
        (product) => product.Id_product !== IdProduct
      );
      setProductsToValidate(filteredProduct)
    } catch (error) {
      console.error("Error validating product:", error);
    }
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/3`)
      .then((response) => response.json())
      .then((data) => setInfoUser(data))
      .catch((error) => console.error("Error:", error));

    fetch(`${import.meta.env.VITE_API_URL}/api/product/product-to-validate`)
      .then((response) => response.json())
      .then((data) => setProductsToValidate(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const firstName = capitalizeFirstLetter(infoUser.firstname);
  const lastName = capitalizeFirstLetter(infoUser.lastname);

  return (
    <div id="AdminPage">
      <div className="background-image">
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="admin-profile">
          <GiDiamondRing className="ring-profile" />
          <p>Articles à valider</p>
        </div>
        <div className="articles-displayed-container">
          {productsToValidate.length > 0 &&
            productsToValidate[0].map((product, index) => (
              <div key={product.Id_product}>
                <p className="index">{index+1}</p>
                <div className="admin-all-details">
                  <div className="admin-images">
                    <img src={product.picture_jewell} alt={product.name} />
                    <img src={product.picture_validation} alt={product.name} />
                  </div>
                  <div className="admin-name-details-price">
                    <p className="admin-title">Titre: </p>
                    <p> {product.name}</p>
                    <p className="admin-title">Description: </p>
                    <p> {product.details}</p>
                    <p className="admin-title">Prix: </p>
                    <p> {product.price}€</p>
                  </div>
                </div>
                <div className="buttons">
                  <button type="button">Supprimer</button>
                  <button type="button" onClick={() => handleValidate(product.Id_product)}>Valider</button>
                </div>
              </div>
            ))}
       {productsToValidate[0] && productsToValidate[0].length === 0 && <p>Plus de produit à valider</p>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
