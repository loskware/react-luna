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
  flipped
}) => /*#__PURE__*/React.createElement("div", {
  className: `FlipView ${flipped ? "FlipView--flipped" : "FlipView--normal"} ${classNames ?? ""}`
}, /*#__PURE__*/React.createElement("div", {
  className: "FlipView__wrapper"
}, /*#__PURE__*/React.createElement("div", {
  className: "FlipView__front-face"
}, frontFace), /*#__PURE__*/React.createElement("div", {
  className: "FlipView__back-face"
}, backFace)));

export { FlipView };