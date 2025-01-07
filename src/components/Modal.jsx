import React, { useState } from "react";

const Modal = ({ selectedDesign, closeModal }) => {
  const [selectedImage, setSelectedImage] = useState(selectedDesign.images[0]);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{selectedDesign.name}</h3>
        <div className="modal-images">
          <img
            src={selectedImage}
            alt={`${selectedDesign.name}`}
            className="modal-image"
          />
        </div>
        <div className="image-selector">
          {selectedDesign.images.map((image, index) => (
            <button
              key={index}
              className="image-selector-btn"
              onClick={() => handleImageChange(image)}
            >
              {`Modelo ${index + 1}`}
            </button>
          ))}
        </div>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
