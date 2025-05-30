import PropTypes from "prop-types";

function Card(
  item,

  productName = "Placehodler name",
  descriptionShort = "Placeholder for short description",
  descriptionextended = "Placeholder for long description"
) {
  return (
    <div className="shop-card" id={item.id}>
      <img
        src={`${import.meta.env.BASE_URL}card-placeholder.png`}
        alt="product"
        className="card-image"
      />
      <div className="card-text">
        <div className="carousel-snapper"></div>
        <h2>{productName}</h2>
        <p className="always-show-text">{descriptionShort}</p>
        <p className="hover-show-text">{descriptionextended}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  productName: PropTypes.string,
  descriptionShort: PropTypes.string,
  descriptionextended: PropTypes.string,
};

export default Card;
