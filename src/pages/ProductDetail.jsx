import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.mainImage);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-container">
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
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <p className="product-price">{product.price}</p>
          {/* Si necesitas más información del producto, puedes agregarla aquí */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
