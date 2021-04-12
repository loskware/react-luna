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
  textSize = "body",
}) => {
  const cn = createClassNames(
    "LabeledText",
    `LabeledText--align-${align}`,
    ...classNames
  );
  return (
    <div className={cn}>
      <Text size={textSize} color={textColor}>
        {text}
      </Text>
      <Text size={labelSize} color={labelColor}>
        {label.toUpperCase()}
      </Text>
    </div>
  );
};

export { LabeledText };
