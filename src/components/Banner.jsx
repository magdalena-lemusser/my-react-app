const Banner = ({ title, image, extraClass = "" }) => {
  return (
    <div className={`banner ${extraClass}`}>
      <img src={image} alt={title} className="banner__image" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};

export default Banner;
