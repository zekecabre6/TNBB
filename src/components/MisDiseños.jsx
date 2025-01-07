import React, { useState, useEffect } from "react";
import { designs } from "../data/designs"; // Ruta del archivo JSON
import Modal from "./Modal"; // Importamos el Modal

const MisDiseños = () => {
  const [selectedDesign, setSelectedDesign] = useState(designs[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    designs.map(() => 0) // Inicializamos un índice por diseño
  );

  const openModal = (design) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Lógica de cambio de imagen automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) =>
        prevIndexes.map((index, designIdx) => {
          const nextIndex = (index + 1) % designs[designIdx].images.length;
          return nextIndex;
        })
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="mis-disenos-section">
      <h2>Mis Diseños</h2>
      <div className="designs-grid">
        {designs.map((design, designIdx) => (
          <div
            key={design.id}
            className="design-card"
            onClick={() => openModal(design)} // Abrimos el modal con el diseño seleccionado
          >
            <h3>{design.name}</h3>
            <img
              src={design.images[currentImageIndexes[designIdx]]} // Mostramos la imagen correspondiente
              alt={`${design.name} - Diseño ${currentImageIndexes[designIdx] + 1}`}
              className="design-image"
            />
            <p>{design.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          selectedDesign={selectedDesign}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MisDiseños;
