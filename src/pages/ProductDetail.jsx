import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.mainImage); // Estado para la imagen seleccionada

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-images">
        <img
          src={selectedImage}
          alt={`${product.name} main`}
          className="main-image"
        />
        <div className="design-images">
          {product.designImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Design ${index + 1}`}
              className="design-image-rem"
              onClick={() => setSelectedImage(image)} // Cambiar la imagen principal al hacer clic
            />
          ))}
        </div>
      </div>
      <p>{product.price}</p>
      {/* <div className="product-colors">
        <h3>Available Colors:</h3>
        <div className="colors">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`color-btn ${color}`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
        <p>Selected Color: <strong>{selectedColor}</strong></p>
      </div> */}
      {/* <button className="add-to-cart">Add to Cart</button> */}
    </div>
  );
}

export default ProductDetail;
