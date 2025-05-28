function Card() {
  return (
    <div className="shop-card">
      <img
        src="../public/card-placeholder.png"
        alt="product"
        className="card-image"
      />
      <div className="card-text" id="card">
        <h2>Product Name</h2>
        <p className="always-show-text">
          Short description
          <p className="hover-show-text">Extended description</p>
        </p>
      </div>
    </div>
  );
}

export default Card;
