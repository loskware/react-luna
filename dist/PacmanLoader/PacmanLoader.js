import React from "react";
import { createClassNames } from "../createClassNames";
import "./PacmanLoader.scss";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 */

const PacmanLoader = ({
  classNames = []
}) => {
  const cn = createClassNames("PacmanLoader", ...classNames);
  return /*#__PURE__*/React.createElement("div", {
    className: cn
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null));
};

export { PacmanLoader };