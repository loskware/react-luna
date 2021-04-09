import { Text } from "../Text/Text";
import "./LabeledText.scss";

interface LabeledTextProps {
  classNames?: string;
  align?: "left" | "center" | "right";
  label: string;
  labelColor?: "accent" | "primary" | "secondary" | "tertiary";
  labelSize?: "body" | "title" | "subtitle" | "label";
  text: string;
  textColor?: "accent" | "primary" | "secondary" | "tertiary";
  textSize?: "body" | "title" | "subtitle" | "label";
}

const LabeledText = ({
  classNames,
  align = "left",
  label,
  labelColor = "secondary",
  labelSize = "label",
  text,
  textColor = "primary",
  textSize = "body",
}: LabeledTextProps) => {
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
