import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* left */}
        <div>
          <h2>Audiphile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
            reprehenderit cum enim rerum commodi soluta eligendi quod maxime
            impedit perferendis, dicta numquam, blanditiis esse maiores
            inventore temporibus quis fugit.
          </p>

          <p>Lorem ipsum dolor sit.</p>
        </div>

        {/* right */}
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products/headphones">Headphones</Link>
            <Link to="/products/speakers">speakers</Link>
            <Link to="/products/earphones">earphones</Link>
          </nav>
          <ul>
            <li>F</li>
            <li>T</li>
            <li>I</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
