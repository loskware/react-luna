import "./Card.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {any} [props.children]
 * @param {boolean} [props.paddingless]
 */
const Card = ({ classNames, children, paddingless = false }) => {
  return (
    <div
      className={`Card ${classNames ?? ""} ${
        paddingless ? "Card__paddingless" : ""
      }`}
    >
      {children}
    </div>
  );
};

export { Card };
