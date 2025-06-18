import { Link } from "react-router-dom"; // every component using <link> needs this!

const CardGrid = ({ data }) => {
  return (
    <section className="cardgrid">
      {data.map(({ id, title, cover }) => (
        <Link to={`/logement/${id}`} className="cardgrid__link" key={id}>
          <article className="cardgrid__article">
            <img src={cover} alt={title} className="cardgrid__image" />
            <h2 className="cardgrid__title">{title}</h2>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default CardGrid;
