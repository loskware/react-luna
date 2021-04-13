import React from "react";
import { createClassNames } from "../createClassNames";
import "./Card.scss";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} [props.children]
 * @param {boolean} [props.paddingless]
 */

const Card = ({
  classNames = [],
  children,
  paddingless = false
}) => {
  const cn = createClassNames("Card", `${paddingless ? "Card__paddingless" : ""}`, ...classNames);
  return /*#__PURE__*/React.createElement("div", {
    className: cn
  }, children);
};

export { Card };