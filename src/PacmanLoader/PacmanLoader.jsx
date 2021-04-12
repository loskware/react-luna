import "./PacmanLoader.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 */
const PacmanLoader = ({ classNames }) => {
  return (
    <div className={`PacmanLoader ${classNames ?? ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { PacmanLoader };
