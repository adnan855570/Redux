function Header(props) {
    console.warn('Header', props.data);
    return (
      <div>
        <div className="add-to-cart">
          <span className="cart">{props.data}</span>
          <img src="./public/cart.png" alt="" />
        </div>
       
      </div>
    );
  }
  
  export default Header;
  