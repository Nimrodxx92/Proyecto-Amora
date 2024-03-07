import PropTypes from "prop-types";

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
          <img className="lazy" src={urlPath + imagen} alt={nombre} />
        </div>
        <div className="layout__text">
          <h2 className="text-capitalize">{nombre}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </>
  );
};

AromasDescription.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
  }).isRequired,
};

export default AromasDescription;
