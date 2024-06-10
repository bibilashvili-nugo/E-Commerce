import { useState } from "react";
import "./navbar.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
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
          <button onClick={() => setIsOpen(true)} className="navbar-cart-btn">
            Cart
          </button>
        </div>
      </header>

      <Modal
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
        className="card-modal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/checkout");
          }}
        >
          Back to home
        </button>
      </Modal>
    </>
  );
};

export default Navbar;
