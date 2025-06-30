import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ list, renderContent }) => {
  const [openIndexes, setOpenIndexes] = useState([]); // store multiple open items

  const toggle = (index) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // remove if already open
          : [...prev, index] // add if not open
    );
  };

  return (
    <div className="collapse">
      <ul className="collapse__list">
        {list.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <li
              key={index}
              className={`collapse__item ${isOpen ? "expanded" : ""}`}
            >
              <div className="collapse__header" onClick={() => toggle(index)}>
                <h3 className="collapse__title">{item.title}</h3>
                <span className="collapse__arrow">
                  {isOpen ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </span>
              </div>
              {isOpen && (
                <div className="collapse__content">{renderContent(item)}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Collapse;
