const Banner = ({ title, image }) => {
  return (
    <header className="banner">
      <img src={image} alt={title} className="banner__image" />
      <h1 className="banner__title">{title}</h1>
    </header>
  );
};

export default Banner;
