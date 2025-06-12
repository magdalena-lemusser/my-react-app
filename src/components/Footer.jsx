import logo from "../assets/kasa-logo.png"; //

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer__logo" />
      <nav className="footer__nav">
        <ul className="footer__list">
          <li>© 2020 Kasa. All rights reserved</li>
        </ul>
      </nav>
    </footer>
  );
}
