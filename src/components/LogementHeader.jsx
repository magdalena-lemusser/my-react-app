export default function LogementHeader({ title, location, tags }) {
  return (
    <div className="logement-header">
      <h1 className="logement-header__title">{title}</h1>
      <p className="logement-header__location">{location}</p>
      <div className="logement-header__tags">
        {tags.map((tag, index) => (
          <span className="logement-header__tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
