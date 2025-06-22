import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="errorpage">
      <h1 className="errorpage__title">404</h1>
      <p className="errorpage__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorpage__link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
