import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Card.css";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} [props.children]
 * @param {"primary"|"accent"|"danger"|"warning"|"success"} [props.variant]
 * @param {boolean} [props.hasBorder]
 * @param {boolean} [props.hasShadow]
 * @param {React.CSSProperties} [props.style]
 */
const Card = ({
  classNames = [],
  children,
  variant = "primary",
  hasBorder = false,
  hasShadow = false,
  style = {},
  ...attributes
}) => {
  const cn = createClassNames(
    "Card",
    `Card-${variant}`,
    hasBorder && "Card-border",
    hasShadow && "Card-shadow",
    ...classNames
  );
  return (
    <div className={cn} style={style} {...attributes} >
      {children}
    </div>
  );
};

export { Card };
