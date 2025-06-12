import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oups !</h1>
      <p>Cette page n'existe pas</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
