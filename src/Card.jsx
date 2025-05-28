function Card(item) {
  return (
    <div className="shop-card" id={item.id}>
      <img
        src={`${import.meta.env.BASE_URL}card-placeholder.png`}
        alt="product"
        className="card-image"
      />
      <div className="card-text">
        <div className="carousel-snapper"></div>
        <h2>Product Name</h2>
        <p className="always-show-text">Short description</p>
        <p className="hover-show-text">Extended description</p>
      </div>
    </div>
  );
}

export default Card;
