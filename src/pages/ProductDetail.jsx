import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-container">
        <div className="product-images">
          <div
            className="zoom-container"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
          >
            <img
              src={selectedImage}
              alt={`${product.name} main`}
              className="main-image"
            />
            {isZooming && (
              <div
                className="zoom-lens"
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            )}
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
