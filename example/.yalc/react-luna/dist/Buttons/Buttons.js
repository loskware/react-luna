import React from "react";
import { createClassNames } from "../createClassNames";
import "./Buttons.scss";

const Button = ({
  classNames = [],
  size = "normal",
  icon,
  disabled = false,
  children = "",
  onClick
}) => {
  const cn = createClassNames("Button", `Button--${size}`, ...classNames);
  return /*#__PURE__*/React.createElement("button", {
    className: cn,
    onClick: onClick,
    disabled: disabled
  }, icon, children && /*#__PURE__*/React.createElement("span", null, children));
};
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"normal"|"compact"|"large"} [props.size]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */


const SolidButton = ({
  classNames = [],
  size = "normal",
  icon = false,
  disabled = false,
  children = "",
  onClick
}) => {
  return /*#__PURE__*/React.createElement(Button, {
    classNames: ["SolidButton", ...classNames],
    disabled: disabled,
    icon: icon,
    onClick: onClick,
    size: size
  }, children);
};
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"normal"|"compact"|"large"} [props.size]
 * @param {"accent"|"primary"} [props.textColor]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.outlined]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */


const FlatButton = ({
  classNames = [],
  size = "normal",
  textColor = "accent",
  icon,
  disabled = false,
  outlined = false,
  children = "",
  onClick
}) => {
  return /*#__PURE__*/React.createElement(Button, {
    classNames: ["FlatButton", `FlatButton--${textColor}-text-color`, `${outlined ? "FlatButton--outlined" : null}`, ...classNames],
    disabled: disabled,
    icon: icon,
    onClick: onClick,
    size: size
  }, children);
};
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"normal"|"compact"|"large"} [props.size]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */


const FloatingActionButton = ({
  classNames = [],
  size = "normal",
  icon = false,
  disabled = false,
  children = "",
  onClick
}) => {
  return /*#__PURE__*/React.createElement(Button, {
    classNames: ["FloatingActionButton", ...classNames],
    disabled: disabled,
    icon: icon,
    onClick: onClick,
    size: size
  }, children);
};

export { SolidButton, FlatButton, FloatingActionButton };