const Collapse = ({ list }) => {
  return (
    <div className="collapse">
      <ul className="collapse__list">
        {list.map((item, index) => (
          <li key={index} className="collapse__item">
            {/* We'll add the clickable logic and toggleable content later */}
            <h3 className="collapse__title">{item.title}</h3>
            <p className="collapse__content">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collapse;
