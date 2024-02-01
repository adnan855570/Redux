function Home(props) {
  console.warn("home", props.data);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="./public/65749.jpg" />
        </div>
        <div className="img-wrapper item">
          <span>IPhone</span>
          <span>Price : $1000</span>
        </div>
        <div className="img-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "IPhone X" })
            }
          >
            Add To Cart
          </button>
          <button className="remove-cart-button"
            onClick={() =>
              props.removeToCartHandler({ })
            }
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
