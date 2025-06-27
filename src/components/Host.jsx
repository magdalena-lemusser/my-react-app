export default function Host({ name, picture }) {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="logement-host">
      <div className="logement-host__name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img className="logement-host__picture" alt={name} src={picture} />
    </div>
  );
}
