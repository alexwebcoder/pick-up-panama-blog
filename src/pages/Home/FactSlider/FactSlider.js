import "./FactSlider.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "../../../data/data.js";
import { useState, useEffect } from "react";

const FactSlider = () => {

  const [facts, setFacts] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = facts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, facts]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  
    return (
      <section className="facts">
        <div className="section-center">
          {facts.map((fact, factIndex) => {
            const { id, title } = fact;
            let position = "nextSlide";
            if (factIndex === index) {
              position = "activeSlide";
            }
            if (
              factIndex === index - 1 ||
              (index === 0 && factIndex === facts.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={position}>
                <h3>{title}</h3>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
    </section>

    )
}

export default FactSlider;