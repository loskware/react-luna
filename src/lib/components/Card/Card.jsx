import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Card.css";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames] array of CSS class names
 * @param {React.ReactNode} [props.children] Card content
 * @param {boolean} [props.hasBorder] render default border
 * @param {boolean} [props.hasShadow] render default shadow
 * @param {React.CSSProperties} [props.style] component in
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 */
const Card = ({
  classNames = [],
  children,
  hasBorder = false,
  hasShadow = false,
  style,
  variant = "plain",
  ...otherProps
}) => {
  const cn = createClassNames(
    "Card",
    `Card-${variant}`,
    hasBorder && "Card-border",
    hasShadow && "Card-shadow",
    ...classNames
  );
  return (
    <div className={cn} style={style} {...otherProps} >
      {children}
    </div>
  );
};

export { Card };
