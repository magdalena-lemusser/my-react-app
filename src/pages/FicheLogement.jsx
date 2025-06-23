import { useParams, useNavigate } from "react-router-dom";
import Logements from "../data/logements.json";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";

const FicheLogement = () => {
  const { id } = useParams(); // ← On récupère l’ID depuis l’URL
  const navigate = useNavigate();

  const logement = Logements.find((logement) => logement.id === id);

  // Si logement introuvable, on redirige au chargement
  useEffect(() => {
    if (!logement) {
      navigate("/404", { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) return null; // ← pour éviter d'afficher du contenu pendant la redirection

  return (
    <section className="fichelogement">
      {logement && <Slideshow pictures={logement.pictures} />}
    </section>
  );
};

export default FicheLogement;
