import { useParams, useNavigate } from "react-router-dom";
import Logements from "../data/logements.json";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import LogementHeader from "../components/LogementHeader";
import RatingStars from "../components/RatingStars";
import Host from "../components/Host";

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
      <div className="fichelogement__content">
        <div className="fichelogement__header">
          <LogementHeader
            title={logement.title}
            location={logement.location}
            tags={logement.tags}
          />
        </div>
        <div className="fichelogement__rating">
          <Host picture={logement.host.picture} name={logement.host.name} />
          <RatingStars rating={logement.rating} />
        </div>
      </div>
      <div className="fichelogement__collapse fichelogement__collapse--row">
        <Collapse
          list={[{ title: "Description", content: logement.description }]}
          renderContent={(item) => <p>{item.content}</p>}
        />
        <Collapse
          list={[{ title: "Équipements", content: logement.equipments }]}
          renderContent={(item) => (
            <ul>
              {item.content.map((equip, i) => (
                <li key={i}>{equip}</li>
              ))}
            </ul>
          )}
        />
      </div>
    </section>
  );
};

export default FicheLogement;
