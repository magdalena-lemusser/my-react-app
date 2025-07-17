import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ list, renderContent }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    list.forEach((_, index) => {
      const contentEl = contentRefs.current[index];
      if (!contentEl) return;

      if (openIndexes.includes(index)) {
        const scrollHeight = contentEl.scrollHeight;
        contentEl.style.maxHeight = `${scrollHeight}px`;
        contentEl.style.opacity = "1";
        contentEl.style.transform = "translateY(0)";
      } else {
        contentEl.style.maxHeight = "0px";
        contentEl.style.opacity = "0";
        contentEl.style.transform = "translateY(-10px)";
      }
    });
  }, [openIndexes, list]);

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
                <span className={`collapse__arrow ${isOpen ? "rotated" : ""}`}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </div>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="collapse__content"
                style={{
                  maxHeight: "0px",
                  overflow: "hidden",
                  transition:
                    "max-height 0.6s ease, opacity 0.6s ease, transform 0.6s ease",
                  opacity: 0,
                  transform: "translateY(-10px)",
                }}
              >
                {renderContent(item)}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Collapse;
