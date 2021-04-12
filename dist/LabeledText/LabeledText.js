import { Text } from "../Text/Text";
import "./LabeledText.scss";
/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {"left"|"center"|"right"} [props.align]
 * @param {string} props.label
 * @param {"accent"|"primary"|"secondary"|"tertiary"} [props.labelColor]
 * @param {"body"|"title"|"subtitle"|"label"} [props.labelSize]
 * @param {string} props.text
 * @param {"accent"|"primary"|"secondary"|"tertiary"} [props.textColor]
 * @param {"body"|"title"|"subtitle"|"label"} [props.textSize]
 */

const LabeledText = ({
  classNames,
  align = "left",
  label,
  labelColor = "secondary",
  labelSize = "label",
  text,
  textColor = "primary",
  textSize = "body"
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `LabeledText LabeledText--align-${align} ${classNames ?? ""}`
  }, /*#__PURE__*/React.createElement(Text, {
    size: textSize,
    color: textColor
  }, text), /*#__PURE__*/React.createElement(Text, {
    size: labelSize,
    color: labelColor
  }, label.toUpperCase()));
};

export { LabeledText };