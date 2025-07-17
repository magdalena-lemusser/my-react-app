import logo from "../assets/kasa-logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        <img src={logo} alt="Logo" className="header__logo" />
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
