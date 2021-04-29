import React from "react";
import { classNames } from "../../classNames";

/**
 * Simple container with round borders and optional border and shadow
 * @param {object} props
 * @param {string} [props.backgroundColor] shortcut for setting background color
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {React.ReactNode} [props.children] Card content
 * @param {boolean} [props.hasBorder] render default border
 * @param {boolean} [props.hasShadow] render default shadow
 * @param {string} [props.padding] shortcut for setting padding
 * @param {React.CSSProperties} [props.style] component inline style
 * @param {"default"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
const Card = ({
  backgroundColor = "",
  classes = [],
  children,
  hasBorder = false,
  hasShadow = true,
  padding = "",
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
    <div
      className={cn}
      style={{ backgroundColor, padding, ...style }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export { Card };
