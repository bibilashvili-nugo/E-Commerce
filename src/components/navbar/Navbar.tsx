import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          Audiophile
        </a>
        <nav className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Headphones</a>
          <a href="#">Speakers</a>
          <a href="#">Earphones</a>
        </nav>
        <button className="navbar-cart-btn">Cart</button>
      </div>
    </header>
  );
};

export default Navbar;
