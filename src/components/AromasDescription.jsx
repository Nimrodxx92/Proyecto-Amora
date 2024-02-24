import React from "react";

const AromasDescription = ({ item }) => {
  const { id, nombre, descripcion, imagen } = item;
  const urlPath = "../src/assets/aromas/";

  return (
    <>
      <div
        className={
          id % 2 === 0
            ? "layout__container__center reverse-imagen"
            : "layout__container"
        }
      >
        <div>
          <img src={urlPath + imagen} alt={nombre} />
        </div>

        <div className="layout__text">
          <h2 className="text-capitalize">{nombre}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default AromasDescription;
