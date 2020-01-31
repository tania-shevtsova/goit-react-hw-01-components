import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ stats }) => {
  function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
  }

  random_bg_color();

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>UPLOAD STATS</h2>

      <ul className={css.statList}>
        {stats.map(elem => (
          <li
            key={elem.id}
            className={css.item}
            style={{ backgroundColor: random_bg_color() }}
          >
            <span className={css.label}>{elem.label}</span>
            <span className={css.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  )
};
