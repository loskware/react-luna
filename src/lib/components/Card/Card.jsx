import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Card.css";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} [props.children]
 * @param {boolean} [props.hasShadow]
 * @param {React.CSSProperties} [props.style]
 */
const Card = ({
  classNames = [],
  children,
  hasShadow = false,
  style = {}
}) => {
  const cn = createClassNames(
    "Card",
    hasShadow && "Card-shadow",
    ...classNames
  );
  return (
    <div className={cn} style={style}>
      {children}
    </div>
  );
};

export { Card };
