import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef CardProps
 * @property {string} [backgroundColor] shortcut for setting background color
 * @property {boolean} [hasBorder] render default border
 * @property {boolean} [hasShadow] render default shadow
 * @property {string|number} [padding] shortcut for setting padding
 * @property {"default"|"accent"|"danger"|"warning"|"success"} [variant] color variant
 */

/**
 * Simple container with round borders and optional border and shadow
 * @param {CardProps & React.ComponentPropsWithoutRef<"div">} props
 */
export const Card = (props) => {
  const {
    backgroundColor,
    className,
    children,
    hasBorder = false,
    hasShadow = false,
    padding,
    style,
    variant = "default",
    ...other
  } = props;

  const cn = classNames(
    "Card",
    `Card-${variant}`,
    hasBorder && "Card-border",
    hasShadow && "Card-shadow",
    className
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
