import { useParams } from "react-router-dom";
import logements from "../data/logements.json";

const FicheLogement = () => {
  const { id } = useParams(); // ← On récupère l’ID depuis l’URL

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <p>Logement introuvable 😢</p>;
  }

  return (
    <section className="fichelogement">
      {/* Tu peux afficher temporairement un titre pour vérifier */}
      <h1>{logement.title}</h1>
      {/* Ton composant carrousel viendra ici */}
    </section>
  );
};

export default FicheLogement;
