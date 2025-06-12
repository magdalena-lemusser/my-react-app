import logo from "../assets/kasa-logo.png"; //
import { Link } from "react-router-dom"; // Remplace les <a href>

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">
              Accueil
            </Link>
          </li>
          <li className="header__item">
            <Link to="/about" className="header__link">
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
