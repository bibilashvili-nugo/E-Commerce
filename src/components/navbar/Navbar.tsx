import { useState } from "react";
import "./navbar.css";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./signIn";
import MuiModals from "./MuiModal";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            Audiophile
          </Link>

          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/headphones">Headphones</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/earphones">Earphones</Link>
          </nav>

          <div className="login-page">
            <div onClick={() => setClick(1)}>
              <SignIn text="Log In" className="log-in" setOpen={setOpen} />
            </div>
            <div onClick={() => setClick(2)}>
              <SignIn text="Sign Up" className="sign-up" setOpen={setOpen} />
            </div>

            {click === 1 ? (
              <MuiModals
                open={open}
                setOpen={setOpen}
                text="Log In"
                click={click}
              />
            ) : (
              <MuiModals
                open={open}
                setOpen={setOpen}
                text="Sign Up"
                click={click}
              />
            )}

            {/* თუ მომხმარებელი წარმატებით შევა მაშინ უნდა გამოჩნდეს */}
            {/* <button onClick={() => setIsOpen(true)} className="navbar-cart-btn">
              <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                  fill="#fff"
                  fill-rule="nonzero"
                />
              </svg>
            </button> */}
            {/* ეს ფიჩერი კარტის აიქონია */}
          </div>
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
