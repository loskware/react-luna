import React from "react";
import "./Buttons.scss";

const Button = ({
  classNames,
  size = "default",
  icon,
  disabled = false,
  children = "",
  onClick
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: `Button Button--${size} ${classNames ?? ""}`,
    onClick: onClick,
    disabled: disabled
  }, icon, children && /*#__PURE__*/React.createElement("span", null, children));
};
/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {"default"|"compact"|"large"} [props.size]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */


const SolidButton = ({
  classNames,
  size = "default",
  icon = false,
  disabled = false,
  children = "",
  onClick
}) => {
  return /*#__PURE__*/React.createElement(Button, {
    classNames: `SolidButton ${classNames ?? ""}`,
    disabled: disabled,
    icon: icon,
    onClick: onClick,
    size: size
  }, children);
};
/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {"default"|"compact"|"large"} [props.size]
 * @param {"accent"|"primary"} [props.textColor]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.outlined]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */


const FlatButton = ({
  classNames,
  size = "default",
  textColor = "accent",
  icon,
  disabled = false,
  outlined = false,
  children = "",
  onClick
}) => {
  return /*#__PURE__*/React.createElement(Button, {
    classNames: `FlatButton ${classNames ?? ""} FlatButton--${textColor}-text-color ${outlined ? "FlatButton--outlined" : ""}`,
    disabled: disabled,
    icon: icon,
    onClick: onClick,
    size: size
  }, children);
};
/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {"default"|"compact"|"large"} [props.size]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */


const FloatingActionButton = ({
  classNames,
  size = "default",
  icon = false,
  disabled = false,
  children = "",
  onClick
}) => {
  return /*#__PURE__*/React.createElement(Button, {
    classNames: `FloatingActionButton ${classNames ?? ""}`,
    disabled: disabled,
    icon: icon,
    onClick: onClick,
    size: size
  }, children);
};

export { SolidButton, FlatButton, FloatingActionButton };