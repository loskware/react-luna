import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Card.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} [props.children]
 * @param {boolean} [props.hasShadow]
 * @param {string} [props.padding]
 */
const Card = ({
  classNames = [],
  children,
  padding = "1rem",
  hasShadow = false,
}) => {
  const cn = createClassNames(
    "Card",
    hasShadow && "Card--hasShadow",
    ...classNames
  );
  return (
    <div className={cn} style={{ padding }}>
      {children}
    </div>
  );
};

export { Card };
