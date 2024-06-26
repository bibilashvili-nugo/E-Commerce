import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Check Out</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
        className="checkout-modal"
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
            navigate("/");
          }}
        >
          Back to home
        </button>
      </Modal>
    </div>
  );
};

export default Checkout;
