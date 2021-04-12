import { createClassNames } from "../createClassNames";
import "./FlipView.scss";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} props.frontFace
 * @param {any} props.backFace
 * @param {boolean} props.flipped
 */

const FlipView = ({
  classNames = [],
  frontFace,
  backFace,
  flipped
}) => {
  const cn = createClassNames("FlipView", `${flipped ? "FlipView--flipped" : "FlipView--normal"}`, ...classNames);
  return /*#__PURE__*/React.createElement("div", {
    className: cn
  }, /*#__PURE__*/React.createElement("div", {
    className: "FlipView__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "FlipView__front-face"
  }, frontFace), /*#__PURE__*/React.createElement("div", {
    className: "FlipView__back-face"
  }, backFace)));
};

export { FlipView };