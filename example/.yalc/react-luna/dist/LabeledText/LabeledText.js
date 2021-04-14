import React from "react";
import { createClassNames } from "../createClassNames";
import { Text } from "../Text/Text";
import "./LabeledText.scss";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"left"|"center"|"right"} [props.align]
 * @param {string} props.label
 * @param {"accent"|"primary"|"secondary"|"tertiary"} [props.labelColor]
 * @param {"body"|"title"|"subtitle"|"label"} [props.labelSize]
 * @param {string} props.text
 * @param {"accent"|"primary"|"secondary"|"tertiary"} [props.textColor]
 * @param {"body"|"title"|"subtitle"|"label"} [props.textSize]
 */

const LabeledText = ({
  classNames = [],
  align = "left",
  label,
  labelColor = "secondary",
  labelSize = "label",
  text,
  textColor = "primary",
  textSize = "body"
}) => {
  const cn = createClassNames("LabeledText", `LabeledText--align-${align}`, ...classNames);
  return /*#__PURE__*/React.createElement("div", {
    className: cn
  }, /*#__PURE__*/React.createElement(Text, {
    size: textSize,
    color: textColor
  }, text), /*#__PURE__*/React.createElement(Text, {
    size: labelSize,
    color: labelColor
  }, label.toUpperCase()));
};

export { LabeledText };