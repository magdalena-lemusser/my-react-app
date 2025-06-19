import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ list }) => {
  const [openIndex, setOpenIndex] = useState(null); // Only one open at a time

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="collapse">
      <ul className="collapse__list">
        {list.map((item, index) => (
          <li key={index} className="collapse__item">
            <div className="collapse__header" onClick={() => toggle(index)}>
              <h3 className="collapse__title">{item.title}</h3>
              <span className="collapse__arrow">
                {openIndex === index ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </div>

            {openIndex === index && (
              <div className="collapse__content">
                <p>{item.content}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collapse;
