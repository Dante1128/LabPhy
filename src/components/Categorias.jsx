import { useNavigate } from "react-router-dom";

import "./categorias.css";

const categorias = [
  { name: "Categoría 1", route: "categoria-1" },
  { name: "Categoría 2", route: "categoria-2" },
  { name: "Categoría 3", route: "categoria-3" },
];

const Categorias = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (route) => {
    navigate(`/lab-items/${route}`);  
  };

  return (
    <div>
      <h2>Categorías</h2>
      <div className="categories-container">
        {categorias.map((cat) => (
          <button
            key={cat.route}
            onClick={() => handleCategoryClick(cat.route)}
            className="category-button"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categorias;