import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * Simple container with round borders and optional border and shadow
 * @param {object} props
 * @param {string} [props.backgroundColor] shortcut for setting background color
 * @param {string} [props.className] custom CSS class
 * @param {React.ReactNode} [props.children] Card content
 * @param {boolean} [props.hasBorder] render default border
 * @param {boolean} [props.hasShadow] render default shadow
 * @param {string} [props.padding] shortcut for setting padding
 * @param {React.CSSProperties} [props.style] component inline style
 * @param {"default"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
export const Card = ({
  backgroundColor = "",
  className,
  children,
  hasBorder = false,
  hasShadow = true,
  padding = "",
  style,
  variant = "default",
  ...other
}) => {
  const cn = classNames(
    "Card",
    `Card-${variant}`,
    hasBorder && "Card-border",
    hasShadow && "Card-shadow",
    className,
  );
  return (
    <div
      className={cn}
      style={{ backgroundColor, padding, ...style }}
      {...other}
    >
      {children}
    </div>
  );
};