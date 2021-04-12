import "./FlipView.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {any} props.frontFace
 * @param {any} props.backFace
 * @param {boolean} props.flipped
 */
const FlipView = ({
  classNames,
  frontFace,
  backFace,
  flipped,
}) => (
  <div
    className={`FlipView ${
      flipped ? "FlipView--flipped" : "FlipView--normal"
    } ${classNames ?? ""}`}
  >
    <div className="FlipView__wrapper">
      <div className="FlipView__front-face">{frontFace}</div>
      <div className="FlipView__back-face">{backFace}</div>
    </div>
  </div>
);

export { FlipView };
