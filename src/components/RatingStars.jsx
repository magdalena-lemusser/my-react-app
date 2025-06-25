import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export default function RatingStars({ rating }) {
  const totalStars = 5;
  const parsedRating = parseInt(rating); // ✅ On parse la prop ici, sans l'écraser

  return (
    <div className="rating-stars">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < parsedRating ? fullStar : emptyStar}
          className={
            index < parsedRating
              ? "rating-stars__star--full"
              : "rating-stars__star--empty"
          }
        />
      ))}
    </div>
  );
}
