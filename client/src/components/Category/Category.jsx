import { useLoaderData, useNavigate } from "react-router-dom";
import "./category.css";

function Category() {
  const cat = useLoaderData();
  const navigate = useNavigate();
  const port = import.meta.env.VITE_API_URL;

  const handleCategories = async (id) => {
    try {
      const response = await fetch(
        `${port}/api/product/product-by-category/${id}`
      );
      const data = await response.json();
      if (response.ok) {
        navigate(`/items/${id}`, { state: data });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="all-containers">
      {cat.map((category) => (
        <div key={category.Id_category_list} className="category-container">
          <div
            onClick={() => handleCategories(category.Id_category_list)}
            onKeyDown={handleCategories}
            role="presentation"
            style={{ backgroundImage: `url(${category.picture})` }}
            className="category-image"
          >
            <h1 className="category-title">{category.name}</h1>
            <h2 className="order-title">{category.details}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
