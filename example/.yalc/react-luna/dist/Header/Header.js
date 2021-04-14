import React from "react";
import { createClassNames } from "../createClassNames";
import "./Header.scss";
/**
 * @param {object} props
 * @param {Array<string>} props.classNames
 * @param {any} [props.leadingBar]
 * @param {any} [props.titleBar]
 * @param {any} [props.trailingBar]
 */

const Header = ({
  classNames = [],
  leadingBar,
  titleBar,
  trailingBar
}) => {
  const cn = createClassNames("Header", ...classNames);
  return /*#__PURE__*/React.createElement("header", {
    className: cn
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header__leading"
  }, leadingBar), /*#__PURE__*/React.createElement("div", {
    className: "Header__title"
  }, titleBar), /*#__PURE__*/React.createElement("div", {
    className: "Header__trailing"
  }, trailingBar));
};

export { Header };