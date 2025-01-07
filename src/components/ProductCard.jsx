import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [selectedDesign, setSelectedDesign] = useState(product.designImages[0]);
  const [designLabel, setDesignLabel] = useState("Blanco");

  // Función para cambiar la imagen del diseño y su etiqueta cada 3 segundos
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDesign((prevDesign) => {
        const currentIndex = product.designImages.indexOf(prevDesign);
        const nextIndex = (currentIndex + 1) % product.designImages.length;
        return product.designImages[nextIndex];
      });
    }, 3000); // Cambia la imagen cada 3 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [product.designImages]);

  // Cambiar el label de la imagen de acuerdo al diseño seleccionado
  React.useEffect(() => {
    const currentIndex = product.designImages.indexOf(selectedDesign);
    if (currentIndex === 0) {
      setDesignLabel("Blanco");
    } else if (currentIndex === 1) {
      setDesignLabel("Negro");
    } else {
      setDesignLabel("Crema");
    }
  }, [selectedDesign, product.designImages]);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img
        src={selectedDesign}
        alt={`Design for ${product.name}`}
        className="product-image"
      />
      <p>¿{product.price}?</p>
      <p className="design-label">{designLabel}</p>
    </div>
  );
};

export default ProductCard;
