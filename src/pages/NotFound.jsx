import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <section className="errorpage">
      <h1 className="errorpage__title">404</h1>
      <p className="errorpage__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p className="errorpage__text">{error.statusText || error.message}</p>
      <Link to="/" className="errorpage__link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
