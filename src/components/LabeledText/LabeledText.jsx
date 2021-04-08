import { Text } from "widgets";
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
  textSize = "body",
}) => {
  return (
    <div
      className={`LabeledText LabeledText--align-${align} ${classNames ?? ""}`}
    >
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
