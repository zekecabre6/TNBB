import React, { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const [selectedDesign, setSelectedDesign] = useState(product.designImages[0]);
  const [designLabel, setDesignLabel] = useState(product.colors[0]);

  // Cambiar la imagen del diseño cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDesign((prevDesign) => {
        const currentIndex = product.designImages.indexOf(prevDesign);
        const nextIndex = (currentIndex + 1) % product.designImages.length;
        return product.designImages[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [product.designImages]);

  // Cambiar el label del diseño según la imagen seleccionada
  useEffect(() => {
    const currentIndex = product.designImages.indexOf(selectedDesign);
    setDesignLabel(product.colors[currentIndex] || "Unknown"); // Si no hay un color definido
  }, [selectedDesign, product.designImages, product.colors]);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img
        src={selectedDesign}
        alt={`Design for ${product.name}`}
        className="product-image"
      />
      <p>{product.price}</p>
      <p className="design-label">{designLabel}</p>
    </div>
  );
};

export default ProductCard;
