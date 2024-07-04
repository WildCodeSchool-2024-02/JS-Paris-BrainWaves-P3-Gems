import { useLoaderData, useNavigate } from "react-router-dom";
import "./category.css";

function Category() {
  const cat = useLoaderData();
  const navigate = useNavigate();
  const port = import.meta.env.VITE_API_URL;

  const handleCategories = async (data) => {
    try {
      const response = await fetch(
        `${port}/api/product/product-by-category/${data.Id_category_list}`
      );
      const result = await response.json();
      if (response.ok) {
        navigate(`/items/${data.title}/${data.Id_category_list}`, { state: result });
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
            onClick={() => handleCategories(category)}
            onKeyDown={handleCategories}
            role="presentation"
            style={{ backgroundImage: `url(${category.picture})` }}
            className="category-image"
          >
            <h1 className="category-title">{category.title}</h1>
            <h2 className="order-title">{category.details}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
