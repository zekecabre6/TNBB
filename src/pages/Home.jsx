import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import MisDiseños from "../components/MisDiseños"; // Importación de "Mis Diseños"

function Home() {
  return (
    <div className="home">
      <h2 className="home-title" id="shoppy">Discover the Darkness</h2>
      <p>Esto es Hecho a Mano</p>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      {/* Sección de Mis Diseños */}
      <MisDiseños />
    </div>
  );
}

export default Home;
