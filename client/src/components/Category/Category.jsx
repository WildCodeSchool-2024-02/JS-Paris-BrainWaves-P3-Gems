import { useLoaderData } from "react-router-dom";
import "./category.css";

function Category() {

  const data = useLoaderData();

  return (
    <div className="all-containers">
   {data.map((category)=> <div key={category.id} className="category-container">
      <div
        style={{ backgroundImage: `url(${category.picture})` }}
        className="category-image"
      >
        <h1 className="category-title">{category.name}</h1>
        <h2 className="order-title">{category.details}</h2>
      </div>
    </div>) }
    </div>
  );
}

export default Category;
