import React from "react";
import "./Buttons.scss";

const Button = ({
  classNames,
  size = "default",
  icon,
  disabled = false,
  children = "",
  onClick,
}) => {
  return (
    <button
      className={`Button Button--${size} ${classNames ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
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
  onClick,
}) => {
  return (
    <Button
      classNames={`SolidButton ${classNames ?? ""}`}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {"default"|"compact"|"large"} [props.size]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.outlined]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */
const FlatButton = ({
  classNames,
  size = "default",
  icon,
  disabled = false,
  outlined = false,
  children = "",
  onClick,
}) => {
  return (
    <Button
      classNames={`FlatButton ${classNames ?? ""} ${
        outlined ? "FlatButton--outlined" : ""
      }`}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
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
  onClick,
}) => {
  return (
    <Button
      classNames={`FloatingActionButton ${classNames ?? ""}`}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

export { SolidButton, FlatButton, FloatingActionButton };