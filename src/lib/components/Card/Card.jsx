import React from "react";
import { classNames } from "../../classNames";
import "./Card.css";

/**
 * Simple container with round borders and optional border and shadow
 * @param {object} props
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {React.ReactNode} [props.children] Card content
 * @param {boolean} [props.hasBorder] render default border
 * @param {boolean} [props.hasShadow] render default shadow
 * @param {React.CSSProperties} [props.style] component inline style
 * @param {"default"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
const Card = ({
  classes = [],
  children,
  hasBorder = false,
  hasShadow = true,
  style,
  variant = "default",
  ...otherProps
}) => {
  const cn = classNames(
    "Card",
    `Card-${variant}`,
    hasBorder && "Card-border",
    hasShadow && "Card-shadow",
    ...classes
  );
  return (
    <div className={cn} style={style} {...otherProps} >
      {children}
    </div>
  );
};

export { Card };
